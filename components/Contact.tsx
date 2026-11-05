"use client";

import React, { useState } from "react";
import { Language, personalInfo } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name =
        lang === "id"
          ? "Nama wajib diisi (minimal 3 karakter)"
          : "Name is required (at least 3 characters)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email =
        lang === "id"
          ? "Format email tidak valid"
          : "Please enter a valid email address";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject =
        lang === "id"
          ? "Subjek pesan wajib diisi"
          : "Subject is required (at least 3 characters)";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message =
        lang === "id"
          ? "Pesan minimal 10 karakter"
          : "Message must be at least 10 characters long";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const waUrl = `https://wa.me/${personalInfo.contact.whatsapp}?text=${encodeURIComponent(
    `Halo Daniel Sinurat, saya melihat portfolio website Anda dan tertarik untuk berdiskusi mengenai proyek web development.`
  )}`;

  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container — Monochrome */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-zinc-800 [data-theme='light']_&:border-zinc-300 bg-zinc-950/70 [data-theme='light']_&:bg-zinc-100 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-zinc-800 [data-theme='light']_&:border-zinc-300 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 mb-1">
              <span>05.</span>
              <span className="uppercase tracking-widest text-zinc-400">
                {lang === "id" ? "HUBUNGI SAYA" : "GET IN TOUCH"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-stencil tracking-wider text-white [data-theme='light']_&:text-black">
              LET&apos;S WORK TOGETHER
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono max-w-sm">
            {lang === "id"
              ? "Tertarik membuat aplikasi web, integrasi IoT, atau kolaborasi digital? Kirim pesan sekarang."
              : "Interested in crafting a web application, IoT integration, or digital collaboration? Send a message."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Action & Contacts — Monochrome */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-zinc-900 [data-theme='light']_&:bg-white border border-zinc-800 [data-theme='light']_&:border-zinc-300 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-bold uppercase mb-2">
                <Icons.whatsapp className="w-4 h-4 text-white [data-theme='light']_&:text-black" />
                <span>FAST RESPONSE &bull; WHATSAPP</span>
              </div>
              <h3 className="text-lg font-bold text-white [data-theme='light']_&:text-black font-stencil mb-2">
                {lang === "id"
                  ? "Chat Langsung via WhatsApp"
                  : "Chat Directly on WhatsApp"}
              </h3>
              <p className="text-xs text-zinc-400 [data-theme='light']_&:text-zinc-600 leading-relaxed mb-5">
                {lang === "id"
                  ? "Lebih suka komunikasi instan? Hubungi saya di WhatsApp untuk konsultasi cepat atau diskusi proyek."
                  : "Prefer instant communication? Reach out directly on WhatsApp for quick consultations."}
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-white text-black hover:bg-zinc-200 [data-theme='light']_&:bg-black [data-theme='light']_&:text-white [data-theme='light']_&:hover:bg-zinc-800 font-bold text-sm shadow-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                <Icons.whatsapp className="w-4 h-4" />
                <span>{lang === "id" ? "Buka Chat WhatsApp" : "Open WhatsApp Chat"}</span>
              </a>
            </div>

            {/* Quick Contact Info Details */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 [data-theme='light']_&:bg-white border border-zinc-800 [data-theme='light']_&:border-zinc-300 space-y-4">
              {/* Copy Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/60 [data-theme='light']_&:bg-zinc-100 border border-zinc-700/60 [data-theme='light']_&:border-zinc-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-700 [data-theme='light']_&:bg-zinc-200 text-white [data-theme='light']_&:text-black">
                    <Icons.mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-mono block">E-mail</span>
                    <span className="text-xs font-semibold text-white [data-theme='light']_&:text-black">
                      {personalInfo.contact.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-700 [data-theme='light']_&:bg-zinc-200 hover:bg-zinc-600 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-200 [data-theme='light']_&:text-zinc-800 text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  {copiedEmail ? (lang === "id" ? "Tersalin!" : "Copied!") : (lang === "id" ? "Salin" : "Copy")}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/60 [data-theme='light']_&:bg-zinc-100 border border-zinc-700/60 [data-theme='light']_&:border-zinc-200">
                <div className="p-2 rounded-lg bg-zinc-700 [data-theme='light']_&:bg-zinc-200 text-white [data-theme='light']_&:text-black">
                  <Icons.location className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 font-mono block">
                    {lang === "id" ? "Lokasi" : "Location"}
                  </span>
                  <span className="text-xs font-semibold text-white [data-theme='light']_&:text-black">
                    {personalInfo.contact.location}
                  </span>
                </div>
              </div>

              {/* Download CV */}
              <a
                href="/cv/CV_Daniel_Sinurat.pdf"
                download="CV_Daniel_Sinurat.pdf"
                className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-800 [data-theme='light']_&:bg-zinc-100 hover:bg-zinc-700 [data-theme='light']_&:hover:bg-zinc-200 border border-zinc-700 [data-theme='light']_&:border-zinc-300 text-zinc-200 [data-theme='light']_&:text-zinc-800 hover:text-white [data-theme='light']_&:hover:text-black text-xs font-semibold transition-colors"
              >
                <Icons.download className="w-4 h-4" />
                <span>{lang === "id" ? "Download CV Daniel Sinurat (PDF)" : "Download CV Daniel Sinurat (PDF)"}</span>
              </a>
            </div>

            {/* Social Link Badges */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-white [data-theme='light']_&:hover:bg-zinc-50 border border-zinc-800 hover:border-zinc-600 [data-theme='light']_&:border-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 hover:text-white [data-theme='light']_&:hover:text-black text-xs font-semibold transition-colors"
              >
                <Icons.github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-white [data-theme='light']_&:hover:bg-zinc-50 border border-zinc-800 hover:border-zinc-600 [data-theme='light']_&:border-zinc-300 text-zinc-300 [data-theme='light']_&:text-zinc-700 hover:text-white [data-theme='light']_&:hover:text-black text-xs font-semibold transition-colors"
              >
                <Icons.linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form with Live Validation — Monochrome */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 [data-theme='light']_&:bg-white border border-zinc-800 [data-theme='light']_&:border-zinc-300">
              <h3 className="font-stencil text-xl font-bold text-white [data-theme='light']_&:text-black mb-2">
                {lang === "id" ? "Kirim Pesan / Formulir Kontak" : "Send a Direct Message"}
              </h3>
              <p className="text-xs text-zinc-400 [data-theme='light']_&:text-zinc-600 mb-6 font-mono">
                {lang === "id"
                  ? "Formulir ini dilengkapi validasi langsung dan notifikasi otomatis ke email."
                  : "Validated in real-time and forwarded directly to my email."}
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-zinc-800 [data-theme='light']_&:bg-zinc-100 border border-zinc-700 [data-theme='light']_&:border-zinc-300 text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black mx-auto flex items-center justify-center mb-3">
                    <Icons.check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white [data-theme='light']_&:text-black text-base font-stencil">
                    {lang === "id" ? "Pesan Berhasil Terkirim!" : "Message Sent Successfully!"}
                  </h4>
                  <p className="text-xs text-zinc-300 [data-theme='light']_&:text-zinc-700 mt-2 max-w-md mx-auto">
                    {lang === "id"
                      ? "Terima kasih telah menghubungi. Saya akan membalas pesan Anda ke email yang Anda cantumkan dalam waktu 1x24 jam."
                      : "Thank you for reaching out! I will review your message and reply within 24 hours."}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {lang === "id" ? "Kirim Pesan Lain" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1.5">
                        {lang === "id" ? "Nama Lengkap *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === "id" ? "Contoh: Budi Pratama" : "e.g. John Doe"}
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border text-white [data-theme='light']_&:text-black text-sm focus:outline-none focus:ring-2 focus:ring-white [data-theme='light']_&:focus:ring-black transition-all ${
                          errors.name ? "border-zinc-400" : "border-zinc-700 [data-theme='light']_&:border-zinc-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-zinc-400 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1.5">
                        {lang === "id" ? "Alamat Email *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border text-white [data-theme='light']_&:text-black text-sm focus:outline-none focus:ring-2 focus:ring-white [data-theme='light']_&:focus:ring-black transition-all ${
                          errors.email ? "border-zinc-400" : "border-zinc-700 [data-theme='light']_&:border-zinc-300"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-zinc-400 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1.5">
                      {lang === "id" ? "Subjek Pesan *" : "Subject *"}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={
                        lang === "id"
                          ? "Pengembangan Web App / Integrasi IoT"
                          : "Web App Development / IoT Project"
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border text-white [data-theme='light']_&:text-black text-sm focus:outline-none focus:ring-2 focus:ring-white [data-theme='light']_&:focus:ring-black transition-all ${
                        errors.subject ? "border-zinc-400" : "border-zinc-700 [data-theme='light']_&:border-zinc-300"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-zinc-400 mt-1 font-mono">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1.5">
                      {lang === "id" ? "Detail Pesan / Kebutuhan *" : "Message Details *"}
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === "id"
                          ? "Ceritakan mengenai proyek, timeline, atau teknologi yang ingin Anda gunakan..."
                          : "Describe your project scope, timeline, and requirements..."
                      }
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-800/80 [data-theme='light']_&:bg-zinc-100 border text-white [data-theme='light']_&:text-black text-sm focus:outline-none focus:ring-2 focus:ring-white [data-theme='light']_&:focus:ring-black transition-all resize-none ${
                        errors.message ? "border-zinc-400" : "border-zinc-700 [data-theme='light']_&:border-zinc-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-zinc-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button — Monochrome */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-white text-black hover:bg-zinc-200 [data-theme='light']_&:bg-black [data-theme='light']_&:text-white [data-theme='light']_&:hover:bg-zinc-800 font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-black [data-theme='light']_&:border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Icons.send className="w-4 h-4" />
                        <span>{lang === "id" ? "Kirim Pesan Sekarang" : "Send Message Now"}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
