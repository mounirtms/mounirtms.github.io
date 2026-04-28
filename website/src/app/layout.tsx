import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAB Modules - Professional Magento 2 Extensions & E-commerce Solutions Algeria",
  description: "Leading Algerian e-commerce solutions provider. 28+ Magento 2 extensions, Yalidine shipping integration, Akeneo PIM, ETL pipelines, server deployment. Trusted by Algerian businesses for professional e-commerce development.",
  keywords: [
    // Primary Algerian market
    "Magento 2 Algeria",
    "e-commerce Algeria",
    "Yalidine integration",
    "Algerian shipping",
    "58 wilayas",
    "Yalidine Express",
    "COD Algeria",
    "Algerian e-commerce platform",
    "Magento developer Algeria",
    "e-commerce development Algeria",
    "Techno Stationery",
    "Mounir Abderrahmani",
    
    // Products & Services
    "Magento 2 extensions",
    "Magento modules",
    "Akeneo PIM",
    "PIM integration",
    "ETL pipeline",
    "data integration",
    "shipping integration",
    "multi-source inventory",
    "checkout customization",
    "social login",
    "push notifications",
    
    // Technical
    "Magento 2.4.x",
    "PHP development",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "Firebase hosting",
    "server deployment",
    "Linux server",
    "Nginx configuration",
    "performance optimization",
    
    // Services
    "e-commerce consulting",
    "server installation",
    "production deployment",
    "enterprise infrastructure",
    "Magento development",
    "system integration",
    "security audit",
    "performance audit",
    "training services",
    
    // Geographic
    "Algeria",
    "Algerian market",
    "North Africa",
    "MENA region",
    "DZ",
    "wilaya",
    
    // Industry terms
    "online store",
    "online shopping Algeria",
    "payment gateway",
    "inventory management",
    "order management",
    "customer management",
    "product catalog",
  ],
  authors: [{ name: "Mounir Abderrahmani" }, { name: "MAB Modules" }],
  creator: "MAB Modules",
  publisher: "Techno Stationery",
  icons: {
    icon: [
      { url: "/assets/mab-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/mab-icon.svg", type: "image/svg+xml" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mab-modules.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "fr-FR": "/fr",
      "ar-DZ": "/ar",
    },
  },
  openGraph: {
    title: "MAB Modules - Professional Magento 2 Extensions for Algeria",
    description: "28+ professional Magento 2 extensions and enterprise e-commerce solutions. Yalidine shipping, Akeneo PIM, ETL pipelines, server deployment services. Built specifically for the Algerian market.",
    url: "https://mab-modules.com",
    siteName: "MAB Modules",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAB Modules - Magento 2 Extensions for Algeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAB Modules - Professional Magento 2 Extensions",
    description: "Leading Algerian e-commerce solutions: Magento 2 extensions, Yalidine integration, Akeneo PIM, ETL pipelines, and professional services.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
