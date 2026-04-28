import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import TechStack from '@/components/TechStack';
import Architecture from '@/components/Architecture';
import EtlPipeline from '@/components/EtlPipeline';
import Pricing from '@/components/Pricing';
import ServicesPricing from '@/components/ServicesPricing';
import AkeneoPricing from '@/components/AkeneoPricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MAB Modules",
    "url": "https://mab-modules.com",
    "founder": {
      "@type": "Person",
      "name": "Mounir Abderrahmani"
    },
    "description": "Professional Magento 2 extensions and enterprise e-commerce solutions for the Algerian market",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DZ",
      "addressLocality": "Algeria"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["en", "fr", "ar"]
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MAB Modules - Professional Magento 2 Extensions for Algeria",
    "url": "https://mab-modules.com",
    "description": "28+ professional Magento 2 extensions and enterprise e-commerce solutions designed specifically for the Algerian market. Yalidine shipping, Akeneo PIM, ETL pipelines, and professional services.",
    "inLanguage": ["en", "fr", "ar"],
    "publisher": {
      "@type": "Organization",
      "name": "MAB Modules",
      "url": "https://mab-modules.com"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-commerce Development Services",
    "provider": {
      "@type": "Organization",
      "name": "MAB Modules",
      "url": "https://mab-modules.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Algeria"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-commerce Solutions",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Magento 2 Extensions",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "YalidineCarrier - Yalidine Express Integration",
              "description": "Complete Yalidine Express integration with 165+ centers, real-time rates, and multi-account support for Magento 2"
            },
            {
              "@type": "Product",
              "name": "SourceSelector - Multi-source Inventory",
              "description": "Intelligent multi-source inventory with distance-based Selection and real-time stock alerts"
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Professional Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Server Installation & Configuration",
              "description": "Complete server setup and deployment services for e-commerce platforms"
            },
            {
              "@type": "Service",
              "name": "Akeneo PIM Integration",
              "description": "Enterprise Product Information Management with Magento 2 integration"
            },
            {
              "@type": "Service",
              "name": "ETL Pipeline Development",
              "description": "Enterprise-grade data integration pipelines for e-commerce ecosystems"
            }
          ]
        }
      ]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MAB Modules - Magento Development Algeria",
    "image": "https://mab-modules.com/assets/og-image.jpg",
    "url": "https://mab-modules.com",
    "telephone": "",
    "email": "",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DZ",
      "addressRegion": "Algeria"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.7538,
      "longitude": 3.0588
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "currenciesAccepted": "DZD, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mab-modules.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Magento Extensions",
        "item": "https://mab-modules.com/#modules"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pricing",
        "item": "https://mab-modules.com/#pricing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Services",
        "item": "https://mab-modules.com/#services-pricing"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Modules />
        <TechStack />
        <Architecture />
        <EtlPipeline />
        <Pricing />
        <ServicesPricing />
        <AkeneoPricing />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
