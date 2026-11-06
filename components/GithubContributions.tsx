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

const FULL_MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formatGithubTooltip(day: ContributionDay): string {
  const dObj = new Date(day.date + "T00:00:00");
  const monthName = FULL_MONTH_NAMES[dObj.getMonth()];
  const dateNum = dObj.getDate();
  const ordinal = `${dateNum}${getOrdinalSuffix(dateNum)}`;

  if (day.count === 0) {
    return `No contributions on ${monthName} ${ordinal}.`;
  }
  const label = day.count === 1 ? "contribution" : "contributions";
  return `${day.count} ${label} on ${monthName} ${ordinal}.`;
}

// Pastikan kontribusi repo privat di bulan Juli (July 2nd, 9th, 16th) selalu ikut tergabung
function ensurePrivateJulyContributions(
  days: ContributionDay[]
): ContributionDay[] {
  return days.map((day) => {
    const [, mm, dd] = day.date.split("-");
    if (
      mm === "07" &&
      (dd === "02" || dd === "03") &&
      new Date(day.date + "T00:00:00").getDay() === 4
    ) {
      return day.count < 10 ? { ...day, count: 10, level: 4 } : day;
    }
    if (
      mm === "07" &&
      (dd === "09" || dd === "10") &&
      new Date(day.date + "T00:00:00").getDay() === 4
    ) {
      return day.count < 5 ? { ...day, count: 5, level: 3 } : day;
    }
    if (
      mm === "07" &&
      (dd === "16" || dd === "17") &&
      new Date(day.date + "T00:00:00").getDay() === 4
    ) {
      return day.count < 6 ? { ...day, count: 6, level: 4 } : day;
    }
    return day;
  });
}

// Fallback awal (55 contributions) persis seperti profil GitHub danieltigorsinuratt
function buildInitialFallback(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 364);
  start.setDate(start.getDate() - start.getDay());

  const activeMap: Record<
    string,
    { level: 0 | 1 | 2 | 3 | 4; count: number }
  > = {
    "26-5": { level: 2, count: 3 },
    "27-4": { level: 2, count: 3 },
    "27-5": { level: 1, count: 1 },
    "31-1": { level: 1, count: 2 },
    "31-2": { level: 2, count: 3 },
    "31-6": { level: 1, count: 2 },
    "33-3": { level: 1, count: 2 },
    "34-4": { level: 4, count: 10 },
    "35-4": { level: 3, count: 5 },
    "36-4": { level: 4, count: 6 },
    "40-1": { level: 2, count: 3 },
    "43-1": { level: 2, count: 3 },
    "43-3": { level: 4, count: 6 },
    "44-3": { level: 2, count: 2 },
    "44-4": { level: 2, count: 2 },
    "44-5": { level: 2, count: 2 },
    "48-3": { level: 2, count: 2 },
    "52-4": { level: 2, count: 2 },
    "52-5": { level: 1, count: 1 },
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

  return ensurePrivateJulyContributions(days);
}

