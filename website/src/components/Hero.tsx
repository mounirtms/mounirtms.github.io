'use client';

import { useState, useEffect } from 'react';

type Locale = 'en' | 'fr' | 'ar';

const heroTranslations: Record<Locale, {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  cta1: string;
  cta2: string;
  cta3: string;
  stats: { modules: string; wilayas: string; centers: string; magento: string };
}> = {
  en: {
    badge: 'Trusted by Algerian E-commerce Businesses',
    title: 'Professional Magento 2 Extensions',
    subtitle: 'Built for the Algerian Market',
    description: "28 powerful modules designed specifically for Algerian e-commerce businesses. From Yalidine shipping integration to multi-source inventory management, we've got your store covered.",
    cta1: 'Explore Modules',
    cta2: 'View Pricing',
    cta3: 'GitHub',
    stats: { modules: 'Modules', wilayas: 'Wilayas', centers: 'Centers', magento: 'Magento' },
  },
  fr: {
    badge: 'Approuvé par les entreprises e-commerce algériennes',
    title: 'Extensions Magento 2 Professionnelles',
    subtitle: 'Conçues pour le Marché Algérien',
    description: "28 modules puissants conçus spécifiquement pour les entreprises e-commerce algériennes. De l'intégration Yalidine à la gestion multi-sources, nous couvrons tous vos besoins.",
    cta1: 'Explorer les Modules',
    cta2: 'Voir les Tarifs',
    cta3: 'GitHub',
    stats: { modules: 'Modules', wilayas: 'Wilayas', centers: 'Centres', magento: 'Magento' },
  },
  ar: {
    badge: 'موثوق به من قبل شركات التجارة الإلكترونية الجزائرية',
    title: 'امتدادات Magento 2 احترافية',
    subtitle: 'مصممة للسوق الجزائري',
    description: '28 وحدة قوية مصممة خصيصًا لشركات التجارة الإلكترونية الجزائرية. من تكامل ياليدين إلى إدارة المخزون متعدد المصادر.',
    cta1: 'استكشف الوحدات',
    cta2: 'عرض الأسعار',
    cta3: 'GitHub',
    stats: { modules: 'الوحدات', wilayas: 'الولايات', centers: 'المراكز', magento: 'Magento' },
  },
};

export default function Hero() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const handleLocaleChange = () => {
      const lang = document.documentElement.lang as Locale;
      if (['en', 'fr', 'ar'].includes(lang)) {
        setLocale(lang);
      }
    };

    const observer = new MutationObserver(handleLocaleChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'dir'] });
    handleLocaleChange();

    return () => observer.disconnect();
  }, []);

  const t = heroTranslations[locale];
  const isRTL = locale === 'ar';

  return (
    <section className={`hero ${isRTL ? 'rtl' : ''}`}>
      <div className="hero-bg-pattern"></div>
      <div className="hero-gradient-orb hero-gradient-orb-1"></div>
      <div className="hero-gradient-orb hero-gradient-orb-2"></div>
      <div className="container mx-auto px-4">
        <div className="hero-content">
          <div className="hero-badge">{t.badge}</div>
          <h1 className="hero-title">
            {t.title}
          </h1>
          <h2 className="hero-subtitle">{t.subtitle}</h2>
          <p className="hero-description">{t.description}</p>
          <div className="hero-buttons">
            <a href="#modules" className="btn btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              {t.cta1}
            </a>
            <a href="#pricing" className="btn btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              {t.cta2}
            </a>
            <a href="https://github.com/mounirtms" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.95.957.857-.238 1.767-.357 2.675-.36.91.003 1.816.122 2.675.36 1.942-1.279 2.946-.958 2.946-.958.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {t.cta3}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">32+</span>
              <span className="stat-label">{t.stats.modules}</span>
            </div>
            <div className="stat">
              <span className="stat-number">58</span>
              <span className="stat-label">{t.stats.wilayas}</span>
            </div>
            <div className="stat">
              <span className="stat-number">165+</span>
              <span className="stat-label">{t.stats.centers}</span>
            </div>
            <div className="stat">
              <span className="stat-number">AI</span>
              <span className="stat-label">Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
