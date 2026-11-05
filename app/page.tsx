"use client";

import React, { useState, useEffect } from "react";
import {
  initialProjects,
  initialOtherProjects,
  Project,
  Language,
} from "@/data/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ContentNavigator } from "@/components/ContentNavigator";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { OtherProjects } from "@/components/OtherProjects";
import { Experience } from "@/components/Experience";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
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
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem("daniel_portfolio_theme");
    if (savedTheme) {
      const darkVal = savedTheme === "dark";
      setIsDark(darkVal);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    // Check saved language
    const savedLang = localStorage.getItem("daniel_portfolio_lang") as Language;
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
    }

    // Check saved custom projects
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
      {/* Sticky 01-05 Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        isDark={isDark}
        setIsDark={handleToggleTheme}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero / Cover (Matching Image 1) */}
        <Hero lang={lang} isDark={isDark} />

        {/* 2. Visual Content Directory Navigator (Matching Image 3 & 4) */}
        <ContentNavigator lang={lang} isDark={isDark} />

        {/* 3. About / Introduction (Matching Image 2) */}
        <About lang={lang} />

        {/* 4. Skills & Tech Stack */}
        <Skills lang={lang} />

        {/* 5. Featured Projects & Detail Modal */}
        <Projects projects={projects} lang={lang} />

        {/* 6. Other Projects (Matching Image 4) */}
        <OtherProjects projects={initialOtherProjects} lang={lang} />

        {/* 7. Experience Timeline (Dignify Studio & UB) */}
        <Experience lang={lang} />

        {/* 8. Animated Statistics */}
        <Stats lang={lang} />

        {/* 9. Client Testimonials */}
        <Testimonials lang={lang} />

        {/* 10. Contact Form & WhatsApp */}
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
