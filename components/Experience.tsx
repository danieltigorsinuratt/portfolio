"use client";

import React from "react";
import { Language, experienceList } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header — Monochrome */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-zinc-800 [data-theme='light']_&:border-zinc-300 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-1">
            <span>04.</span>
            <span className="uppercase tracking-widest text-zinc-400">
              {lang === "id" ? "REKAM JEJAK PROFESIONAL" : "CAREER & MILESTONES"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil tracking-wider text-white [data-theme='light']_&:text-black">
            EXPERIENCE &amp; JOURNEY
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono">
          {lang === "id"
            ? "Pengalaman kerja industri, proyek studio, dan akademik terapan."
            : "Industry experience, studio projects, and applied academic achievements."}
        </p>
      </div>

      {/* Timeline Container — Monochrome */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-zinc-800 [data-theme='light']_&:border-zinc-300 space-y-10">
        {experienceList.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-black [data-theme='light']_&:bg-white border-2 border-zinc-500 group-hover:border-white [data-theme='light']_&:group-hover:border-black group-hover:scale-125 transition-all flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-300 [data-theme='light']_&:bg-zinc-700 group-hover:bg-white [data-theme='light']_&:group-hover:bg-black" />
            </div>

            {/* Experience Card */}
            <div className="slide-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-xs font-semibold uppercase tracking-wider">
                    {item.type[lang]}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white [data-theme='light']_&:text-black font-stencil tracking-wide mt-1">
                    {item.role[lang]}
                  </h3>
                  <div className="text-sm font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700">
                    {item.company} &bull; <span className="text-zinc-500 font-normal text-xs">{item.location}</span>
                  </div>
                </div>

                <div className="self-start sm:self-auto px-3 py-1 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 font-mono text-xs font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700 whitespace-nowrap">
                  {item.period}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed mt-3 mb-4">
                {item.description[lang]}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700">
                    <Icons.chevronRight className="w-3.5 h-3.5 text-zinc-400 mt-1 flex-shrink-0" />
                    <span>{h[lang]}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 border border-zinc-800 [data-theme='light']_&:border-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
