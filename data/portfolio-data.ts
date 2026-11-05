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
    id: "dignify-web",
    title: {
      id: "Platform Digital & Portal Dignify Studio",
      en: "Dignify Studio Digital Platform & Portal",
    },
    category: "webapp",
    categoryLabel: { id: "Web App", en: "Web App" },
    tagline: {
      id: "Sistem web interaktif modern dengan performa tinggi & integrasi workflow",
      en: "High-performance interactive web system with modern workflow integration",
    },
    problem: {
      id: "Dignify Studio membutuhkan portal terpadu untuk showcase karya multimedia, penerimaan order proyek client, serta monitoring progres pesanan yang sebelumnya tersebar di berbagai spreadsheet manual.",
      en: "Dignify Studio needed an integrated portal for showcasing multimedia works, accepting client orders, and tracking project progress that was previously scattered across manual spreadsheets.",
    },
    solution: {
      id: "Membangun sistem web responsif fullstack dengan Laravel & React. Dilengkapi panel manajemen proyek real-time, integrasi notifikasi otomatis via webhook, serta antarmuka visual bergaya studio modern.",
      en: "Built a responsive fullstack web platform using Laravel & React, featuring a real-time project management dashboard, automated webhook notifications, and a modern studio visual interface.",
    },
    role: {
      id: "Lead Web Developer & System Architect",
      en: "Lead Web Developer & System Architect",
    },
    techStack: ["Laravel", "React", "Next.js", "MySQL", "Tailwind CSS", "n8n"],
    metrics: [
      { id: "Peningkatan konversi inquiry klien hingga 45%", en: "45% increase in client inquiry conversions" },
      { id: "Waktu loading halaman < 1.2 detik (Skor Lighthouse 98)", en: "Page load speed < 1.2s (98 Lighthouse score)" },
      { id: "Mengurangi 70% waktu pencatatan order manual", en: "Reduced 70% of manual order logging time" },
    ],
    liveUrl: "https://dignifystudio.com",
    githubUrl: "https://github.com/danielsinurat/dignify-web",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900",
    mobileMockup: "bg-gradient-to-b from-indigo-950 to-slate-900",
    accentColor: "#6366F1",
  },
  {
    id: "iot-smart-telemetry",
    title: {
      id: "Sistem Monitoring & Telemetri IoT ESP32",
      en: "ESP32 IoT Telemetry & Smart Monitoring System",
    },
    category: "iot",
    categoryLabel: { id: "IoT & Hardware", en: "IoT & Hardware" },
    tagline: {
      id: "Dashboard kontrol sensor real-time dengan komunikasi WebSocket & ESP32",
      en: "Real-time sensor control dashboard with WebSocket communication & ESP32",
    },
    problem: {
      id: "Pemantauan lingkungan dan perangkat hardware di lapangan seringkali terlambat karena data hanya direkam secara offline tanpa peringatan dini terhadap anomali suhu dan kelembaban.",
      en: "Environmental and hardware field monitoring suffered from severe delays as data was only recorded offline without early alerts for temperature and humidity anomalies.",
    },
    solution: {
      id: "Merancang node sensor berbasis mikrokontroler ESP32 yang terhubung ke cloud server melalui protokol MQTT dan WebSocket. Menghadirkan web dashboard interaktif dengan visualisasi grafik live serta webhook n8n untuk bot peringatan Telegram.",
      en: "Designed ESP32 microcontroller sensor nodes streaming data to cloud servers via MQTT & WebSocket. Built an interactive web dashboard with live charts and n8n webhook alerts sent to Telegram.",
    },
    role: {
      id: "IoT Engineer & Fullstack Developer",
      en: "IoT Engineer & Fullstack Developer",
    },
    techStack: ["ESP32", "Arduino C++", "Next.js", "Node.js", "MySQL", "n8n"],
    metrics: [
      { id: "Latensi data telemetry real-time di bawah 250ms", en: "Real-time telemetry latency under 250ms" },
      { id: "Notifikasi anomali terkirim dalam waktu 3 detik", en: "Anomaly notifications delivered in under 3 seconds" },
      { id: "Penghematan konsumsi daya perangkat hingga 35%", en: "Device power consumption reduced by 35%" },
    ],
    liveUrl: "https://iot-telemetry.danielsinurat.dev",
    githubUrl: "https://github.com/danielsinurat/esp32-telemetry-iot",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950",
    mobileMockup: "bg-gradient-to-b from-teal-950 to-slate-900",
    accentColor: "#10B981",
  },
  {
    id: "smart-pos-resto",
    title: {
      id: "Sistem Kasir & Manajemen Inventori Kafe",
      en: "Smart Resto POS & Inventory Management System",
    },
    category: "webapp",
    categoryLabel: { id: "Web App", en: "Web App" },
    tagline: {
      id: "Aplikasi POS kasir cepat dengan cetak struk thermal & analitik penjualan",
      en: "Ultra-fast POS cashier app with thermal receipt printing & sales analytics",
    },
    problem: {
      id: "Kafe lokal mengalami antrean panjang saat jam sibuk dan sering kehabisan stok bahan baku tanpa peringatan otomatis.",
      en: "A local cafe experienced long queues during peak hours and frequent ingredient stockouts due to lack of real-time inventory tracking.",
    },
    solution: {
      id: "Mengembangkan aplikasi web berbasis Laravel dan React dengan arsitektur SPA yang sangat responsif, dukungan offline-first, pencetakan struk Bluetooth/Thermal, dan pelacakan inventori otomatis per menu.",
      en: "Engineered a high-speed Laravel & React single-page POS web application with offline-first support, Bluetooth thermal printing, and automated recipe-level inventory deductions.",
    },
    role: {
      id: "Fullstack Web Developer",
      en: "Fullstack Web Developer",
    },
    techStack: ["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"],
    metrics: [
      { id: "Waktu transaksi per pelanggan berkurang 50%", en: "Transaction time per customer reduced by 50%" },
      { id: "100% akurasi pencocokan kas harian", en: "100% daily cash reconciliation accuracy" },
      { id: "Laporan otomatis harian via n8n ke email pemilik", en: "Automated daily reports sent to owner via n8n" },
    ],
    liveUrl: "https://pos-resto.danielsinurat.dev",
    githubUrl: "https://github.com/danielsinurat/laravel-pos-smart",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950",
    mobileMockup: "bg-gradient-to-b from-amber-950 to-slate-900",
    accentColor: "#F59E0B",
  },
  {
    id: "n8n-crm-automation",
    title: {
      id: "Automasi Workflow CRM & WhatsApp Gateway",
      en: "CRM Automation & WhatsApp Multi-Channel Gateway",
    },
    category: "automation",
    categoryLabel: { id: "Automation", en: "Automation" },
    tagline: {
      id: "Otomasi leads, follow-up WhatsApp instan & sinkronisasi database pelanggan",
      en: "Automated lead intake, instant WhatsApp follow-ups & customer DB sync",
    },
    problem: {
      id: "Tim sales kehilangan 40% calon klien potensial karena respon lambat pada chat masuk di luar jam kerja serta input data manual yang repetitif.",
      en: "Sales team lost 40% of potential leads due to delayed responses to off-hours inquiries and repetitive manual lead data entry.",
    },
    solution: {
      id: "Merancang pipeline automasi cerdas n8n yang menghubungkan formulir web portfolio, WhatsApp Business API, dan database MySQL secara instan dengan auto-routing pesan cerdas.",
      en: "Architected an n8n automation pipeline connecting web portfolio forms, WhatsApp Business API, and MySQL database with intelligent auto-reply and routing.",
    },
    role: {
      id: "Automation Engineer & Integrator",
      en: "Automation Engineer & Integrator",
    },
    techStack: ["n8n", "Node.js", "MySQL", "REST API", "Docker"],
    metrics: [
      { id: "Waktu respon pertama turun dari 3 jam menjadi 15 detik", en: "First-response time dropped from 3 hours to 15s" },
      { id: "100% otomatisasi data entry ke CRM", en: "100% automated lead ingestion into CRM" },
      { id: "Mampu memproses hingga 5.000 webhook/hari", en: "Handles over 5,000 webhooks daily without fail" },
    ],
    liveUrl: "https://automation.danielsinurat.dev",
    githubUrl: "https://github.com/danielsinurat/n8n-workflow-integrations",
    featured: true,
    laptopMockup: "bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950",
    mobileMockup: "bg-gradient-to-b from-purple-950 to-slate-900",
    accentColor: "#8B5CF6",
  },
  {
    id: "campus-information-system",
    title: {
      id: "Sistem Informasi Akademik & Portofolio Mahasiswa (PBL UB)",
      en: "Academic Information & Student Portfolio System (UB PBL)",
    },
    category: "webapp",
    categoryLabel: { id: "Web App", en: "Web App" },
    tagline: {
      id: "Portal akademik terpadu dengan autentikasi multi-role & manajemen berkas",
      en: "Integrated academic portal with multi-role authentication & document management",
    },
    problem: {
      id: "Proses pengumpulan portofolio dan verifikasi tugas akhir mahasiswa di program studi D-III TI masih membutuhkan penyerahan fisik dan rawan hilang.",
      en: "Collection of final project portfolios and verification in D-III IT program required physical submissions and was prone to lost records.",
    },
    solution: {
      id: "Mengembangkan platform portal berbasis Laravel dan Bootstrap/Tailwind dengan hak akses Dosen, Mahasiswa, dan Admin. Dilengkapi preview berkas online dan status approval bertingkat.",
      en: "Built a robust Laravel web portal with role-based access control (Lecturers, Students, Admins), featuring online document previews and staged review approvals.",
    },
    role: {
      id: "Fullstack Developer (Team Lead PBL)",
      en: "Fullstack Developer (PBL Team Lead)",
    },
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "REST API"],
    metrics: [
      { id: "Digunakan oleh 200+ mahasiswa aktif dan dosen", en: "Used by 200+ active students and faculty" },
      { id: "Memangkas waktu verifikasi berkas dari 5 hari ke 1 hari", en: "Cut document verification from 5 days to 1 day" },
      { id: "Mendapat nilai A pada evaluasi Project Based Learning", en: "Achieved Grade A in UB Project Based Learning evaluation" },
    ],
    liveUrl: "https://si-akademik.danielsinurat.dev",
    githubUrl: "https://github.com/danielsinurat/si-portofolio-ub",
    featured: false,
    laptopMockup: "bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950",
    mobileMockup: "bg-gradient-to-b from-blue-950 to-slate-900",
    accentColor: "#3B82F6",
  },
  {
    id: "creative-studio-uiux",
    title: {
      id: "Desain Sistem & UI/UX Studio Kreatif",
      en: "Creative Studio UI/UX & Design System",
    },
    category: "uiux",
    categoryLabel: { id: "UI/UX", en: "UI/UX" },
    tagline: {
      id: "Design system komprehensif, panduan tipografi & antarmuka digital",
      en: "Comprehensive design system, typography guidelines & digital UI",
    },
    problem: {
      id: "Inkonsistensi visual antar halaman website dan materi pemasaran digital studio menurunkan persepsi profesionalitas brand.",
      en: "Visual inconsistency across website pages and studio digital marketing materials diluted brand professionalism.",
    },
    solution: {
      id: "Merancang design tokens, library komponen Figma interaktif, dan panduan layout responsif yang diimplementasikan langsung ke kode Tailwind CSS.",
      en: "Designed unified design tokens, interactive Figma component libraries, and responsive layout guidelines implemented straight into Tailwind CSS.",
    },
    role: {
      id: "UI/UX Designer & Frontend Developer",
      en: "UI/UX Designer & Frontend Developer",
    },
    techStack: ["Figma", "Tailwind CSS", "React", "Next.js"],
    metrics: [
      { id: "50+ komponen reusable siap pakai", en: "50+ production-ready reusable components" },
      { id: "Mempercepat waktu delivery fitur baru sebesar 40%", en: "Accelerated new feature delivery by 40%" },
    ],
    liveUrl: "https://ui-system.danielsinurat.dev",
    githubUrl: "https://github.com/danielsinurat/studio-design-system",
    featured: false,
    laptopMockup: "bg-gradient-to-br from-pink-950 via-slate-900 to-purple-950",
    mobileMockup: "bg-gradient-to-b from-pink-950 to-slate-900",
    accentColor: "#EC4899",
  },
];

