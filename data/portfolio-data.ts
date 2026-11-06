export type Language = "id" | "en";

export interface Project {
  id: string;
  title: { id: string; en: string };
  category: "webapp" | "iot" | "uiux" | "automation";
  categoryLabel: { id: string; en: string };
  tagline: { id: string; en: string };
  problem: { id: string; en: string };
  solution: { id: string; en: string };
  role: { id: string; en: string };
  techStack: string[];
  metrics: { id: string; en: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  laptopMockup: string;
  mobileMockup: string;
  accentColor: string;
  desktopImage?: string;
  mobileImage?: string;
  mobileFrameImage?: string;
}

export interface OtherProject {
  id: string;
  title: string;
  category: string;
  description: { id: string; en: string };
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: { id: string; en: string };
  company: string;
  location: string;
  period: string;
  type: { id: string; en: string };
  description: { id: string; en: string };
  highlights: { id: string; en: string }[];
  techStack: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: { id: string; en: string };
  company: string;
  quote: { id: string; en: string };
  avatar: string;
  rating: number;
}

export interface SkillCategory {
  id: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  iconName: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    highlight?: boolean;
  }[];
}

export const initialProjects: Project[] = [
  {
    id: "kebaya-kanae",
    title: {
      id: "Kebaya Kanae",
      en: "Kebaya Kanae",
    },
    category: "webapp",
    categoryLabel: { id: "Web App", en: "Web App" },
    tagline: {
      id: "Platform katalog & penyewaan kebaya modern dengan pengalaman responsif di Desktop dan Mobile",
      en: "Modern kebaya catalog & rental platform with seamless Desktop and Mobile responsiveness",
    },
    problem: {
      id: "Kebaya Kanae adalah platform katalog dan penyewaan busana kebaya yang disusun secara sistematis untuk memudahkan pelanggan melihat koleksi kebaya terbaik, memeriksa detail ukuran (LD), harga sewa, serta status ketersediaan stok secara langsung tanpa harus bertanya manual satu per satu.",
      en: "Kebaya Kanae is a systematically structured kebaya catalog and rental web platform designed to let customers explore curated collections, inspect size details, check rental pricing, and view real-time stock availability effortlessly.",
    },
    solution: {
      id: "Dirancang dengan tampilan yang elegan dan responsif baik di layar Desktop maupun HP (Mobile), dilengkapi pencarian instan, filter koleksi, label produk (Best Seller & Exclusive), serta navigasi bawah bergaya aplikasi mobile.",
      en: "Engineered with an elegant, responsive interface across Desktop and Mobile screens, complete with instant search, smart filtering, product badges (Best Seller & Exclusive), and an app-like mobile bottom navigation bar.",
    },
    role: {
      id: "Fullstack Web Developer",
      en: "Fullstack Web Developer",
    },
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    metrics: [
      {
        id: "Katalog penyewaan kebaya interaktif dengan pencarian & filter pintar",
        en: "Interactive kebaya rental catalog with instant search & smart filters",
      },
      {
        id: "Tampilan keren, elegan, dan full responsif di Desktop maupun HP (Mobile)",
        en: "Elegant, modern UI fully responsive across Desktop and Mobile devices",
      },
      {
        id: "Fitur lengkap: detail ukuran (LD), label koleksi, status stok Ready, dan tombol sewa instan",
        en: "Complete features: size specs, collection badges, real-time Ready status, and instant booking",
      },
    ],
    liveUrl: "https://kebayakanae.my.id/",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-rose-950 via-zinc-900 to-stone-900",
    mobileMockup: "bg-gradient-to-b from-rose-950 to-zinc-900",
    accentColor: "#EC4899",
    desktopImage: "/images/project/kebayakanae(desktop).png",
    mobileImage: "/images/project/kebayakanae(mobile).png",
    mobileFrameImage: "/images/project/layoutmobile.png",
  },
];

