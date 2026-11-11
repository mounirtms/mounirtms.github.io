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
          "name": "Magento 2 Extensions & Shipping",
          "itemListElement": [
            {
              "@type": "Product",
              "name": "YalidineCarrier - Multi-Courier Shipping Integration",
              "description": "Multi-courier shipping integration covering Yalidine Express and Algerian carrier network with real-time rates, multi-account support, and 58 wilayas coverage for Magento 2",
              "url": "https://mab-modules.com/#modules"
            },
            {
              "@type": "Product",
              "name": "SourceSelector - Multi-source Inventory",
              "description": "Intelligent multi-source inventory with distance-based selection and real-time stock alerts for Magento 2",
              "url": "https://mab-modules.com/#modules"
            },
            {
              "@type": "Product",
              "name": "CheckoutCustomization - Enhanced Checkout",
              "description": "Enhanced checkout with Algerian address validation and pickup-source mismatch detection for Magento 2",
              "url": "https://mab-modules.com/#modules"
            },
            {
              "@type": "Product",
              "name": "SocialLogin - Firebase Authentication",
              "description": "Firebase Authentication with Google and Facebook login for seamless customer onboarding for Magento 2",
              "url": "https://mab-modules.com/#modules"
            },
            {
              "@type": "Product",
              "name": "Notifications - Push Notification System",
              "description": "Push notification system for abandoned cart recovery and customer engagement campaigns for Magento 2",
              "url": "https://mab-modules.com/#modules"
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Payment Services",
          "itemListElement": [
            {
              "@type": "Service",
              "name": "Online Payment Services",
              "description": "Secure online payment gateway integration for Algerian e-commerce stores. Support for local payment methods, credit cards, and digital wallets. Coming Soon.",
              "url": "https://mab-modules.com/#modules"
            },
            {
              "@type": "Service",
              "name": "Yassir Cash Integration",
              "description": "Yassir Cash payment integration for seamless cash-in and cash-out transactions across Algeria. Coming Soon.",
              "url": "https://yassir.com/algeria/yassir-cash/"
            },
            {
              "@type": "Service",
              "name": "Gifty.dz Gift Cards",
              "description": "Gifty.dz gift card integration for Algerian e-commerce. Sell and redeem digital gift cards across the Gifty partner network. Coming Soon.",
              "url": "https://gifty.dz/carte-gifty"
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
