"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Language } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface GithubContributionsProps {
  lang: Language;
  username?: string;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Fallback awal (55 contributions) sembari menunggu sinkronisasi real-time selesai
function buildInitialFallback(): { total: number; contributions: ContributionDay[] } {
  const days: ContributionDay[] = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 364);
  start.setDate(start.getDate() - start.getDay());

  const activeMap: Record<string, { level: 0 | 1 | 2 | 3 | 4; count: number }> = {
    "26-5": { level: 2, count: 3 },
    "27-4": { level: 2, count: 3 },
    "27-5": { level: 1, count: 1 },
    "31-1": { level: 1, count: 2 },
    "31-2": { level: 2, count: 3 },
    "31-6": { level: 1, count: 2 },
    "33-3": { level: 1, count: 2 },
    "34-4": { level: 4, count: 7 },
    "35-4": { level: 3, count: 5 },
    "36-4": { level: 4, count: 7 },
    "40-1": { level: 2, count: 3 },
    "43-1": { level: 2, count: 3 },
    "43-3": { level: 4, count: 6 },
    "44-3": { level: 2, count: 2 },
    "44-4": { level: 2, count: 2 },
    "44-5": { level: 2, count: 2 },
    "48-3": { level: 2, count: 2 },
    "52-4": { level: 2, count: 2 },
  };

  const totalDays = 53 * 7;
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const weekIdx = Math.floor(i / 7);
    const dayIdx = i % 7;
    const key = `${weekIdx}-${dayIdx}`;
    const preset = activeMap[key];

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    days.push({
      date: `${yyyy}-${mm}-${dd}`,
      count: preset ? preset.count : 0,
      level: preset ? preset.level : 0,
    });
  }

  return {
    total: 55,
    contributions: days,
  };
}

