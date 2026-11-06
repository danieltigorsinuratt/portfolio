import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "danieltigorsinuratt";

  try {
    // 1. Coba ambil data real-time dari GitHub Contributions API (jogruber)
    const apiRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && Array.isArray(data.contributions)) {
        return NextResponse.json({
          username,
          total: data.total?.lastYear ?? data.contributions.reduce((acc: number, d: ContributionDay) => acc + (d.count || 0), 0),
          contributions: data.contributions,
          source: "github-contributions-api",
        });
      }
    }

    // 2. Fallback: Ambil langsung halaman kontribusi resmi GitHub
    const ghRes = await fetch(
      `https://github.com/users/${encodeURIComponent(username)}/contributions`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
          Accept: "text/html",
        },
        cache: "no-store",
      }
    );

    if (ghRes.ok) {
      const html = await ghRes.text();

      // Parse total contributions dari heading GitHub
      const totalMatch = html.match(/([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i);
      const parsedTotal = totalMatch
        ? parseInt(totalMatch[1].replace(/,/g, ""), 10)
        : 0;

      // Parse setiap sel <td ... data-date="YYYY-MM-DD" data-level="0..4">
      const cellRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"/g;
      const contributions: ContributionDay[] = [];
      let match: RegExpExecArray | null;

      while ((match = cellRegex.exec(html)) !== null) {
        const date = match[1];
        const level = parseInt(match[2], 10) as 0 | 1 | 2 | 3 | 4;
        const estimatedCount = level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10;
        contributions.push({
          date,
          count: estimatedCount,
          level,
        });
      }

      contributions.sort((a, b) => a.date.localeCompare(b.date));

      if (contributions.length > 0) {
        return NextResponse.json({
          username,
          total: parsedTotal || contributions.reduce((a, b) => a + b.count, 0),
          contributions,
          source: "github-direct",
        });
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch GitHub contributions" },
      { status: 502 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to reach GitHub", details: String(error) },
      { status: 500 }
    );
  }
}
