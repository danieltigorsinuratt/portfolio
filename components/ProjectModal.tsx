"use client";

import React, { useState, useEffect } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";
import { MobilePhoneMockup } from "./MobilePhoneMockup";

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
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    setPreviewMode("desktop");
    if (isOpen && project) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
      };
    }
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#08080a]/98 [data-theme='light']_&:bg-zinc-50/98 backdrop-blur-xl transition-opacity">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Top Back Button (Matching Image 1: <- Back) */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white [data-theme='light']_&:text-zinc-600 [data-theme='light']_&:hover:text-black transition-colors mb-8 cursor-pointer group"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        {/* Main 2-Column Layout Matching Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Title, Description, Counters, Links, Technologies Used */}
          <div className="lg:col-span-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white [data-theme='light']_&:text-black">
              {project.title[lang]}
            </h1>
            <div className="w-16 h-0.5 bg-zinc-600 [data-theme='light']_&:bg-zinc-400 mt-4 mb-6 rounded-full" />

            <p className="text-xs sm:text-sm md:text-base text-zinc-400 [data-theme='light']_&:text-zinc-600 leading-relaxed mb-8">
              {project.problem[lang]}
            </p>

            {/* 2 Stat Cards Side-by-Side (Technologies Used & Key Features) */}
            <div className="grid grid-cols-2 gap-4 max-w-md mb-6">
              {/* Stat Card 1: Technologies Used */}
              <div className="rounded-2xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 p-4 flex items-center gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300 flex items-center justify-center text-zinc-300 [data-theme='light']_&:text-zinc-700 shrink-0">
                  <Icons.code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white [data-theme='light']_&:text-black leading-tight">
                    {project.techStack.length}
                  </div>
                  <div className="text-[11px] text-zinc-400 [data-theme='light']_&:text-zinc-500">
                    Technologies Used
                  </div>
                </div>
              </div>

              {/* Stat Card 2: Key Features */}
              <div className="rounded-2xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 p-4 flex items-center gap-3.5 shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300 flex items-center justify-center text-zinc-300 [data-theme='light']_&:text-zinc-700 shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white [data-theme='light']_&:text-black leading-tight">
                    {project.metrics.length}
                  </div>
                  <div className="text-[11px] text-zinc-400 [data-theme='light']_&:text-zinc-500">
                    Key Features
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Action Buttons Side-by-Side (Live Demo / No Link & GitHub / No Link) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#121215] hover:bg-zinc-800 [data-theme='light']_&:bg-white [data-theme='light']_&:hover:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-medium text-zinc-200 [data-theme='light']_&:text-zinc-800 flex items-center gap-2 transition-colors"
                >
                  <Icons.external className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <div className="px-4 py-2.5 rounded-xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-medium text-zinc-400 [data-theme='light']_&:text-zinc-500 flex items-center gap-2">
                  <Icons.external className="w-3.5 h-3.5" />
                  <span>No Link</span>
                </div>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#121215] hover:bg-zinc-800 [data-theme='light']_&:bg-white [data-theme='light']_&:hover:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-medium text-zinc-200 [data-theme='light']_&:text-zinc-800 flex items-center gap-2 transition-colors"
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
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                  <span>Github</span>
                </a>
              ) : (
                <div className="px-4 py-2.5 rounded-xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-medium text-zinc-400 [data-theme='light']_&:text-zinc-500 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5"
                  >
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                  <span>No Link</span>
                </div>
              )}
            </div>

            {/* Technologies Used Section */}
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white [data-theme='light']_&:text-black mb-3.5">
                <Icons.code className="w-4 h-4 text-zinc-400" />
                <span>Technologies Used</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-2 rounded-xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 text-xs font-medium text-zinc-300 [data-theme='light']_&:text-zinc-800 flex items-center gap-2 shadow-sm"
                  >
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-zinc-300 [data-theme='light']_&:text-zinc-700 shrink-0"
                    >
                      {/* Top Cube */}
                      <path d="M19.5 30.5V17L30.5 11L33.5 12.6" />
                      <path d="M36.5 14.3L41.5 17V31.5" />
                      <path d="M19.5 17L30.5 23L41.5 17" />
                      <path d="M30.5 23V36.5" />
                      {/* 3 Dots on Top Cube Right Face */}
                      <circle cx="38" cy="24.2" r="1.4" fill="currentColor" stroke="none" />
                      <circle cx="38" cy="28" r="1.4" fill="currentColor" stroke="none" />
                      <circle cx="35" cy="29" r="1.4" fill="currentColor" stroke="none" />

                      {/* Bottom-Left Cube */}
                      <path d="M8.5 36.5L19.5 30.5L30.5 36.5L19.5 42.5L8.5 36.5Z" />
                      <path d="M8.5 36.5V40.5" />
                      <path d="M8.5 44V50L19.5 56L30.5 50V36.5" />
                      <path d="M19.5 42.5V56" />

                      {/* Bottom-Right Tilted Cube */}
                      <path d="M34 32H46.5L54.5 42H42L34 32Z" />
                      <path d="M34 32L28.5 44.5L36.5 54.5L42 42" />
                      <path d="M36.5 54.5H49L50.8 50.5" />
                      <path d="M52.3 47L54.5 42" />
                    </svg>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Top Preview Showcase + Bottom Key Features Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Preview Card */}
            <div className="rounded-3xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 p-4 sm:p-5 shadow-2xl overflow-hidden">
              {/* View Switcher Pill Bar */}
              {(project.desktopImage || project.mobileImage) && (
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 [data-theme='light']_&:text-zinc-500">
                    {project.title[lang]} Preview
                  </span>
                  <div className="inline-flex items-center gap-1 p-1 rounded-full bg-zinc-900/90 [data-theme='light']_&:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300">
                    <button
                      onClick={() => setPreviewMode("desktop")}
                      className={`px-3.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                        previewMode === "desktop"
                          ? "bg-zinc-700 [data-theme='light']_&:bg-white text-white [data-theme='light']_&:text-black shadow"
                          : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={() => setPreviewMode("mobile")}
                      className={`px-3.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
                        previewMode === "mobile"
                          ? "bg-zinc-700 [data-theme='light']_&:bg-white text-white [data-theme='light']_&:text-black shadow"
                          : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                      }`}
                    >
                      Mobile (HP)
                    </button>
                  </div>
                </div>
              )}

              {/* Preview Stage */}
              <div className="relative rounded-2xl bg-[#0b0b0d] [data-theme='light']_&:bg-zinc-100 border border-white/5 [data-theme='light']_&:border-zinc-200 p-3 sm:p-5 flex items-center justify-center min-h-[260px] sm:min-h-[320px] overflow-hidden">
                {previewMode === "desktop" && project.desktopImage ? (
                  <div className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={project.desktopImage}
                      alt={`${project.title[lang]} Desktop`}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                ) : project.mobileImage ? (
                  <div className="py-2 flex items-center justify-center">
                    <MobilePhoneMockup
                      screenImage={project.mobileImage}
                      frameImage={project.mobileFrameImage}
                      statusBarBg={project.statusBarBg}
                      bottomBarBg={project.bottomBarBg}
                      darkStatusIcons={project.darkStatusIcons}
                      alt={`${project.title[lang]} Mobile`}
                      className="w-60 sm:w-72 drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)]"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            {/* Bottom Key Features Card (Matching Image 1) */}
            <div className="rounded-3xl bg-[#121215] [data-theme='light']_&:bg-white border border-white/10 [data-theme='light']_&:border-zinc-300 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-white [data-theme='light']_&:text-black mb-4">
                <Icons.sparkles className="w-4 h-4 text-zinc-300 [data-theme='light']_&:text-zinc-700" />
                <span>Key Features</span>
              </div>
              <ul className="space-y-3">
                {project.metrics.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed"
                  >
                    <span className="text-zinc-500 mt-0.5">&bull;</span>
                    <span>{feature[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
