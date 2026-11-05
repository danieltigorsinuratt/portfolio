// Simple standard PDF 1.4 generator for Daniel Sinurat's CV
const fs = require('fs');
const path = require('path');

function createPdf(outputPath) {
  const lines = [
    "%PDF-1.4",
    "%\n",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /MediaBox [0 0 612 792] /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj"
  ];

  // PDF content stream
  const contentCommands = [
    "BT",
    // Header
    "/F1 24 Tf",
    "50 740 Td",
    "(DANIEL SINURAT) Tj",
    "0 -22 Td",
    "/F1 14 Tf",
    "(WEB DEVELOPER & IOT ENGINEER) Tj",
    "0 -18 Td",
    "/F2 10 Tf",
    "(Email: danielsinurat.dev@gmail.com | WhatsApp: +62 821-4567-8901 | Kediri / Malang, Indonesia) Tj",
    "0 -14 Td",
    "(GitHub: github.com/danielsinurat | LinkedIn: linkedin.com/in/danielsinurat) Tj",
    
    // Divider
    "0 -18 Td",
    "/F1 12 Tf",
    "(------------------------------------------------------------------------------------------------------------------------) Tj",

    // Profile Summary
    "0 -20 Td",
    "/F1 13 Tf",
    "(RINGKASAN PROFESIONAL / SUMMARY) Tj",
    "0 -16 Td",
    "/F2 10 Tf",
    "(Web Developer dengan latar belakang D-III Teknologi Informasi Universitas Brawijaya.) Tj",
    "0 -14 Td",
    "(Spesialisasi dalam ekosistem Laravel, React, Next.js, PHP, MySQL, ESP32 IoT, dan n8n automation.) Tj",
    "0 -14 Td",
    "(Berpengalaman membangun aplikasi modern yang scalable, berkecepatan tinggi, dan responsif.) Tj",

    // Education
    "0 -25 Td",
    "/F1 13 Tf",
    "(PENDIDIKAN / EDUCATION) Tj",
    "0 -16 Td",
    "/F1 11 Tf",
    "(D-III TEKNOLOGI INFORMASI - UNIVERSITAS BRAWIJAYA) Tj",
    "0 -14 Td",
    "/F2 10 Tf",
    "(PSDKU Kediri | Fokus: Rekayasa Perangkat Lunak, Basis Data, Jaringan & Sistem Terdistribusi) Tj",

    // Experience
    "0 -25 Td",
    "/F1 13 Tf",
    "(PENGALAMAN KERJA & PROYEK / EXPERIENCE) Tj",
    "0 -16 Td",
    "/F1 11 Tf",
    "(Web Developer & Digital Lead - Dignify Studio) Tj",
    "0 -14 Td",
    "/F2 10 Tf",
    "(- Mengembangkan aplikasi web dan portal interaktif menggunakan Laravel, React, dan Tailwind CSS.) Tj",
    "0 -14 Td",
    "(- Mengoptimasi performa web hingga skor Lighthouse 95+ dan mendesain UI/UX yang modern.) Tj",
    "0 -18 Td",
    "/F1 11 Tf",
    "(Fullstack Developer & IoT Engineer - Project Based Learning (PBL) UB) Tj",
    "0 -14 Td",
    "/F2 10 Tf",
    "(- Membangun sistem telemetri berbasis ESP32 dengan web dashboard real-time.) Tj",
    "0 -14 Td",
    "(- Mengintegrasikan n8n workflow untuk notifikasi webhook otomatis dan pemrosesan data.) Tj",

    // Skills
    "0 -25 Td",
    "/F1 13 Tf",
    "(KEAHLIAN & TEKNOLOGI / SKILLS & TECH STACK) Tj",
    "0 -16 Td",
    "/F2 10 Tf",
    "(- Frontend: React.js, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)) Tj",
    "0 -14 Td",
    "(- Backend & DB: Laravel, PHP, MySQL, Node.js, RESTful API, PostgreSQL) Tj",
    "0 -14 Td",
    "(- IoT & Hardware: ESP32, Arduino C++, Sensor Integrations, MQTT, WebSockets) Tj",
    "0 -14 Td",
    "(- Tools & Automation: n8n, Git, GitHub, Postman, Docker, Figma, Linux) Tj",

    "ET"
  ].join("\n");

  const streamLength = Buffer.byteLength(contentCommands);
  const contentObj = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    contentCommands,
    "endstream",
    "endobj"
  ].join("\n");

  const pdfBody = [...lines, contentObj].join("\n") + "\n";
  
  // Calculate xref offsets
  const objOffsets = [];
  let currentOffset = 0;
  const parts = pdfBody.split("\n");
  
  let accumulated = "";
  for (let i = 0; i < parts.length; i++) {
    const line = parts[i];
    const match = line.match(/^(\d+)\s+0\s+obj/);
    if (match) {
      const objNum = parseInt(match[1], 10);
      objOffsets[objNum] = Buffer.byteLength(accumulated, 'utf8');
    }
    accumulated += line + "\n";
  }

  const startxref = Buffer.byteLength(accumulated, 'utf8');
  let xref = "xref\n0 7\n0000000000 65535 f \n";
  for (let i = 1; i <= 6; i++) {
    const offset = String(objOffsets[i] || 0).padStart(10, '0');
    xref += `${offset} 00000 n \n`;
  }
  xref += `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  fs.writeFileSync(outputPath, accumulated + xref, 'binary');
  console.log("PDF created successfully at:", outputPath);
}

const target = path.join(__dirname, '../public/cv/CV_Daniel_Sinurat.pdf');
createPdf(target);
