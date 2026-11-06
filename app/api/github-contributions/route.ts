import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

// Kontribusi repositori privat yang tidak diekspos oleh endpoint publik tanpa token
const PRIVATE_CONTRIBUTIONS_MERGE: Record<
  string,
  { count: number; level: 0 | 1 | 2 | 3 | 4 }
> = {
  "2026-07-02": { count: 10, level: 4 },
  "2026-07-09": { count: 5, level: 3 },
  "2026-07-16": { count: 6, level: 4 },
  "2025-07-03": { count: 10, level: 4 },
  "2025-07-10": { count: 5, level: 3 },
  "2025-07-17": { count: 6, level: 4 },
};

function mergePrivateContributions(days: ContributionDay[]): ContributionDay[] {
  return days.map((day) => {
    const priv = PRIVATE_CONTRIBUTIONS_MERGE[day.date];
    if (priv && day.count < priv.count) {
      return {
        ...day,
        count: priv.count,
        level: priv.level,
      };
    }
    return day;
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "danieltigorsinuratt";
  const year = searchParams.get("year") || "last";

  try {
    // Ambil daftar tahun aktif & data kontribusi dari GitHub Contributions API (jogruber)
    let availableYears: string[] = [];
    try {
      const metaRes = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`,
        {
          headers: { Accept: "application/json" },
          cache: "no-store",
        }
      );
      if (metaRes.ok) {
        const metaData = await metaRes.json();
        if (metaData?.total && typeof metaData.total === "object") {
          availableYears = Object.keys(metaData.total)
            .filter((k) => /^\d{4}$/.test(k))
            .sort((a, b) => Number(b) - Number(a));
        }
      }
    } catch {
      // Lanjutkan jika gagal mengambil metadata tahun
    }

    // 1. Ambil langsung halaman kontribusi resmi GitHub (mendukung parameter tahun)
    const ghUrl =
      year && year !== "last"
        ? `https://github.com/users/${encodeURIComponent(username)}/contributions?from=${encodeURIComponent(year)}-01-01&to=${encodeURIComponent(year)}-12-31`
        : `https://github.com/users/${encodeURIComponent(username)}/contributions`;

    const ghRes = await fetch(ghUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
        Accept: "text/html",
      },
      cache: "no-store",
    });

    if (ghRes.ok) {
      const html = await ghRes.text();

      // Cek apakah ada year-link di HTML GitHub
      const yearLinkRegex = /id="year-link-(\d{4})"/g;
      let yMatch: RegExpExecArray | null;
      const htmlYears = new Set<string>(availableYears);
      while ((yMatch = yearLinkRegex.exec(html)) !== null) {
        htmlYears.add(yMatch[1]);
      }

      // Map id komponen ke jumlah kontribusi dari elemen <tool-tip for="...">
      const tooltipCounts: Record<string, number> = {};
      const tooltipRegex =
        /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
      let tMatch: RegExpExecArray | null;
      while ((tMatch = tooltipRegex.exec(html)) !== null) {
        const id = tMatch[1];
        const text = tMatch[2].trim();
        const numMatch = text.match(/^(\d+)\s+contribution/i);
        tooltipCounts[id] = numMatch ? parseInt(numMatch[1], 10) : 0;
      }

      // Parse setiap sel <td ... data-date="YYYY-MM-DD" id="..." data-level="0..4">
      const tdRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>/g;
      const contributions: ContributionDay[] = [];
      let match: RegExpExecArray | null;

      while ((match = tdRegex.exec(html)) !== null) {
        const tag = match[0];
        const date = match[1];
        const levelMatch = tag.match(/data-level="([0-4])"/);
        const idMatch = tag.match(/id="([^"]+)"/);

        const level = (levelMatch ? parseInt(levelMatch[1], 10) : 0) as
          | 0
          | 1
          | 2
          | 3
          | 4;
        const cellId = idMatch ? idMatch[1] : "";
        const fallbackCount =
          level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 5 : 10;
        const count =
          cellId && tooltipCounts[cellId] !== undefined
            ? tooltipCounts[cellId]
            : fallbackCount;

        contributions.push({
          date,
          count,
          level,
        });
      }

      contributions.sort((a, b) => a.date.localeCompare(b.date));

      if (contributions.length > 0) {
        const merged = mergePrivateContributions(contributions);
        const total = merged.reduce((acc, d) => acc + d.count, 0);
        const sortedYears = Array.from(htmlYears).sort(
          (a, b) => Number(b) - Number(a)
        );
        return NextResponse.json({
          username,
          year,
          years: sortedYears,
          total,
          contributions: merged,
          source: "github-direct",
        });
      }
    }

    // 2. Fallback: GitHub Contributions API (jogruber)
    const apiRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${encodeURIComponent(year)}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }
    );

    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && Array.isArray(data.contributions)) {
        const merged = mergePrivateContributions(data.contributions);
        const total = merged.reduce(
          (acc: number, d: ContributionDay) => acc + (d.count || 0),
          0
        );
        return NextResponse.json({
          username,
          year,
          years: availableYears,
          total,
          contributions: merged,
          source: "github-contributions-api",
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
