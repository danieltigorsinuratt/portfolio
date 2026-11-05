import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://danielsinurat.dev"),
  title: "Daniel Sinurat | Web Developer & IoT Engineer",
  description:
    "Portfolio Web Developer Daniel Sinurat. Lulusan D-III Teknologi Informasi Universitas Brawijaya. Spesialis Laravel, React, Next.js, PHP, MySQL, ESP32, dan n8n.",
  keywords: [
    "Daniel Sinurat",
    "Web Developer",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Laravel",
    "Next.js",
    "React",
    "ESP32",
    "n8n Automation",
    "Universitas Brawijaya",
    "Dignify Studio",
  ],
  authors: [{ name: "Daniel Sinurat" }],
  openGraph: {
    title: "Daniel Sinurat - Web Developer & IoT Portfolio",
    description:
      "Crafting High-Performance, Scalable & Interactive Web Solutions with Laravel, React, Next.js, ESP32 & n8n.",
    url: "https://danielsinurat.dev",
    siteName: "Daniel Sinurat Portfolio",
    images: [
      {
        url: "/images/daniel3D.png",
        width: 1200,
        height: 630,
        alt: "Daniel Sinurat 3D Avatar",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Sinurat | Web Developer",
    description:
      "Portfolio Web Development Daniel Sinurat - Laravel, React, Next.js, ESP32, n8n.",
    images: ["/images/daniel3D.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Sinurat",
              jobTitle: "Web Developer",
              url: "https://danielsinurat.dev",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Universitas Brawijaya",
                department: "D-III Teknologi Informasi",
              },
              knowsAbout: [
                "Laravel",
                "React",
                "Next.js",
                "PHP",
                "MySQL",
                "ESP32",
                "n8n",
                "Web Development",
                "Internet of Things",
              ],
              sameAs: [
                "https://github.com/danielsinurat",
                "https://linkedin.com/in/danielsinurat",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-white selection:text-black [data-theme='light']_&:selection:bg-black [data-theme='light']_&:selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
