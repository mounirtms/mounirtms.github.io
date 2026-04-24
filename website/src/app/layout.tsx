import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAB Modules - Professional Magento 2 Extensions for Algeria",
  description: "28 professional Magento 2 extensions designed for the Algerian e-commerce market. Yalidine shipping, multi-source inventory, enhanced checkout, social login, and push notifications.",
  keywords: ["Magento 2", "Algeria", "E-commerce", "Yalidine", "Shipping", "Extensions", "Modules", "MSI", "Checkout", "Firebase", "Social Login"],
  authors: [{ name: "Mounir Abderrahmani" }],
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
    title: "MAB Modules - Professional Magento 2 Extensions",
    description: "28 professional Magento 2 extensions designed for the Algerian e-commerce market. From Yalidine shipping integration to multi-source inventory management.",
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
    description: "28 professional Magento 2 extensions designed for the Algerian e-commerce market.",
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
