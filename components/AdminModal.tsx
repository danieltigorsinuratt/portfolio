"use client";

import React, { useState } from "react";
import { Project, Language } from "@/data/portfolio-data";
import { Icons } from "./icons";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSaveProjects: (projects: Project[]) => void;
  onResetProjects: () => void;
  lang: Language;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSaveProjects,
  onResetProjects,
  lang,
}) => {
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [techInput, setTechInput] = useState("");

  if (!isOpen) return null;

  const handleStartAdd = () => {
    setEditingProject({
      id: "project-" + Date.now(),
      title: { id: "", en: "" },
      category: "webapp",
      categoryLabel: { id: "Web App", en: "Web App" },
      tagline: { id: "", en: "" },
      problem: { id: "", en: "" },
      solution: { id: "", en: "" },
      role: { id: "Fullstack Developer", en: "Fullstack Developer" },
      techStack: ["Next.js", "Tailwind CSS"],
      metrics: [
        { id: "Meningkatkan performa web 50%", en: "Improved web performance by 50%" },
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      laptopMockup: "bg-zinc-900",
      mobileMockup: "bg-zinc-900",
      accentColor: "#FFFFFF",
    });
    setTechInput("Next.js, Tailwind CSS");
    setIsEditing(true);
  };

  const handleStartEdit = (proj: Project) => {
    setEditingProject(JSON.parse(JSON.stringify(proj)));
    setTechInput(proj.techStack.join(", "));
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === "id" ? "Hapus proyek ini?" : "Delete this project?")) {
      const updated = projects.filter((p) => p.id !== id);
      onSaveProjects(updated);
    }
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title?.id) return;

    const stack = techInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const fullProject: Project = {
      id: editingProject.id || "project-" + Date.now(),
      title: {
        id: editingProject.title.id || "Proyek Baru",
        en: editingProject.title.en || editingProject.title.id || "New Project",
      },
      category: editingProject.category || "webapp",
      categoryLabel:
        editingProject.category === "iot"
          ? { id: "IoT & Hardware", en: "IoT & Hardware" }
          : editingProject.category === "automation"
          ? { id: "Automation", en: "Automation" }
          : editingProject.category === "uiux"
          ? { id: "UI/UX", en: "UI/UX" }
          : { id: "Web App", en: "Web App" },
      tagline: {
        id: editingProject.tagline?.id || "",
        en: editingProject.tagline?.en || editingProject.tagline?.id || "",
      },
      problem: {
        id: editingProject.problem?.id || "",
        en: editingProject.problem?.en || editingProject.problem?.id || "",
      },
      solution: {
        id: editingProject.solution?.id || "",
        en: editingProject.solution?.en || editingProject.solution?.id || "",
      },
      role: {
        id: editingProject.role?.id || "Web Developer",
        en: editingProject.role?.en || "Web Developer",
      },
      techStack: stack.length > 0 ? stack : ["React", "Laravel"],
      metrics: editingProject.metrics || [
        { id: "Peningkatan efisiensi", en: "Improved efficiency" },
      ],
      liveUrl: editingProject.liveUrl || "",
      githubUrl: editingProject.githubUrl || "",
      featured: editingProject.featured ?? true,
      laptopMockup: editingProject.laptopMockup || "bg-zinc-900",
      mobileMockup: editingProject.mobileMockup || "bg-zinc-900",
      accentColor: editingProject.accentColor || "#FFFFFF",
    };

    const exists = projects.some((p) => p.id === fullProject.id);
    let updated: Project[];
    if (exists) {
      updated = projects.map((p) => (p.id === fullProject.id ? fullProject : p));
    } else {
      updated = [fullProject, ...projects];
    }

    onSaveProjects(updated);
    setIsEditing(false);
    setEditingProject(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#141414] [data-theme='light']_&:bg-white border border-zinc-800 [data-theme='light']_&:border-zinc-300 p-6 sm:p-8 shadow-2xl z-10 text-left">
        {/* Top Header — Monochrome */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800 [data-theme='light']_&:border-zinc-200">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-white [data-theme='light']_&:text-black">
              <Icons.admin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white [data-theme='light']_&:text-black font-stencil tracking-wide">
                {lang === "id" ? "Panel Admin Proyek (CMS)" : "Project Admin CMS"}
              </h2>
              <p className="text-xs text-zinc-400 [data-theme='light']_&:text-zinc-600 font-mono">
                {lang === "id"
                  ? "Tambah, edit, atau hapus proyek tanpa perlu mengubah kode sumber."
                  : "Add, edit, or delete portfolio projects without modifying source code."}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black cursor-pointer"
          >
            <Icons.close className="w-5 h-5" />
          </button>
        </div>

        {isEditing && editingProject ? (
          /* Form for Add/Edit — Monochrome */
          <form onSubmit={handleSaveForm} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 font-bold uppercase">
                {editingProject.id ? "EDIT PROYEK" : "TAMBAH PROYEK BARU"}
              </span>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-xs text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black cursor-pointer"
              >
                &larr; {lang === "id" ? "Kembali ke Daftar" : "Back to List"}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Judul (Bahasa Indonesia) *
                </label>
                <input
                  type="text"
                  required
                  value={editingProject.title?.id || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      title: { ...editingProject.title!, id: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Title (English)
                </label>
                <input
                  type="text"
                  value={editingProject.title?.en || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      title: { ...editingProject.title!, en: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Kategori
                </label>
                <select
                  value={editingProject.category}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      category: e.target.value as any,
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                >
                  <option value="webapp">Web App</option>
                  <option value="iot">IoT & Hardware</option>
                  <option value="automation">Automation</option>
                  <option value="uiux">UI/UX</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Peran / Role
                </label>
                <input
                  type="text"
                  value={editingProject.role?.id || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      role: { id: e.target.value, en: e.target.value },
                    })
                  }
                  placeholder="e.g. Lead Web Developer"
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                Tech Stack (pisahkan dengan koma)
              </label>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="Laravel, React, MySQL, ESP32, n8n"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                Ringkasan / Tagline Singkat
              </label>
              <input
                type="text"
                value={editingProject.tagline?.id || ""}
                onChange={(e) =>
                  setEditingProject({
                    ...editingProject,
                    tagline: { id: e.target.value, en: e.target.value },
                  })
                }
                placeholder="Deskripsi satu kalimat proyek ini"
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Masalah (Problem)
                </label>
                <textarea
                  rows={3}
                  value={editingProject.problem?.id || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      problem: { id: e.target.value, en: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Solusi (Solution)
                </label>
                <textarea
                  rows={3}
                  value={editingProject.solution?.id || ""}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      solution: { id: e.target.value, en: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Link Live Demo URL
                </label>
                <input
                  type="text"
                  value={editingProject.liveUrl || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, liveUrl: e.target.value })
                  }
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 mb-1">
                  Link GitHub URL
                </label>
                <input
                  type="text"
                  value={editingProject.githubUrl || ""}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, githubUrl: e.target.value })
                  }
                  placeholder="https://github.com/..."
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 [data-theme='light']_&:bg-zinc-100 border border-zinc-800 [data-theme='light']_&:border-zinc-300 text-white [data-theme='light']_&:text-black text-xs"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800 [data-theme='light']_&:border-zinc-200">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-lg bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-300 [data-theme='light']_&:text-zinc-700 text-xs font-semibold hover:bg-zinc-700 cursor-pointer"
              >
                {lang === "id" ? "Batal" : "Cancel"}
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white hover:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-800 text-xs font-bold shadow-md cursor-pointer"
              >
                {lang === "id" ? "Simpan Proyek" : "Save Project"}
              </button>
            </div>
          </form>
        ) : (
          /* List of Projects — Monochrome */
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-zinc-300 [data-theme='light']_&:text-zinc-700 font-bold">
                {lang === "id" ? `Total Proyek: ${projects.length}` : `Total Projects: ${projects.length}`}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onResetProjects}
                  className="px-3 py-1.5 rounded-lg border border-zinc-700 [data-theme='light']_&:border-zinc-300 text-[11px] font-semibold text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black cursor-pointer"
                >
                  {lang === "id" ? "Reset ke Bawaan" : "Reset Defaults"}
                </button>
                <button
                  onClick={handleStartAdd}
                  className="px-3 py-1.5 rounded-lg bg-white text-black [data-theme='light']_&:bg-black [data-theme='light']_&:text-white hover:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-800 text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Icons.plus className="w-3.5 h-3.5" />
                  <span>{lang === "id" ? "Tambah Proyek Baru" : "Add Project"}</span>
                </button>
              </div>
            </div>

            <div className="divide-y divide-zinc-800 [data-theme='light']_&:divide-zinc-200 max-h-[50vh] overflow-y-auto rounded-xl border border-zinc-800 [data-theme='light']_&:border-zinc-300 bg-zinc-900/50 [data-theme='light']_&:bg-zinc-50">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-zinc-800/40 [data-theme='light']_&:hover:bg-zinc-100 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded bg-zinc-800 [data-theme='light']_&:bg-zinc-200 text-zinc-200 [data-theme='light']_&:text-zinc-800 font-mono text-[10px] uppercase font-bold">
                        {p.categoryLabel[lang]}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        {p.role[lang]}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white [data-theme='light']_&:text-black truncate">
                      {p.title[lang]}
                    </h4>
                    <p className="text-[11px] text-zinc-400 truncate">
                      {p.techStack.join(" &bull; ")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleStartEdit(p)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-white [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-black text-zinc-300 hover:text-black [data-theme='light']_&:text-zinc-700 [data-theme='light']_&:hover:text-white transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Icons.edit className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 [data-theme='light']_&:bg-zinc-200 [data-theme='light']_&:hover:bg-zinc-300 text-zinc-400 hover:text-white [data-theme='light']_&:hover:text-black transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <Icons.trash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