export const initialOtherProjects: OtherProject[] = [
  {
    id: "esp32-greenhouse",
    title: "ESP32 Smart Greenhouse Hydroponic Controller",
    category: "IoT / Hardware",
    description: {
      id: "Kontrol pompa nutrisi, sensor pH dan suhu air hidroponik otomatis dengan logging data ke database cloud.",
      en: "Automated nutrient pump, pH sensor, and water temp monitor with cloud database logging.",
    },
    techStack: ["ESP32", "Arduino", "MQTT", "Node.js"],
    githubUrl: "https://github.com/danielsinurat/esp32-hydroponics",
  },
  {
    id: "n8n-gmail-notion",
    title: "n8n Invoice Scanner to Notion & Telegram",
    category: "Automation",
    description: {
      id: "Workflow otomatis memindai invoice PDF dari email, mengekstrak data penting, dan mencatatnya ke database Notion.",
      en: "Automated workflow scanning email invoices, parsing key details, and appending to Notion database.",
    },
    techStack: ["n8n", "Webhook", "Notion API", "Telegram Bot"],
    githubUrl: "https://github.com/danielsinurat/n8n-invoice-notion",
  },
  {
    id: "resto-menu-qr",
    title: "QR Code Interactive Dining Menu & Order",
    category: "Web App",
    description: {
      id: "Buku menu digital interaktif berbasis web tanpa perlu install aplikasi, langsung kirim order ke dapur via WhatsApp.",
      en: "Interactive web digital dining menu without app installs, sending orders directly to kitchen via WhatsApp.",
    },
    techStack: ["React", "Tailwind CSS", "PHP", "WhatsApp API"],
    githubUrl: "https://github.com/danielsinurat/qr-menu-resto",
  },
  {
    id: "attendance-rfid",
    title: "RFID IoT Attendance Terminal with Web Sync",
    category: "IoT & Web",
    description: {
      id: "Alat absensi kartu RFID berbasis ESP32 yang terhubung ke dashboard web kehadiran karyawan secara real-time.",
      en: "ESP32 RFID card reader hardware syncing with real-time employee web attendance portal.",
    },
    techStack: ["ESP32", "RFID RC522", "PHP", "MySQL"],
    githubUrl: "https://github.com/danielsinurat/rfid-iot-absensi",
  },
  {
    id: "portfolio-minimalist",
    title: "Clean Developer Portfolio Template",
    category: "UI/UX & Code",
    description: {
      id: "Template web portfolio developer open-source dengan performa skor 100 di Google Lighthouse.",
      en: "Open-source developer portfolio template with 100/100 Google Lighthouse performance score.",
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/danielsinurat/minimal-developer-portfolio",
  },
  {
    id: "weather-station-web",
    title: "Micro-Weather Station Web Widget",
    category: "IoT & API",
    description: {
      id: "Widget ramalan cuaca lokal dengan sensor BME280 dan komparasi API OpenWeatherMap secara grafis.",
      en: "Local weather forecasting dashboard using BME280 sensor alongside OpenWeatherMap API data.",
    },
    techStack: ["ESP32", "Next.js", "Chart.js"],
    githubUrl: "https://github.com/danielsinurat/weather-iot-widget",
  },
];

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
  {
    id: "iot",
    title: { id: "IoT & Sistem Tertanam", en: "IoT & Embedded Systems" },
    description: {
      id: "Menghubungkan dunia fisik ke web: mikrokontroler, pembacaan sensor, MQTT, dan telemetri langsung.",
      en: "Bridging physical hardware to the web: microcontrollers, sensor telemetry, and real-time control.",
    },
    iconName: "cpu",
    skills: [
      { name: "ESP32", level: "Advanced", icon: "esp32", highlight: true },
      { name: "Arduino C++", level: "Advanced", icon: "arduino" },
      { name: "MQTT Protocol", level: "Advanced", icon: "mqtt", highlight: true },
      { name: "WebSocket Live Data", level: "Intermediate", icon: "websocket" },
      { name: "Sensors & Actuators", level: "Advanced", icon: "chip" },
    ],
  },
  {
    id: "automation",
    title: { id: "Automasi & Alat Kerja", en: "Automation & Dev Tools" },
    description: {
      id: "Mengotomasi alur kerja repetitif dan memaksimalkan produktivitas tim pengembang.",
      en: "Automating repetitive business workflows and maximizing developer productivity.",
    },
    iconName: "workflow",
    skills: [
      { name: "n8n Workflow", level: "Advanced", icon: "n8n", highlight: true },
      { name: "Git & GitHub", level: "Advanced", icon: "git", highlight: true },
      { name: "Postman", level: "Advanced", icon: "postman" },
      { name: "Docker Basics", level: "Intermediate", icon: "docker" },
      { name: "Figma UI/UX", level: "Intermediate", icon: "figma" },
      { name: "Linux / CLI", level: "Intermediate", icon: "terminal" },
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "dignify",
    company: "Dignify Studio",
    role: {
      id: "Web Developer & Digital Lead",
      en: "Web Developer & Digital Lead",
    },
    location: "Indonesia",
    period: "2023 - Sekarang (Present)",
    type: { id: "Full-time / Studio", en: "Full-time / Studio" },
    description: {
      id: "Memimpin perancangan dan pengembangan platform digital Dignify Studio, membangun portal klien dan sistem automasi.",
      en: "Leading the design and engineering of Dignify Studio's digital platforms, client portals, and automation workflows.",
    },
    highlights: [
      {
        id: "Merancang arsitektur web responsif dengan performa skor 95+ di Google Lighthouse",
        en: "Architected responsive web platforms with 95+ scores on Google Lighthouse",
      },
      {
        id: "Mengintegrasikan pipeline n8n untuk intake pesanan dan notifikasi WhatsApp otomatis",
        en: "Integrated n8n automation for order intake and automated WhatsApp notifications",
      },
      {
        id: "Mengembangkan komponen UI interaktif yang konsisten di layar smartphone dan laptop",
        en: "Crafted interactive UI components seamlessly adapted for both mobile and laptop screens",
      },
    ],
    techStack: ["Laravel", "React", "Next.js", "MySQL", "Tailwind CSS", "n8n"],
  },
  {
    id: "pbl-ub",
    company: "Project Based Learning (PBL) - Universitas Brawijaya",
    role: {
      id: "Fullstack Web & IoT Integrator",
      en: "Fullstack Web & IoT Integrator",
    },
    location: "PSDKU UB Kediri",
    period: "2022 - 2024",
    type: { id: "Academic / Industry Project", en: "Academic / Industry Project" },
    description: {
      id: "Mengembangkan proyek riil berupa portal sistem informasi akademik dan sistem telemetri IoT berbasis ESP32.",
      en: "Developed real-world systems including academic information portals and ESP32 telemetry hardware solutions.",
    },
    highlights: [
      {
        id: "Membangun sistem akademik multi-role menggunakan Laravel dan basis data MySQL terdistribusi",
        en: "Engineered a multi-role academic platform using Laravel and normalized MySQL schema",
      },
      {
        id: "Merancang node IoT ESP32 untuk pemantauan lingkungan secara berkala dengan dashboard live",
        en: "Prototyped ESP32 sensor nodes for environmental monitoring with real-time web charts",
      },
      {
        id: "Memperoleh penilaian A dan apresiasi tim penguji atas kualitas arsitektur kode",
        en: "Achieved Grade A and commendations for code architecture and user experience",
      },
    ],
    techStack: ["Laravel", "PHP", "MySQL", "ESP32", "Arduino C++", "Bootstrap"],
  },
  {
    id: "freelance",
    company: "Freelance & Independent Client Work",
    role: {
      id: "Web Developer & System Consultant",
      en: "Web Developer & System Consultant",
    },
    location: "Remote",
    period: "2022 - Sekarang (Present)",
    type: { id: "Freelance / Contract", en: "Freelance / Contract" },
    description: {
      id: "Membantu UMKM, startup, dan perorangan mendigitalkan operasional mereka lewat web app kustom dan otomasi.",
      en: "Assisting MSMEs, startups, and individuals in digitizing operations through custom web apps and automations.",
    },
    highlights: [
      {
        id: "Membangun sistem POS kasir kafe dengan cetak Bluetooth dan auto report n8n",
        en: "Built a cafe POS system with Bluetooth printing and n8n automated reporting",
      },
      {
        id: "Merancang landing page interaktif dengan konversi tinggi untuk campaign produk",
        en: "Designed high-converting interactive landing pages for product launch campaigns",
      },
    ],
    techStack: ["Laravel", "React", "Next.js", "MySQL", "n8n"],
  },
  {
    id: "education",
    company: "Universitas Brawijaya (PSDKU Kediri)",
    role: {
      id: "Mahasiswa D-III Teknologi Informasi",
      en: "D-III Information Technology Graduate",
    },
    location: "Kediri / Malang, Indonesia",
    period: "2021 - 2024",
    type: { id: "Pendidikan Tinggi / Education", en: "Higher Education" },
    description: {
      id: "Menyelesaikan studi kejuruan D-III Teknologi Informasi dengan fokus pada Rekayasa Web, Basis Data, Jaringan Komputer, dan Mikrokontroler.",
      en: "Completed D-III Information Technology with deep focus on Web Engineering, Databases, Computer Networks, and Microcontrollers.",
    },
    highlights: [
      {
        id: "Lulus dengan pemahaman kuat dalam struktur data, logika pemrograman, dan arsitektur web modern",
        en: "Graduated with strong foundations in data structures, algorithms, and modern web architectures",
      },
      {
        id: "Aktif dalam proyek kolaboratif teknologi informasi dan riset implementasi IoT",
        en: "Active in collaborative IT projects and real-world IoT implementation research",
      },
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Java", "C++", "Networking"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arya Wicaksono",
    role: { id: "Creative Director", en: "Creative Director" },
    company: "Dignify Studio",
    quote: {
      id: "Daniel memiliki pemahaman luar biasa dalam menerjemahkan kebutuhan visual ke dalam kode web yang sangat cepat. Tampilan web kami terlihat sangat estetik dan bekerja mulus di HP!",
      en: "Daniel has an exceptional talent for translating visual requirements into blazing-fast code. Our studio website looks stunning and works flawlessly on mobile!",
    },
    avatar: "AW",
    rating: 5,
  },
  {
    id: "2",
    name: "Budi Santoso",
    role: { id: "Owner & Founder", en: "Owner & Founder" },
    company: "Kopi Seduh Nusantara",
    quote: {
      id: "Sistem kasir dan automasi WhatsApp yang dibuatkan Daniel memotong antrean panjang di kafe kami saat jam ramai. Sangat profesional, solutif, dan mudah diajak komunikasi.",
      en: "The POS system and WhatsApp automation Daniel built eliminated long queues at our cafe during rush hours. Incredibly professional, solution-oriented, and easy to work with.",
    },
    avatar: "BS",
    rating: 5,
  },
  {
    id: "3",
    name: "Dr. Ir. Hendra Saputra",
    role: { id: "Dosen Pembimbing PBL", en: "PBL Project Supervisor" },
    company: "Universitas Brawijaya",
    quote: {
      id: "Kombinasi kemampuan web fullstack dan hardware IoT ESP32 yang dimiliki Daniel sangat langka. Proyek telemetrinya berjalan stabil dan terstruktur dengan rapi.",
      en: "Daniel's dual mastery of fullstack web and ESP32 IoT hardware is rare. His telemetry project was remarkably stable, scalable, and well-architected.",
    },
    avatar: "HS",
    rating: 5,
  },
];

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
    github: "https://github.com/danielsinurat",
    linkedin: "https://linkedin.com/in/danielsinurat",
  },
};
