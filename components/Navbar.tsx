"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./icons";
import { Language } from "@/data/portfolio-data";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { num: "01", id: "about", label: { id: "About", en: "About" } },
    { num: "02", id: "projects", label: { id: "Portfolio", en: "Portfolio" } },
    { num: "03", id: "contact", label: { id: "Contact", en: "Contact" } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md border-b border-zinc-800 [data-theme='light']_&:border-zinc-200 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        style={{
          backgroundColor: scrolled
            ? isDark
              ? "rgba(10, 10, 10, 0.92)"
              : "rgba(255, 255, 255, 0.95)"
            : "transparent",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Desktop Numbered Nav (01-03) — Pojok Kiri */}
          <nav className="hidden sm:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "text-white bg-white/10 [data-theme='light']_&:bg-black/10 [data-theme='light']_&:text-black border border-white/20 [data-theme='light']_&:border-black/20 font-semibold"
                      : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black hover:bg-zinc-800/40 [data-theme='light']_&:hover:bg-zinc-200"
                  }`}
                >
                  <span
                    className={`font-mono text-xs ${
                      isActive
                        ? "text-white [data-theme='light']_&:text-black font-bold"
                        : "text-zinc-500"
                    }`}
                  >
                    {item.num}.
                  </span>
                  <span>{item.label[lang]}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Tools: Lang Toggle, Dark/Light Mode, CV Download — Monochrome */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            {/* Language Switcher */}
            <div className="flex items-center p-1 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-xs font-semibold">
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  lang === "id"
                    ? "bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white shadow-sm font-bold"
                    : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white shadow-sm font-bold"
                    : "text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black"
                }`}
                title="English Language"
              >
                EN
              </button>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 hover:bg-zinc-800 [data-theme='light']_&:hover:bg-zinc-300 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 transition-all cursor-pointer focus:outline-none"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Dark/Light Mode"
            >
              {isDark ? <Icons.sun className="w-4 h-4" /> : <Icons.moon className="w-4 h-4" />}
            </button>

            {/* Download CV button — Monochrome */}
            <a
              href="/cv/CV_Daniel_Sinurat.pdf"
              download="CV_Daniel_Sinurat.pdf"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 [data-theme='light']_&:bg-black [data-theme='light']_&:text-white [data-theme='light']_&:hover:bg-zinc-800 text-xs font-bold tracking-wide shadow-md transition-all hover:scale-105"
            >
              <Icons.download className="w-3.5 h-3.5" />
              <span>{lang === "id" ? "Unduh CV" : "Download CV"}</span>
            </a>

            {/* Admin CMS trigger (mini) */}
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-lg text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black hover:bg-zinc-800/60 [data-theme='light']_&:hover:bg-zinc-200 transition-colors"
              title="Admin CMS"
            >
              <Icons.admin className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2 ml-auto">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-zinc-300 cursor-pointer"
              aria-label="Theme switch"
            >
              {isDark ? <Icons.sun className="w-4 h-4" /> : <Icons.moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="px-2.5 py-1.5 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-xs font-bold text-white [data-theme='light']_&:text-black"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-200 border border-zinc-800 text-white [data-theme='light']_&:text-black cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <Icons.close /> : <Icons.menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu — Monochrome */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className="fixed top-20 right-4 left-4 rounded-2xl p-6 border shadow-2xl transition-all"
            style={{
              backgroundColor: isDark ? "#141414" : "#FFFFFF",
              borderColor: isDark ? "#27272A" : "#E4E4E7",
            }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 [data-theme='light']_&:border-zinc-200 mb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-white [data-theme='light']_&:text-black">
                {lang === "id" ? "Navigasi Menu" : "Navigation Menu"}
              </span>
              <span className="text-xs text-zinc-400 font-mono">01 &mdash; 03</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between p-3.5 rounded-xl hover:bg-zinc-800/50 [data-theme='light']_&:hover:bg-zinc-100 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-zinc-400 bg-zinc-800 [data-theme='light']_&:bg-zinc-200 px-2 py-0.5 rounded">
                      {item.num}
                    </span>
                    <span className="font-semibold text-base text-zinc-200 [data-theme='light']_&:text-zinc-800 group-hover:text-white [data-theme='light']_&:group-hover:text-black transition-colors">
                      {item.label[lang]}
                    </span>
                  </div>
                  <Icons.chevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                </button>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200 flex flex-col gap-3">
              <a
                href="/cv/CV_Daniel_Sinurat.pdf"
                download="CV_Daniel_Sinurat.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white font-bold text-sm shadow-lg"
              >
                <Icons.download className="w-4 h-4" />
                <span>{lang === "id" ? "Unduh CV (PDF)" : "Download CV (PDF)"}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-zinc-700 text-xs font-semibold text-zinc-400 hover:text-white"
              >
                <Icons.admin className="w-4 h-4" />
                <span>{lang === "id" ? "Panel Admin Proyek" : "Admin CMS Panel"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
