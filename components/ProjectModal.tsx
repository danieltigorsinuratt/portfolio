"use client";

import React, { useState } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
}) => {
  const [deviceView, setDeviceView] = useState<"laptop" | "mobile">("laptop");

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card — Monochrome */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#141414] [data-theme='light']_&:bg-white border border-zinc-800 [data-theme='light']_&:border-zinc-300 shadow-2xl z-10 p-5 sm:p-8 text-left transition-all">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black transition-colors cursor-pointer z-20"
          aria-label="Close project modal"
        >
          <Icons.close className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-md bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-xs font-semibold uppercase tracking-wider">
              {project.categoryLabel[lang]}
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-xs text-zinc-400 font-mono font-medium">
              {project.role[lang]}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white [data-theme='light']_&:text-black font-stencil tracking-wide">
            {project.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 [data-theme='light']_&:text-zinc-700 mt-2 font-medium">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Mockup Showcase with Switcher — Monochrome */}
        <div className="mb-8 rounded-2xl bg-zinc-950 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 p-4 sm:p-6">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800 [data-theme='light']_&:border-zinc-200">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              {lang === "id" ? "PRATINJAU MOCKUP LAYAR" : "SCREEN MOCKUP PREVIEW"}
            </span>
            <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300">
              <button
                onClick={() => setDeviceView("laptop")}
                className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  deviceView === "laptop"
                    ? "bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white font-bold"
                    : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                }`}
              >
                <Icons.laptop className="w-3.5 h-3.5" />
                <span>Laptop</span>
              </button>
              <button
                onClick={() => setDeviceView("mobile")}
                className={`px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  deviceView === "mobile"
                    ? "bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white font-bold"
                    : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                }`}
              >
                <Icons.smartphone className="w-3.5 h-3.5" />
                <span>HP (Mobile)</span>
              </button>
            </div>
          </div>

          {/* Interactive Mockup Container */}
          <div className="flex items-center justify-center min-h-[220px] sm:min-h-[280px]">
            {deviceView === "laptop" ? (
              // Laptop Mockup Frame — Monochrome
              <div className="w-full max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 shadow-2xl overflow-hidden">
                {/* Browser Top Bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-zinc-700">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                  <div className="mx-auto px-4 py-0.5 rounded bg-zinc-900 text-[10px] text-zinc-400 font-mono truncate max-w-xs">
                    https://{project.id}.danielsinurat.dev
                  </div>
                </div>
                {/* Screen Content Graphic */}
                <div className="p-6 sm:p-10 bg-zinc-950 min-h-[180px] sm:min-h-[220px] flex flex-col justify-between text-white relative">
                  <div className="flex items-center justify-between">
                    <span className="font-stencil font-bold tracking-wider text-sm opacity-90">
                      {project.title[lang]}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 backdrop-blur">
                      LIVE v2.4
                    </span>
                  </div>
                  <div className="my-6">
                    <div className="text-xs font-mono text-zinc-400 uppercase mb-1">
                      System Active &bull; 99.9% Uptime
                    </div>
                    <div className="text-sm sm:text-base font-bold">
                      {project.tagline[lang]}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // HP Mobile Mockup Frame — Monochrome
              <div className="w-64 sm:w-72 rounded-[2.5rem] border-4 border-zinc-700 bg-zinc-900 shadow-2xl p-2 overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-3.5 bg-zinc-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-700" />
                </div>
                {/* Mobile Screen Content */}
                <div className="rounded-[2rem] p-4 bg-zinc-950 min-h-[260px] flex flex-col justify-between text-white text-xs">
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-[11px] font-stencil">
                      DS APP
                    </span>
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="my-4">
                    <div className="font-bold text-xs mb-1">
                      {project.title[lang]}
                    </div>
                    <p className="text-[10px] text-zinc-400 leading-tight">
                      Mobile Responsive Layout &bull; Optimized Touch
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur text-[10px] font-mono text-zinc-300">
                    Fast API &bull; Low Latency
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto mt-2" />
              </div>
            )}
          </div>
        </div>

        {/* Detailed Sections: Masalah, Solusi, Hasil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Masalah (Problem) */}
          <div className="rounded-2xl p-5 bg-zinc-900/60 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300">
            <div className="text-xs font-mono text-zinc-400 font-bold uppercase mb-2 flex items-center gap-1.5">
              <span>&bull;</span>
              <span>{lang === "id" ? "MASALAH / PROBLEM" : "PROBLEM STATEMENT"}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed">
              {project.problem[lang]}
            </p>
          </div>

          {/* Solusi (Solution) */}
          <div className="rounded-2xl p-5 bg-zinc-900/60 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300">
            <div className="text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-800 font-bold uppercase mb-2 flex items-center gap-1.5">
              <span>&bull;</span>
              <span>{lang === "id" ? "SOLUSI & ARSITEKTUR" : "SOLUTION & ARCHITECTURE"}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed">
              {project.solution[lang]}
            </p>
          </div>
        </div>

        {/* Hasil & Dampak (Key Metrics) */}
        <div className="rounded-2xl p-5 bg-zinc-900/60 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 mb-8">
          <div className="text-xs font-mono text-zinc-400 font-bold uppercase mb-3 flex items-center gap-1.5">
            <Icons.sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>{lang === "id" ? "HASIL & DAMPAK PROYEK" : "KEY IMPACT & METRICS"}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-zinc-800/40 [data-theme='light']_&:bg-zinc-200 border border-zinc-700/60 [data-theme='light']_&:border-zinc-300 flex items-start gap-2.5"
              >
                <div className="p-1 rounded bg-zinc-700 text-white mt-0.5">
                  <Icons.check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-zinc-200 [data-theme='light']_&:text-zinc-800 font-medium leading-snug">
                  {metric[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <div className="text-xs font-mono text-zinc-400 font-bold uppercase mb-3">
            {lang === "id" ? "TEKNOLOGI YANG DIGUNAKAN" : "TECHNOLOGIES EMPLOYED"}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo & Source Code — Monochrome */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-zinc-200 [data-theme='light']_&:text-zinc-800 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Icons.github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white hover:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-800 text-xs font-bold shadow-lg flex items-center gap-2 transition-all hover:scale-105"
            >
              <Icons.external className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
};
