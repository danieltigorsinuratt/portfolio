"use client";

import React, { useState } from "react";
import { Language, skillCategories } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case "laravel":
        return <Icons.laravelBrand className="w-8 h-8 c-text-main" />;
      case "react":
        return <Icons.react className="w-8 h-8 c-text-main" />;
      case "nextjs":
        return <Icons.nextjs className="w-8 h-8 c-text-main" />;
      case "php":
        return <Icons.php className="w-8 h-8 c-text-main" />;
      case "mysql":
        return <Icons.mysql className="w-8 h-8 c-text-main" />;
      case "esp32":
        return <Icons.esp32 className="w-8 h-8 c-text-main" />;
      case "n8n":
        return <Icons.n8n className="w-8 h-8 c-text-main" />;
      case "typescript":
        return <Icons.typescript className="w-8 h-8 c-text-main" />;
      case "tailwind":
        return <Icons.tailwind className="w-8 h-8 c-text-main" />;
      case "arduino":
        return <Icons.arduino className="w-8 h-8 c-text-main" />;
      case "workflow":
      case "api":
        return <Icons.workflow className="w-8 h-8 c-text-muted" />;
      case "cpu":
      case "chip":
        return <Icons.cpu className="w-8 h-8 c-text-muted" />;
      case "server":
      case "database":
        return <Icons.server className="w-8 h-8 c-text-muted" />;
      case "git":
        return <Icons.code className="w-8 h-8 c-text-muted" />;
      default:
        return <Icons.sparkles className="w-8 h-8 c-text-muted" />;
    }
  };

  return (
    <section id="skills" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b gap-4 c-border"
        style={{ borderColor: "var(--surface-border)" }}
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold c-text-muted mb-1">
            <span>02.</span>
            <span className="uppercase tracking-widest">
              {lang === "id" ? "KEAHLIAN & TEKNOLOGI" : "SKILLS & TECH STACK"}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil tracking-wider c-text-main">
            TECH STACK &amp; CAPABILITIES
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
            style={
              activeTab === "all"
                ? { backgroundColor: "var(--primary)", color: "var(--bg-page)" }
                : { backgroundColor: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--surface-border)" }
            }
          >
            {lang === "id" ? "Semua Kategori" : "All Categories"}
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
              style={
                activeTab === cat.id
                  ? { backgroundColor: "var(--primary)", color: "var(--bg-page)" }
                  : { backgroundColor: "var(--surface)", color: "var(--text-muted)", border: "1px solid var(--surface-border)" }
              }
            >
              {cat.title[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="slide-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div
                className="flex items-center justify-between pb-4 mb-6 border-b"
                style={{ borderColor: "var(--surface-border)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-xl c-text-main"
                    style={{
                      backgroundColor: "var(--surface-hover)",
                      border: "1px solid var(--surface-border)",
                    }}
                  >
                    {category.id === "frontend" && <Icons.layout className="w-5 h-5" />}
                    {category.id === "backend" && <Icons.server className="w-5 h-5" />}
                    {category.id === "iot" && <Icons.cpu className="w-5 h-5" />}
                    {category.id === "automation" && <Icons.workflow className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-stencil text-lg sm:text-xl font-bold c-text-main tracking-wide">
                      {category.title[lang]}
                    </h3>
                    <span className="text-[11px] font-mono c-text-muted uppercase tracking-wider">
                      {category.skills.length} Technologies
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm c-text-muted mb-6 leading-relaxed">
                {category.description[lang]}
              </p>

              {/* Skills Item Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative p-3.5 rounded-xl border transition-all flex flex-col items-center text-center"
                    style={{
                      backgroundColor: skill.highlight ? "var(--surface)" : "var(--bg-page)",
                      borderColor: "var(--surface-border)",
                    }}
                  >
                    <div className="mb-2 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                      {getTechIcon(skill.icon)}
                    </div>
                    <span className="text-xs font-bold c-text-main">
                      {skill.name}
                    </span>
                    <span
                      className="text-[10px] font-mono mt-1 px-2 py-0.5 rounded-full c-text-muted font-semibold"
                      style={{ backgroundColor: "var(--surface-hover)" }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
