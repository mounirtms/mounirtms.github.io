export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MAB Modules",
  "url": "https://mab-modules.com",
  "logo": "https://mab-modules.com/assets/logo.png",
  "description": "Professional Magento 2 extensions designed for the Algerian e-commerce market",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DZ",
    "addressRegion": "Algeria"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "French", "Arabic"]
  },
  "sameAs": [
    "https://github.com/mounirtms/mab-modules"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "MAB Modules",
  "url": "https://mab-modules.com",
  "description": "28 professional Magento 2 extensions designed for the Algerian e-commerce market",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://mab-modules.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "YalidineCarrier",
  "description": "Complete Yalidine Express integration with 165+ centers, real-time rates, and multi-account support",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Magento 2",
  "offers": {
    "@type": "Offer",
    "price": "25000",
    "priceCurrency": "DZD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "25"
  }
};