export const initialOtherProjects: OtherProject[] = [];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: { id: "Frontend Development", en: "Frontend Development" },
    description: {
      id: "Membangun antarmuka interaktif, responsif di HP & laptop, cepat, dan berstandar web modern.",
      en: "Building responsive, blazing-fast, and interactive user interfaces for mobile & desktop.",
    },
    iconName: "layout",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react", highlight: true },
      { name: "Next.js", level: "Advanced", icon: "nextjs", highlight: true },
      { name: "TypeScript", level: "Intermediate", icon: "typescript" },
      { name: "Tailwind CSS", level: "Expert", icon: "tailwind", highlight: true },
      { name: "HTML5 & CSS3", level: "Expert", icon: "html" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript" },
    ],
  },
  {
    id: "backend",
    title: { id: "Backend & Basis Data", en: "Backend & Database" },
    description: {
      id: "Arsitektur server yang andal, RESTful API yang aman, dan manajemen basis data relasional terstruktur.",
      en: "Reliable server architectures, secure RESTful APIs, and structured relational database design.",
    },
    iconName: "server",
    skills: [
      { name: "Laravel", level: "Expert", icon: "laravel", highlight: true },
      { name: "PHP", level: "Advanced", icon: "php", highlight: true },
      { name: "MySQL", level: "Advanced", icon: "mysql", highlight: true },
      { name: "RESTful API", level: "Advanced", icon: "api", highlight: true },
      { name: "Node.js", level: "Intermediate", icon: "nodejs" },
      { name: "PostgreSQL", level: "Intermediate", icon: "database" },
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "pelindo-3-kalimantan",
    company: "Pelindo 3 Sub Regional Kalimantan",
    role: {
      id: "Magang Divisi IT (IT Division Intern)",
      en: "IT Division Intern",
    },
    location: "Sub Regional Kalimantan, Indonesia",
    period: "Juli - Desember 2026",
    type: { id: "Magang / Internship", en: "Internship" },
    description: {
      id: "Melaksanakan program magang pada Divisi Teknologi Informasi (IT) di Pelindo 3 Sub Regional Kalimantan, mendukung pengembangan aplikasi internal, pengelolaan infrastruktur server, serta operasional sistem teknologi informasi.",
      en: "Undertaking an internship program in the Information Technology (IT) Division at Pelindo 3 Sub Regional Kalimantan, supporting internal web system development, server infrastructure management, and daily IT operations.",
    },
    highlights: [
      {
        id: "Mengembangkan dan memelihara sistem aplikasi berbasis web untuk mendukung operasional internal di lingkungan Pelindo 3 Sub Regional Kalimantan",
        en: "Developing and maintaining internal web-based applications to support operational workflows at Pelindo 3 Sub Regional Kalimantan",
      },
      {
        id: "Membantu pengelolaan server, jaringan, serta deployment layanan aplikasi pada divisi IT",
        en: "Assisting in server administration, network configuration, and application service deployment within the IT division",
      },
      {
        id: "Melakukan troubleshooting teknis, pemeliharaan basis data, dan optimalisasi kinerja sistem informasi perusahaan",
        en: "Performing technical troubleshooting, database maintenance, and performance optimization for enterprise information systems",
      },
    ],
    techStack: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "MySQL",
      "PostgreSQL",
      "Ubuntu Server",
      "Nginx",
    ],
  },
];

export const testimonials: Testimonial[] = [];

export const statistics = [
  {
    number: 25,
    suffix: "+",
    label: { id: "Proyek Selesai", en: "Completed Projects" },
    sub: { id: "Web App, IoT & Automasi", en: "Web Apps, IoT & Automations" },
  },
  {
    number: 15,
    suffix: "+",
    label: { id: "Klien & Partner", en: "Happy Clients & Partners" },
    sub: { id: "Studio, UMKM & Akademik", en: "Studios, MSMEs & Academic" },
  },
  {
    number: 3,
    suffix: "+",
    label: { id: "Tahun Pengalaman", en: "Years of Experience" },
    sub: { id: "Fullstack & IoT Development", en: "Fullstack & IoT Development" },
  },
  {
    number: 99,
    suffix: "%",
    label: { id: "Tingkat Kepuasan", en: "Client Satisfaction" },
    sub: { id: "Ketepatan Waktu & Kualitas", en: "On-time Delivery & Quality" },
  },
];

export const personalInfo = {
  name: "Daniel Sinurat",
  role: {
    id: "Web Developer & IoT Engineer",
    en: "Web Developer & IoT Engineer",
  },
  tagline: {
    id: "Membangun solusi web interaktif, berkinerja tinggi & terintegrasi cerdas dengan perangkat IoT dan automasi alur kerja.",
    en: "Crafting high-performance, interactive web platforms intelligently integrated with IoT devices and workflow automations.",
  },
  bio: {
    id: "Halo! Saya Daniel Sinurat, lulusan D-III Teknologi Informasi dari Universitas Brawijaya. Sebagai Web Developer dengan dedikasi tinggi, saya menguasai ekosistem Laravel, React, dan Next.js untuk membangun aplikasi web yang cepat, aman, dan mudah digunakan di HP maupun laptop. Selain web, saya juga berpengalaman merancang sistem cerdas berbasis mikrokontroler ESP32 dan automasi workflow n8n untuk meningkatkan efisiensi bisnis.",
    en: "Hello! I am Daniel Sinurat, an Information Technology graduate (D-III) from Universitas Brawijaya. As a dedicated Web Developer, I specialize in Laravel, React, and Next.js to craft fast, secure, and user-centric web applications tailored for mobile and desktop screens. Beyond web development, I build smart hardware solutions with ESP32 microcontrollers and streamline workflows with n8n automations.",
  },
  education: {
    degree: "D-III TEKNOLOGI INFORMASI",
    campus: "Universitas Brawijaya (PSDKU Kediri)",
    status: { id: "Lulusan / Alumni", en: "Graduate / Alumni" },
  },
  contact: {
    phone: "+62 821-4567-8901",
    whatsapp: "6282145678901",
    email: "danielsinurat.dev@gmail.com",
    location: "Kediri / Malang, Jawa Timur, Indonesia",
    github: "https://github.com/danieltigorsinuratt",
    linkedin: "https://linkedin.com/in/danielsinurat",
  },
};
