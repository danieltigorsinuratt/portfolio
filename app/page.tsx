"use client";

import React, { useState, useEffect } from "react";
import {
  initialProjects,
  Project,
  Language,
} from "@/data/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { GithubContributions } from "@/components/GithubContributions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AdminModal } from "@/components/AdminModal";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("id");
  const [isDark, setIsDark] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Initialize theme and saved projects from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("daniel_portfolio_theme");
    if (savedTheme) {
      const darkVal = savedTheme === "dark";
      setIsDark(darkVal);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const savedLang = localStorage.getItem("daniel_portfolio_lang") as Language;
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
    }

    try {
      const savedProjects = localStorage.getItem("daniel_portfolio_projects");
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      }
    } catch {
      // Fallback to initial
    }
  }, []);

  // Update theme when toggled
  const handleToggleTheme = (dark: boolean) => {
    setIsDark(dark);
    const themeName = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("daniel_portfolio_theme", themeName);
  };

  // Update language when toggled
  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("daniel_portfolio_lang", newLang);
  };

  // Save projects from CMS
  const handleSaveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    localStorage.setItem("daniel_portfolio_projects", JSON.stringify(newProjects));
  };

  // Reset projects from CMS
  const handleResetProjects = () => {
    if (
      confirm(
        lang === "id"
          ? "Kembalikan semua proyek ke daftar bawaan?"
          : "Reset all projects to defaults?"
      )
    ) {
      setProjects(initialProjects);
      localStorage.removeItem("daniel_portfolio_projects");
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Sticky 01-03 Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        isDark={isDark}
        setIsDark={handleToggleTheme}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero / Cover */}
        <Hero lang={lang} isDark={isDark} />

        {/* 2. About / Introduction (01. About) dengan ParticlePortrait (/images/daniel.png) */}
        <About
          lang={lang}
          isDark={isDark}
          portraitProps={{
            src: "/images/daniel.png",
            gap: 5,
            radius: 100,
            strength: 18,
            dotColor: "#f5e6c8",
          }}
        />

        {/* 3. Experience Timeline (Setelah About) */}
        <Experience lang={lang} />

        {/* 4. Portfolio Showcase: Projects & Tech Stack Tabs (Di bawah Experience) */}
        <Projects projects={projects} lang={lang} />

        {/* 5. Real-time GitHub Contributions */}
        <GithubContributions lang={lang} username="danieltigorsinuratt" />

        {/* 7. Contact Form & WhatsApp (03. Contact) */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Mini CMS Admin Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onSaveProjects={handleSaveProjects}
        onResetProjects={handleResetProjects}
        lang={lang}
      />
    </div>
  );
}
