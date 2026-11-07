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
  statusBarBg?: string;
  bottomBarBg?: string;
  darkStatusIcons?: boolean;
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
  documentationImages?: string[];
  documentationUrl?: string;
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
    statusBarBg: "#FBF4EC",
    bottomBarBg: "#FCF6EF",
    darkStatusIcons: true,
  },
  {
    id: "class-billiard",
    title: {
      id: "Class Billiard",
      en: "Class Billiard",
    },
    category: "webapp",
    categoryLabel: { id: "Web App", en: "Web App" },
    tagline: {
      id: "Premium Billiard & Cafe Eatery — Platform Reservasi Meja & Katalog Menu",
      en: "Premium Billiard & Cafe Eatery — Table Reservation & Menu Platform",
    },
    problem: {
      id: "Class Billiard adalah platform web resmi untuk Premium Billiard & Cafe Eatery yang memudahkan pelanggan melakukan reservasi meja biliar (Book a Table) secara online, menjelajahi daftar menu makanan dan minuman kafe, serta melihat informasi layanan secara praktis baik melalui perangkat desktop maupun mobile.",
      en: "Class Billiard is the official web platform for a Premium Billiard & Cafe Eatery, allowing customers to reserve billiard tables online, explore the cafe eatery menu, and check venue details seamlessly across desktop and mobile devices.",
    },
    solution: {
      id: "Dirancang dengan estetika dark-luxury dan aksen gold yang elegan serta responsif di layar Desktop maupun HP (Mobile), dilengkapi fitur reservasi meja biliar online, halaman katalog menu interaktif, dan akses kontak cepat.",
      en: "Designed with a sleek dark-luxury and gold aesthetic fully responsive on both Desktop and Mobile screens, complete with online table booking, an interactive cafe menu, and instant contact navigation.",
    },
    role: {
      id: "Fullstack Web Developer",
      en: "Fullstack Web Developer",
    },
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    metrics: [
      {
        id: "Sistem reservasi meja biliar (Book a Table) online yang cepat dan praktis",
        en: "Seamless online billiard table reservation (Book a Table) system",
      },
      {
        id: "Tampilan dark-luxury & gold yang elegan dan responsif di Desktop maupun HP (Mobile)",
        en: "Elegant dark-luxury & gold interface responsive across Desktop and Mobile",
      },
      {
        id: "Fitur lengkap: halaman Menu Cafe Eatery, Reservation, dan integrasi Contact Us",
        en: "Complete features: Cafe Eatery menu showcase, online reservation, and Contact Us integration",
      },
    ],
    liveUrl: "https://classbilliard.com/",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-yellow-950 via-zinc-900 to-black",
    mobileMockup: "bg-gradient-to-b from-yellow-950 to-black",
    accentColor: "#EAB308",
    desktopImage: "/images/project/classbilliard(desktop).png",
    mobileImage: "/images/project/classbilliard(mobile).png",
    mobileFrameImage: "/images/project/layoutmobile.png",
    statusBarBg: "#020202",
    bottomBarBg: "#050505",
    darkStatusIcons: false,
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
    documentationImages: [
      "/images/dokumentasi/pelindo1.png",
      "/images/dokumentasi/pelindo2.png",
      "/images/dokumentasi/pelindo3.png",
    ],
  },
  {
    id: "lkmm-tm-bem-2025",
    company: "Proker Badan Eksekutif Mahasiswa (BEM)",
    role: {
      id: "Ketua Pelaksana — LKMM-TM 2025",
      en: "Chief Organizer — LKMM-TM 2025",
    },
    location: "Fakultas Vokasi, Universitas Brawijaya",
    period: "2025",
    type: {
      id: "Proker BEM / Kepanitiaan",
      en: "Student Executive Board Program",
    },
    description: {
      id: "Memimpin perencanaan, koordinasi lintas divisi, dan pelaksanaan program kerja Latihan Keterampilan Manajemen Mahasiswa - Tingkat Menengah (LKMM-TM) yang diselenggarakan oleh Badan Eksekutif Mahasiswa (BEM) tahun 2025.",
      en: "Led the planning, cross-division coordination, and execution of the Intermediate Student Management Skills Training (LKMM-TM) program organized by the Student Executive Board (BEM) in 2025.",
    },
    highlights: [
      {
        id: "Mengelola seluruh divisi kepanitiaan mulai dari perancangan konsep kegiatan, penyusunan materi pelatihan, hingga evaluasi akhir",
        en: "Managed all committee divisions from event concept design and training curriculum preparation to final evaluation",
      },
      {
        id: "Mengkoordinasikan komunikasi dengan pemateri, pihak kemahasiswaan, dan peserta agar seluruh rangkaian acara berjalan kondusif",
        en: "Coordinated closely with speakers, student affairs officials, and participants to ensure smooth execution",
      },
      {
        id: "Bertanggung jawab atas pengambilan keputusan strategis dan manajemen operasional selama kegiatan berlangsung",
        en: "Oversaw strategic decision-making and operational management throughout the training program",
      },
    ],
    techStack: [
      "Leadership",
      "Event Management",
      "Team Coordination",
      "Public Speaking",
      "Problem Solving",
    ],
  },
  {
    id: "samba-ti-2025",
    company: "Proker Himpunan Mahasiswa Teknologi Informasi",
    role: {
      id: "Ketua Pelaksana — Sambut Maba TI 2025 (SAMBA TI 25)",
      en: "Chief Organizer — SAMBA TI 2025",
    },
    location: "Teknologi Informasi, Universitas Brawijaya",
    period: "2025",
    type: {
      id: "Proker Himpunan Mahasiswa",
      en: "IT Student Association Program",
    },
    description: {
      id: "Menjabat sebagai Ketua Pelaksana pada program kerja Sambut Maba TI 2025 (SAMBA TI 25) di bawah Himpunan Mahasiswa Teknologi Informasi untuk memperkenalkan lingkungan akademik, budaya, dan solidaritas program studi kepada mahasiswa baru.",
      en: "Served as Chief Organizer for the 2025 IT Freshman Welcoming Program (SAMBA TI 25) under the Information Technology Student Association, introducing academic culture and department life to incoming students.",
    },
    highlights: [
      {
        id: "Merancang konsep penyambutan mahasiswa baru Teknologi Informasi yang edukatif, terarah, dan kolaboratif",
        en: "Designed an educational, structured, and collaborative orientation program for new Information Technology students",
      },
      {
        id: "Memimpin koordinasi seluruh divisi kepanitiaan untuk memastikan kesiapan konsep acara, teknis lapangan, dan pendampingan maba",
        en: "Directed all committee divisions to ensure event readiness, field operations, and freshman mentoring",
      },
      {
        id: "Menjaga sinergi komunikasi antara pengurus himpunan, panitia pelaksana, dan jajaran program studi",
        en: "Maintained effective communication between student association leaders, committee members, and department faculty",
      },
    ],
    techStack: [
      "Leadership",
      "Project Management",
      "Teamwork",
      "Time Management",
      "Communication",
    ],
  },
  {
    id: "pkkmb-fv-2025",
    company: "Proker Badan Eksekutif Mahasiswa (BEM) x Kemahasiswaan",
    role: {
      id: "Koordinator Venue — PKKMB Fakultas Vokasi (PKKMB FV 25)",
      en: "Venue Coordinator — PKKMB Vocational Faculty 2025",
    },
    location: "Fakultas Vokasi, Universitas Brawijaya",
    period: "2025",
    type: {
      id: "Proker BEM x Kemahasiswaan",
      en: "BEM x Student Affairs Program",
    },
    description: {
      id: "Bertanggung jawab sebagai Koordinator Venue pada kegiatan Pengenalan Kehidupan Kampus bagi Mahasiswa Baru Fakultas Vokasi (PKKMB FV 25) yang merupakan program kerja kolaborasi Badan Eksekutif Mahasiswa (BEM) 2025 bersama Kemahasiswaan.",
      en: "Served as Venue Coordinator for the 2025 Vocational Faculty Campus Life Introduction for New Students (PKKMB FV 25), a collaborative program between the 2025 Student Executive Board (BEM) and Student Affairs.",
    },
    highlights: [
      {
        id: "Mengatur kesiapan tata letak, kapasitas, dan kelayakan teknis seluruh area venue utama maupun pendukung selama PKKMB FV 25",
        en: "Managed layout readiness, capacity planning, and technical preparation of all main and supporting venues during PKKMB FV 25",
      },
      {
        id: "Berkoordinasi langsung dengan pihak Kemahasiswaan, pengelola sarana prasarana, serta divisi acara dan perlengkapan",
        en: "Coordinated directly with Student Affairs, facility management, and event/logistics divisions",
      },
      {
        id: "Memastikan kelancaran alur mobilisasi mahasiswa baru dan penanganan cepat terhadap kebutuhan operasional venue di lapangan",
        en: "Ensured smooth freshman mobilization flow and rapid on-site response to venue operational needs",
      },
    ],
    techStack: [
      "Venue Management",
      "Field Coordination",
      "Logistics & Operations",
      "Cross-Team Collaboration",
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
