"use client";

import React, { useState, useEffect } from "react";
import { Language, experienceList, ExperienceItem } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const [selectedDocItem, setSelectedDocItem] = useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (selectedDocItem) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [selectedDocItem]);

  return (
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header — Monochrome */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-zinc-800 [data-theme='light']_&:border-zinc-300 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-1">
            <span>02.</span>
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
                    {item.company} &bull;{" "}
                    <span className="text-zinc-500 font-normal text-xs">
                      {item.location}
                    </span>
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
                  <div
                    key={i}
                    className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700"
                  >
                    <Icons.chevronRight className="w-3.5 h-3.5 text-zinc-400 mt-1 flex-shrink-0" />
                    <span>{h[lang]}</span>
                  </div>
                ))}
              </div>

              {/* Footer: Tech Stack / Skills on Left & Dokumentasi Button on Bottom-Right */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 border border-zinc-800 [data-theme='light']_&:border-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tombol Dokumentasi di Pojok Kanan Bawah */}
                {item.documentationUrl ? (
                  <a
                    href={item.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-end sm:self-auto px-4 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-semibold text-white [data-theme='light']_&:text-black flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>{lang === "id" ? "Dokumentasi" : "Documentation"}</span>
                    <Icons.arrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedDocItem(item)}
                    className="self-end sm:self-auto px-4 py-2 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-semibold text-white [data-theme='light']_&:text-black flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-md"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>{lang === "id" ? "Dokumentasi" : "Documentation"}</span>
                    <Icons.arrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Documentation Modal */}
      {selectedDocItem && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-[#08080a]/95 [data-theme='light']_&:bg-zinc-50/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedDocItem(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 p-6 sm:p-8 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-xs font-semibold uppercase tracking-wider">
                  {selectedDocItem.type[lang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white [data-theme='light']_&:text-black mt-2">
                  {selectedDocItem.role[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 mt-1">
                  {selectedDocItem.company} &bull; {selectedDocItem.period}
                </p>
              </div>
              <button
                onClick={() => setSelectedDocItem(null)}
                className="p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 cursor-pointer transition-colors"
                aria-label="Close documentation modal"
              >
                <Icons.close className="w-5 h-5" />
              </button>
            </div>

            {selectedDocItem.documentationImages &&
            selectedDocItem.documentationImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedDocItem.documentationImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="group/photo relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 [data-theme='light']_&:border-zinc-300 [data-theme='light']_&:hover:border-zinc-500 bg-black/40 shadow-lg transition-all duration-300 hover:-translate-y-1.5 select-none"
                  >
                    <img
                      src={imgSrc}
                      alt={`${selectedDocItem.role[lang]} Documentation ${idx + 1}`}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                      <span className="text-xs font-medium text-white">
                        {lang === "id" ? `Dokumentasi #${idx + 1}` : `Photo #${idx + 1}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-700 [data-theme='light']_&:border-zinc-300 bg-zinc-900/40 [data-theme='light']_&:bg-zinc-100 p-10 text-center">
                <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600">
                  {lang === "id"
                    ? "Belum ada foto dokumentasi yang ditambahkan untuk kegiatan ini."
                    : "No documentation photos have been added for this activity yet."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
