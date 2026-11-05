"use client";

import React, { useState, useEffect, useRef } from "react";
import { Language, statistics } from "@/data/portfolio-data";

interface StatsProps {
  lang: Language;
}

export const Stats: React.FC<StatsProps> = ({ lang }) => {
  const [counts, setCounts] = useState<number[]>(statistics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          statistics.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 1600;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const next = [...prev];
                next[index] = start;
                return next;
              });

              if (start >= end) {
                clearInterval(timer);
              }
            }, Math.max(stepTime, 20));
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl p-6 sm:p-10 border border-zinc-800 [data-theme='light']_&:border-zinc-300 bg-zinc-950/60 [data-theme='light']_&:bg-zinc-100 shadow-xl overflow-hidden">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-2xl bg-zinc-900/50 [data-theme='light']_&:bg-white border border-zinc-800/80 [data-theme='light']_&:border-zinc-300 hover:border-zinc-500 transition-colors"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-stencil text-white [data-theme='light']_&:text-black tracking-tight">
                {counts[idx]}
                <span className="text-zinc-400">{stat.suffix}</span>
              </div>
              <div className="font-bold text-xs sm:text-sm text-zinc-200 [data-theme='light']_&:text-zinc-800 mt-2">
                {stat.label[lang]}
              </div>
              <div className="text-[11px] text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono mt-0.5">
                {stat.sub[lang]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