export const GithubContributions: React.FC<GithubContributionsProps> = ({
  username = "danieltigorsinuratt",
}) => {
  const currentYearStr = String(new Date().getFullYear());
  const initialContributions = useMemo(() => buildInitialFallback(), []);

  const [contributions, setContributions] =
    useState<ContributionDay[]>(initialContributions);
  const [years, setYears] = useState<string[]>([currentYearStr]);
  const [selectedYear, setSelectedYear] = useState<string>("last");
  const [hoveredCell, setHoveredCell] = useState<{
    day: ContributionDay;
    weekIdx: number;
    dayIdx: number;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRealtimeContributions() {
      try {
        const res = await fetch(
          `/api/github-contributions?username=${encodeURIComponent(username)}&year=${encodeURIComponent(selectedYear)}`,
          { cache: "no-store" }
        );

        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            if (Array.isArray(data.years) && data.years.length > 0) {
              setYears(data.years);
            }
            if (
              Array.isArray(data.contributions) &&
              data.contributions.length > 0
            ) {
              setContributions(
                ensurePrivateJulyContributions(data.contributions)
              );
              return;
            }
          }
        }

        // Fallback langsung ke public API
        const metaRes = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`,
          { cache: "no-store" }
        );
        if (metaRes.ok && isMounted) {
          const metaData = await metaRes.json();
          if (metaData?.total && typeof metaData.total === "object") {
            const yrList = Object.keys(metaData.total)
              .filter((k) => /^\d{4}$/.test(k))
              .sort((a, b) => Number(b) - Number(a));
            if (yrList.length > 0) setYears(yrList);
          }
        }

        const directRes = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${encodeURIComponent(selectedYear)}`,
          { cache: "no-store" }
        );
        if (directRes.ok) {
          const directData = await directRes.json();
          if (
            isMounted &&
            Array.isArray(directData.contributions) &&
            directData.contributions.length > 0
          ) {
            setContributions(
              ensurePrivateJulyContributions(directData.contributions)
            );
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
  }, [username, selectedYear]);

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

    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    recentWeeks.forEach((week, wIdx) => {
      if (wIdx > recentWeeks.length - 4) return;
      const firstValidDay = week.find((d) => d !== null);
      if (firstValidDay) {
        const dObj = new Date(firstValidDay.date + "T00:00:00");
        const m = dObj.getMonth();
        if (m !== lastMonth) {
          if (
            labels.length === 0 ||
            wIdx - labels[labels.length - 1].weekIndex >= 3
          ) {
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

  // Tentukan tahun mana yang sedang aktif ditandai biru
  const activeYearBadge =
    selectedYear === "last" ? years[0] || currentYearStr : selectedYear;

  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Row: "Contributions in the last year" di kiri, Icon + Nama GitHub di kanan */}
      <div className="flex items-center justify-between px-2 sm:px-4 mb-4">
        <h2 className="text-sm sm:text-base font-normal text-[#e6edf3] [data-theme='light']_&:text-zinc-900">
          {selectedYear === "last"
            ? "Contributions in the last year"
            : `Contributions in ${selectedYear}`}
        </h2>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#e6edf3] [data-theme='light']_&:text-zinc-800 hover:text-[#58a6ff] transition-colors"
        >
          <Icons.github className="w-4 h-4" />
          <span>{username}</span>
        </a>
      </div>

      {/* Layout Utama: Grafik Kontribusi di Kiri + Pilihan Tahun GitHub di Pojok Kanan */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-5 px-2 sm:px-4">
        {/* Kolom Kiri: Grafik Kontribusi */}
        <div className="flex-1 bg-transparent py-1">
          <div className="w-full">
            {/* Baris Label Bulan (Nov, Dec, Jan, ... Oct) */}
            <div className="flex items-center mb-2">
              <div className="w-11 sm:w-12 flex-shrink-0" />
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

            {/* Grid Kalender: Label Hari di Kiri + 53 Kolom Minggu */}
            <div className="flex items-stretch">
              {/* Label Hari (Mon, Wed, Fri) */}
              <div className="w-11 sm:w-12 flex-shrink-0 grid grid-rows-7 gap-[3px] text-[11px] sm:text-xs text-[#e6edf3] [data-theme='light']_&:text-zinc-700 select-none pr-2">
                <span className="flex items-center opacity-0">Sun</span>
                <span className="flex items-center leading-none">Mon</span>
                <span className="flex items-center opacity-0">Tue</span>
                <span className="flex items-center leading-none">Wed</span>
                <span className="flex items-center opacity-0">Thu</span>
                <span className="flex items-center leading-none">Fri</span>
                <span className="flex items-center opacity-0">Sat</span>
              </div>

              {/* 53 Kolom Minggu */}
              <div className="relative flex-1 grid grid-flow-col auto-cols-fr gap-[3px]">
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
                      const isHovered = hoveredCell?.day.date === day.date;
                      return (
                        <div
                          key={day.date}
                          onMouseEnter={() =>
                            setHoveredCell({ day, weekIdx: wIdx, dayIdx: dIdx })
                          }
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`relative w-full aspect-square rounded-[2px] border border-white/[0.03] [data-theme='light']_&:border-black/[0.06] cursor-pointer ${getLevelClass(
                            day.level
                          )}`}
                        >
                          {isHovered && (
                            <div className="pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded-md bg-[#21262d] px-3 py-1.5 text-xs font-normal text-[#e6edf3] shadow-xl border border-[#30363d]">
                              {formatGithubTooltip(day)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Legend Row: Learn how we count contributions | Less [...] More */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#7d8590] [data-theme='light']_&:text-zinc-500 pl-11 sm:pl-12">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58a6ff] transition-colors"
            >
              Learn how we count contributions
            </a>

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

        {/* Kolom Pojok Kanan: Daftar Tahun Kontribusi (Sinkron dengan GitHub) */}
        <div className="flex lg:flex-col gap-1.5 lg:w-28 flex-shrink-0 pt-1 lg:pt-6">
          {years.map((yr, idx) => {
            const isSelected = activeYearBadge === yr;
            return (
              <button
                key={yr}
                onClick={() => setSelectedYear(idx === 0 ? "last" : yr)}
                className={`px-4 py-2 rounded-md text-xs font-medium text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#1f6feb] text-white font-semibold shadow-sm"
                    : "text-[#7d8590] [data-theme='light']_&:text-zinc-600 hover:bg-[#21262d] [data-theme='light']_&:hover:bg-zinc-200 hover:text-[#e6edf3] [data-theme='light']_&:hover:text-black"
                }`}
              >
                {yr}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
