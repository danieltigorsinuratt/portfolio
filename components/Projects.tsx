"use client";

import React, { useState } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: { id: "Semua Proyek", en: "All Projects" } },
    { id: "webapp", label: { id: "Web App", en: "Web App" } },
    { id: "iot", label: { id: "IoT & Hardware", en: "IoT & Hardware" } },
    { id: "automation", label: { id: "Automation", en: "Automation" } },
    { id: "uiux", label: { id: "UI/UX", en: "UI/UX" } },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header — Monochrome */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-zinc-800 [data-theme='light']_&:border-zinc-300 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-1">
            <span>03.</span>
            <span className="uppercase tracking-widest text-zinc-400">
              {lang === "id" ? "PORTOFOLIO TERPILIH" : "SELECTED WORKS"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil tracking-wider text-white [data-theme='light']_&:text-black">
            FEATURED PROJECTS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 mt-2 font-mono">
            {lang === "id"
              ? "Karya web development berkinerja tinggi, sistem IoT, dan otomasi cerdas."
              : "High-performance web apps, IoT telemetry systems, and intelligent automations."}
          </p>
        </div>

        {/* Filter Pills — Monochrome */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white shadow-lg scale-105"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:text-zinc-700 [data-theme='light']_&:border-zinc-300 hover:text-white [data-theme='light']_&:hover:text-black"
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Exhibition Cards Grid — Monochrome */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="slide-card group flex flex-col justify-between"
          >
            <div>
              {/* Card Thumbnail Frame */}
              <div
                className="relative aspect-[16/10] overflow-hidden bg-zinc-900 [data-theme='light']_&:bg-zinc-200 p-4 sm:p-5 flex flex-col justify-between border-b border-zinc-800 [data-theme='light']_&:border-zinc-300"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-zinc-200 font-mono text-[11px] font-semibold uppercase tracking-wider border border-white/10">
                    {project.categoryLabel[lang]}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white [data-theme='light']_&:bg-black shadow-sm" />
                </div>

                {/* Center Title Display */}
                <div className="z-10 py-2">
                  <h4 className="text-lg sm:text-xl font-stencil text-white [data-theme='light']_&:text-black font-bold leading-tight group-hover:text-zinc-300 transition-colors drop-shadow-md">
                    {project.title[lang]}
                  </h4>
                  <p className="text-[11px] text-zinc-400 [data-theme='light']_&:text-zinc-600 line-clamp-1 mt-1 font-mono">
                    {project.tagline[lang]}
                  </p>
                </div>

                {/* Tech Pills Footer on Thumbnail */}
                <div className="flex flex-wrap gap-1.5 z-10">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-zinc-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/80 text-zinc-400 border border-white/10">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <span className="text-zinc-500">&bull;</span>
                  <span className="truncate">{project.role[lang]}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 [data-theme='light']_&:text-zinc-700 leading-relaxed line-clamp-3 mb-4">
                  {project.problem[lang]}
                </p>

                {/* Metrics Highlight Pill */}
                {project.metrics[0] && (
                  <div className="p-2.5 rounded-xl bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-[11px] text-zinc-200 [data-theme='light']_&:text-zinc-800 flex items-center gap-2">
                    <Icons.check className="w-3.5 h-3.5 flex-shrink-0 text-white [data-theme='light']_&:text-black" />
                    <span className="line-clamp-1 font-medium">
                      {project.metrics[0][lang]}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Card Action Buttons — Monochrome */}
            <div className="p-5 sm:p-6 pt-0 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200 flex items-center justify-between gap-2 mt-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 rounded-xl bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white hover:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>{lang === "id" ? "Detail Proyek" : "Details"}</span>
                <Icons.chevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 hover:text-white [data-theme='light']_&:hover:text-black transition-colors"
                    title="Source Code GitHub"
                    aria-label="View source code"
                  >
                    <Icons.code className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 hover:text-white [data-theme='light']_&:hover:text-black transition-colors"
                    title="Live Demo"
                    aria-label="View live demo"
                  >
                    <Icons.external className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
