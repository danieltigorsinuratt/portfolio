"use client";

import React, { useState } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";
import { ProjectModal } from "./ProjectModal";

interface ProjectsProps {
  projects: Project[];
  lang: Language;
}

interface TechItem {
  name: string;
  icon: string;
  image?: string;
  glowColor?: string;
}

const techStackList: TechItem[] = [
  {
    name: "Laravel",
    icon: "laravel",
    image: "/images/techstack/laravel.png",
    glowColor: "rgba(255, 45, 32, 0.45)",
  },
  { name: "PHP", icon: "php" },
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  {
    name: "Vite",
    icon: "vite",
    image: "/images/techstack/vite.png",
    glowColor: "rgba(189, 52, 254, 0.45)",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    image: "/images/techstack/tailwind.png",
    glowColor: "rgba(56, 189, 248, 0.45)",
  },
  {
    name: "MySQL",
    icon: "mysql",
    image: "/images/techstack/mysql.png",
    glowColor: "rgba(0, 117, 143, 0.55)",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    image: "/images/techstack/postgresql.png",
    glowColor: "rgba(51, 103, 145, 0.55)",
  },
  {
    name: "Supabase",
    icon: "supabase",
    image: "/images/techstack/supabase.png",
    glowColor: "rgba(62, 207, 142, 0.45)",
  },
  { name: "Ubuntu Server", icon: "ubuntu" },
  {
    name: "Apache2",
    icon: "apache",
    image: "/images/techstack/apache2.png",
    glowColor: "rgba(210, 33, 40, 0.45)",
  },
  { name: "Nginx", icon: "nginx" },
  {
    name: "Cloudflare Tunnel",
    icon: "cloudflare",
    image: "/images/techstack/claudflare.png",
    glowColor: "rgba(243, 128, 32, 0.45)",
  },
  { name: "Vercel", icon: "vercel" },
];

export const Projects: React.FC<ProjectsProps> = ({ projects, lang }) => {
  const [activeTab, setActiveTab] = useState<"projects" | "techstack">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const render3DImageIcon = (item: TechItem) => {
    const glow = item.glowColor || "rgba(255, 255, 255, 0.25)";
    return (
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center select-none"
        style={{
          filter: `drop-shadow(0 10px 12px ${glow})`,
        }}
      >
        {/* Multi-layer 3D extrusion stack behind the PNG */}
        {[4, 3, 2, 1].map((depth) => (
          <img
            key={depth}
            src={item.image}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            style={{
              transform: `translate(${depth * 0.9}px, ${depth * 1.4}px)`,
              filter: "brightness(0.38) saturate(1.6) contrast(1.3)",
              opacity: 0.9,
            }}
          />
        ))}

        {/* Main Front Image with 3D Specular Bevel Lighting Filter */}
        <img
          src={item.image}
          alt={item.name}
          draggable={false}
          className="relative z-10 w-full h-full object-contain"
          style={{
            filter: "url(#tech-image-3d-bevel)",
          }}
        />
      </div>
    );
  };

  const renderTechIcon = (item: TechItem) => {
    if (item.image) {
      return render3DImageIcon(item);
    }

    const iconClass = "w-16 h-16 sm:w-20 sm:h-20";
    switch (item.icon) {
      case "laravel":
        return <Icons.laravelBrand className={iconClass} />;
      case "php":
        return <Icons.php className="w-20 h-16 sm:w-24 sm:h-20" />;
      case "laravelReverb":
        return <Icons.laravelReverb className={iconClass} />;
      case "nextjs":
        return <Icons.nextjs className={iconClass} />;
      case "react":
        return <Icons.react className={iconClass} />;
      case "vite":
        return <Icons.vite className={iconClass} />;
      case "mysql":
        return <Icons.mysql className={iconClass} />;
      case "postgresql":
        return <Icons.postgresql className={iconClass} />;
      case "supabase":
        return <Icons.supabase className={iconClass} />;
      case "esp32":
        return <Icons.esp32 className={iconClass} />;
      case "ubuntu":
        return <Icons.ubuntu className={iconClass} />;
      case "apache":
        return <Icons.apache className={iconClass} />;
      case "nginx":
        return <Icons.nginx className={iconClass} />;
      case "pm2":
        return <Icons.pm2 className={iconClass} />;
      case "bind9":
        return <Icons.bind9 className={iconClass} />;
      case "cloudflare":
        return <Icons.cloudflare className={iconClass} />;
      case "vercel":
        return <Icons.vercel className={iconClass} />;
      default:
        return <Icons.code className={iconClass} />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-transparent"
    >
      {/* Hidden SVG Filter for 3D Specular Bevel Lighting on PNG Tech Icons */}
      <svg className="sr-only" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="tech-image-3d-bevel" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="alphaBlur" />
            <feSpecularLighting
              in="alphaBlur"
              surfaceScale="4.5"
              specularConstant="0.75"
              specularExponent="20"
              lightingColor="#ffffff"
              result="specLight"
            >
              <fePointLight x="-80" y="-120" z="180" />
            </feSpecularLighting>
            <feComposite
              in="specLight"
              in2="SourceAlpha"
              operator="in"
              result="specMasked"
            />
            <feComposite
              in="SourceGraphic"
              in2="specMasked"
              operator="arithmetic"
              k1="0"
              k2="1"
              k3="0.55"
              k4="0"
            />
          </filter>
        </defs>
      </svg>

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
                  {/* Project Preview Thumbnail */}
                  {project.desktopImage ? (
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0c0c0e] border border-white/10 mb-5 cursor-pointer group/thumb"
                    >
                      <img
                        src={project.desktopImage}
                        alt={project.title[lang]}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105"
                      />
                    </div>
                  ) : (
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
                  )}

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

        {/* TAB 2: TECH STACK (3D Icons without Grid Box) */}
        {activeTab === "techstack" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 sm:gap-y-12 sm:gap-x-8 max-w-5xl mx-auto pt-4">
            {techStackList.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center group cursor-default"
              >
                <div className="relative flex items-center justify-center transition-all duration-300 ease-out [transform:perspective(500px)_rotateX(10deg)_rotateY(-8deg)] group-hover:[transform:perspective(500px)_rotateX(0deg)_rotateY(0deg)_translateY(-10px)_scale(1.12)]">
                  {renderTechIcon(item)}
                </div>
                <span className="mt-3.5 text-xs sm:text-sm font-medium text-zinc-300 [data-theme='light']_&:text-zinc-800 group-hover:text-white [data-theme='light']_&:group-hover:text-black transition-colors text-center">
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
