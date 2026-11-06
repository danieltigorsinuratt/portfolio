"use client";

import React, { useState } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
  lang: Language;
}

const techStackList = [
  { name: "Laravel", icon: "laravel" },
  { name: "PHP", icon: "php" },
  { name: "Laravel Reverb", icon: "laravelReverb" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "Vite", icon: "vite" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" },
  { name: "ESP32", icon: "esp32" },
  { name: "Ubuntu Server", icon: "ubuntu" },
  { name: "Apache2", icon: "apache" },
  { name: "Nginx", icon: "nginx" },
  { name: "PM2", icon: "pm2" },
  { name: "bind9", icon: "bind9" },
  { name: "Cloudflare Tunnel", icon: "cloudflare" },
  { name: "Vercel", icon: "vercel" },
];

export const Projects: React.FC<ProjectsProps> = ({ projects, lang }) => {
  const [activeTab, setActiveTab] = useState<"projects" | "techstack">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderTechIcon = (icon: string) => {
    switch (icon) {
      case "laravel":
        return <Icons.laravelBrand className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "php":
        return <Icons.php className="w-16 h-12 sm:w-20 sm:h-14" />;
      case "laravelReverb":
        return <Icons.laravelReverb className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "nextjs":
        return <Icons.nextjs className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "react":
        return <Icons.react className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "vite":
        return <Icons.vite className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "mysql":
        return <Icons.mysql className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "postgresql":
        return <Icons.postgresql className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "supabase":
        return <Icons.supabase className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "esp32":
        return <Icons.esp32 className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "ubuntu":
        return <Icons.ubuntu className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "apache":
        return <Icons.apache className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "nginx":
        return <Icons.nginx className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "pm2":
        return <Icons.pm2 className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "bind9":
        return <Icons.bind9 className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "cloudflare":
        return <Icons.cloudflare className="w-14 h-14 sm:w-16 sm:h-16" />;
      case "vercel":
        return <Icons.vercel className="w-12 h-12 sm:w-14 sm:h-14 text-white [data-theme='light']_&:text-black" />;
      default:
        return <Icons.code className="w-14 h-14 sm:w-16 sm:h-16" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — Portfolio Showcase */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white [data-theme='light']_&:text-black">
            Portfolio Showcase
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 [data-theme='light']_&:text-zinc-600">
            {lang === "id"
              ? "Explore my journey through projects and technical expertise."
              : "Explore my journey through projects and technical expertise."}
          </p>
        </div>

        {/* Pill Tab Switcher (Projects | Tech Stack) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-2 p-2 rounded-full bg-[#151517]/90 [data-theme='light']_&:bg-zinc-200/90 border border-white/10 [data-theme='light']_&:border-zinc-300 backdrop-blur-md shadow-xl">
            <button
              onClick={() => setActiveTab("projects")}
              className={`py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "projects"
                  ? "bg-zinc-700/60 [data-theme='light']_&:bg-white text-white [data-theme='light']_&:text-black shadow-md"
                  : "text-zinc-400 [data-theme='light']_&:text-zinc-600 hover:text-white [data-theme='light']_&:hover:text-black"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("techstack")}
              className={`py-3 sm:py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "techstack"
                  ? "bg-zinc-700/60 [data-theme='light']_&:bg-white text-white [data-theme='light']_&:text-black shadow-md"
                  : "text-zinc-400 [data-theme='light']_&:text-zinc-600 hover:text-white [data-theme='light']_&:hover:text-black"
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-[1.75rem] bg-[#141416]/90 [data-theme='light']_&:bg-zinc-100 border border-white/10 [data-theme='light']_&:border-zinc-300 p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 [data-theme='light']_&:hover:border-zinc-400 shadow-2xl group"
              >
                <div>
                  {/* Project Preview Thumbnail (Matching Image 3) */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 via-[#0d0d0f] to-zinc-950 border border-white/10 mb-5 p-4 flex flex-col justify-between">
                    {/* Top Mini Browser/Navbar Header */}
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                      <span className="text-zinc-300 font-semibold">daniel.dev</span>
                      <div className="flex items-center gap-2">
                        <span>Home</span>
                        <span>About</span>
                        <span>Portfolio</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Center Preview Content + Right Mini Card */}
                    <div className="flex items-center justify-between gap-3 my-auto py-1">
                      <div className="max-w-[65%]">
                        <div className="text-sm sm:text-base font-extrabold text-white leading-tight tracking-tight">
                          {project.categoryLabel[lang]}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-zinc-400 leading-tight">
                          {project.role[lang].split(" ")[0]}
                        </div>
                        <p className="text-[9px] text-zinc-500 line-clamp-2 mt-1.5 leading-relaxed">
                          {project.tagline[lang]}
                        </p>
                      </div>

                      {/* Mini Lanyard / Badge Graphic on Right */}
                      <div className="w-14 h-18 rounded-lg bg-zinc-900 border border-white/20 shadow-lg flex flex-col items-center justify-center p-1.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-zinc-700 mb-1 flex items-center justify-center text-[8px] font-bold text-white">
                          DS
                        </div>
                        <div className="w-8 h-1 rounded bg-zinc-600 mb-0.5" />
                        <div className="w-6 h-1 rounded bg-zinc-700" />
                      </div>
                    </div>

                    {/* Bottom Mini Tech Pills */}
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <div className="px-1">
                    <h3 className="text-lg font-bold text-white [data-theme='light']_&:text-black mb-2 line-clamp-1">
                      {project.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 leading-relaxed line-clamp-2 mb-6">
                      {project.problem[lang]}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer: Link / No Link on Left, Details -> on Right */}
                <div className="flex items-center justify-between px-1 pt-1 mt-auto">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-zinc-400 hover:text-white [data-theme='light']_&:text-zinc-600 [data-theme='light']_&:hover:text-black flex items-center gap-1.5 transition-colors"
                    >
                      <span>Live Demo</span>
                      <Icons.external className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500 font-medium">
                      No Link
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-full bg-zinc-800/90 hover:bg-zinc-700 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-white [data-theme='light']_&:text-black text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Details</span>
                    <Icons.arrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: TECH STACK (Icon + Name Only, Matching Image 2) */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {techStackList.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl bg-[#161618]/90 [data-theme='light']_&:bg-zinc-100 border border-white/5 [data-theme='light']_&:border-zinc-300 hover:border-white/20 [data-theme='light']_&:hover:border-zinc-400 p-6 sm:p-7 flex flex-col items-center justify-center aspect-square shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div className="flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {renderTechIcon(item.icon)}
                </div>
                <span className="mt-4 text-xs sm:text-sm font-medium text-zinc-300 [data-theme='light']_&:text-zinc-800 text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
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
