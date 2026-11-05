"use client";

import React from "react";
import { OtherProject, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface OtherProjectsProps {
  projects: OtherProject[];
  lang: Language;
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({ projects, lang }) => {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container — Monochrome Frameless / Slide */}
      <div className="relative rounded-3xl p-6 sm:p-10 border border-zinc-800 [data-theme='light']_&:border-zinc-300 bg-zinc-950/60 [data-theme='light']_&:bg-zinc-100 shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-zinc-800 [data-theme='light']_&:border-zinc-300 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-1">
              <span>&bull;</span>
              <span className="uppercase tracking-widest text-zinc-400">
                {lang === "id" ? "EKSPERIMEN & PROYEK MINI" : "EXPERIMENTS & MICRO APPS"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-stencil tracking-wider text-white [data-theme='light']_&:text-black">
              OTHER PROJECTS
            </h2>
          </div>
          <p className="text-xs text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono max-w-md">
            {lang === "id"
              ? "Koleksi prototipe IoT, script automasi, dan modul eksperimen teknologi."
              : "A curated collection of IoT prototypes, automation flows, and modular tools."}
          </p>
        </div>

        {/* Other Projects 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 [data-theme='light']_&:bg-white [data-theme='light']_&:hover:bg-zinc-50 border border-zinc-800 hover:border-zinc-600 [data-theme='light']_&:border-zinc-300 [data-theme='light']_&:hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-[10px] uppercase font-bold tracking-wider">
                    {item.category}
                  </span>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black transition-colors"
                      aria-label="View source repository"
                    >
                      <Icons.github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="font-bold text-sm text-white [data-theme='light']_&:text-black group-hover:text-zinc-300 [data-theme='light']_&:group-hover:text-zinc-700 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 [data-theme='light']_&:text-zinc-600 leading-relaxed mb-4">
                  {item.description[lang]}
                </p>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80 [data-theme='light']_&:border-zinc-200">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-300 [data-theme='light']_&:text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