export const GithubContributions: React.FC<GithubContributionsProps> = ({
  username = "danieltigorsinuratt",
}) => {
  const initialData = useMemo(() => buildInitialFallback(), []);
  const [contributions, setContributions] = useState<ContributionDay[]>(
    initialData.contributions
  );
  const [totalContributions, setTotalContributions] = useState<number>(
    initialData.total
  );
  const [isLive, setIsLive] = useState<boolean>(false);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRealtimeContributions() {
      try {
        const res = await fetch(
          `/api/github-contributions?username=${encodeURIComponent(username)}`,
          { cache: "no-store" }
        );

        if (res.ok) {
          const data = await res.json();
          if (
            isMounted &&
            Array.isArray(data.contributions) &&
            data.contributions.length > 0
          ) {
            setContributions(data.contributions);
            setTotalContributions(data.total ?? 0);
            setIsLive(true);
            return;
          }
        }

        const directRes = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
          { cache: "no-store" }
        );
        if (directRes.ok) {
          const directData = await directRes.json();
          if (
            isMounted &&
            Array.isArray(directData.contributions) &&
            directData.contributions.length > 0
          ) {
            setContributions(directData.contributions);
            setTotalContributions(
              directData.total?.lastYear ??
                directData.contributions.reduce(
                  (acc: number, item: ContributionDay) => acc + (item.count || 0),
                  0
                )
            );
            setIsLive(true);
          }
        }
      } catch {
        // Tetap tampilkan grafik fallback jika offline
      }
    }

    fetchRealtimeContributions();

    const interval = setInterval(fetchRealtimeContributions, 5 * 60 * 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [username]);

  // Susun daftar hari menjadi kolom mingguan (Minggu - Sabtu)
  const { weeks, monthLabels } = useMemo(() => {
    if (!contributions.length) return { weeks: [], monthLabels: [] };

    const sorted = [...contributions].sort((a, b) =>
      a.date.localeCompare(b.date)
    );

    const weeksList: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];

    sorted.forEach((day, idx) => {
      const dateObj = new Date(day.date + "T00:00:00");
      const dayOfWeek = dateObj.getDay();

      if (idx > 0 && dayOfWeek === 0) {
        weeksList.push(currentWeek);
        currentWeek = [null, null, null, null, null, null, null];
      }
      currentWeek[dayOfWeek] = day;
    });

    weeksList.push(currentWeek);

    const recentWeeks = weeksList.slice(-53);

    // Hitung posisi label bulan (maksimal 12 bulan, tidak menumpuk di ujung kanan)
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    recentWeeks.forEach((week, wIdx) => {
      if (wIdx > recentWeeks.length - 4) return;
      const firstValidDay = week.find((d) => d !== null);
      if (firstValidDay) {
        const dObj = new Date(firstValidDay.date + "T00:00:00");
        const m = dObj.getMonth();
        if (m !== lastMonth) {
          if (labels.length === 0 || wIdx - labels[labels.length - 1].weekIndex >= 3) {
            labels.push({ month: MONTH_NAMES[m], weekIndex: wIdx });
            lastMonth = m;
          }
        }
      }
    });

    return { weeks: recentWeeks, monthLabels: labels };
  }, [contributions]);

  const getLevelClass = (level: 0 | 1 | 2 | 3 | 4) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] [data-theme='light']_&:bg-[#9be9a8]";
      case 2:
        return "bg-[#006d32] [data-theme='light']_&:bg-[#40c463]";
      case 3:
        return "bg-[#26a641] [data-theme='light']_&:bg-[#30a14e]";
      case 4:
        return "bg-[#39d353] [data-theme='light']_&:bg-[#216e39]";
      default:
        return "bg-[#161b22] [data-theme='light']_&:bg-[#ebedf0]";
    }
  };

  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* GitHub Contribution Grid — Background Transparan & Tanpa Header Atas */}
      <div className="bg-transparent px-2 py-2 sm:px-4 sm:py-4 overflow-hidden">
        <div className="w-full">
          {/* Baris Label Bulan (Nov, Dec, Jan, ... Oct) */}
          <div className="flex items-center mb-1.5">
            {/* Spacer sejajar dengan kolom Mon/Wed/Fri */}
            <div className="w-9 sm:w-10 flex-shrink-0" />
            <div className="relative flex-1 h-4 text-xs text-[#e6edf3] [data-theme='light']_&:text-zinc-700">
              {monthLabels.map((item, idx) => (
                <span
                  key={idx}
                  className="absolute top-0 text-[11px] sm:text-xs font-normal leading-none"
                  style={{
                    left: `${(item.weekIndex / Math.max(1, weeks.length)) * 100}%`,
                  }}
                >
                  {item.month}
                </span>
              ))}
            </div>
          </div>

          {/* Grid Kalender: Label Hari di Kiri + 53 Kolom Minggu yang Pas 100% Tanpa Scroll */}
          <div className="flex items-stretch">
            {/* Label Hari (Mon, Wed, Fri) — Tidak terpotong */}
            <div className="w-9 sm:w-10 flex-shrink-0 grid grid-rows-7 gap-[3px] text-[11px] sm:text-xs text-[#e6edf3] [data-theme='light']_&:text-zinc-700 select-none pr-2">
              <span className="flex items-center opacity-0">Sun</span>
              <span className="flex items-center leading-none">Mon</span>
              <span className="flex items-center opacity-0">Tue</span>
              <span className="flex items-center leading-none">Wed</span>
              <span className="flex items-center opacity-0">Thu</span>
              <span className="flex items-center leading-none">Fri</span>
              <span className="flex items-center opacity-0">Sat</span>
            </div>

            {/* 53 Kolom Minggu — Responsif Tanpa Scrollbar */}
            <div className="flex-1 grid grid-flow-col auto-cols-fr gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                  {week.map((day, dIdx) => {
                    if (!day) {
                      return (
                        <div
                          key={dIdx}
                          className="w-full aspect-square rounded-[2px] bg-transparent"
                        />
                      );
                    }
                    return (
                      <div
                        key={day.date}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        title={`${day.count} contributions on ${day.date}`}
                        className={`w-full aspect-square rounded-[2px] border border-white/[0.03] [data-theme='light']_&:border-black/[0.06] transition-transform hover:scale-125 cursor-pointer ${getLevelClass(
                          day.level
                        )}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legend Row: Learn how we count contributions | Less [...] More */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#7d8590] [data-theme='light']_&:text-zinc-500 pl-9 sm:pl-10">
          <div>
            {hoveredDay ? (
              <span className="text-[#e6edf3] [data-theme='light']_&:text-zinc-800 font-mono text-[11px]">
                {hoveredDay.count} contributions on {hoveredDay.date}
              </span>
            ) : (
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#58a6ff] transition-colors"
              >
                Learn how we count contributions
              </a>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
            <span className="mr-0.5">Less</span>
            <span className="w-[11px] h-[11px] rounded-[2px] bg-[#161b22] [data-theme='light']_&:bg-[#ebedf0] border border-white/[0.04] [data-theme='light']_&:border-black/[0.06]" />
            <span className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429] [data-theme='light']_&:bg-[#9be9a8]" />
            <span className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32] [data-theme='light']_&:bg-[#40c463]" />
            <span className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641] [data-theme='light']_&:bg-[#30a14e]" />
            <span className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353] [data-theme='light']_&:bg-[#216e39]" />
            <span className="ml-0.5">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};
