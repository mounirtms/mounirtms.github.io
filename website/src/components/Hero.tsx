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
  stats: { modules: string; wilayas: string; centers: string; magento: string };
}> = {
  en: {
    badge: 'Trusted by Algerian E-commerce Businesses',
    title: 'Professional Magento 2 Extensions',
    subtitle: 'Built for the Algerian Market',
    description: "28 powerful modules designed specifically for Algerian e-commerce businesses. From Yalidine shipping integration to multi-source inventory management, we've got your store covered.",
    cta1: 'Explore Modules',
    cta2: 'View Pricing',
    stats: { modules: 'Modules', wilayas: 'Wilayas', centers: 'Centers', magento: 'Magento' },
  },
  fr: {
    badge: 'Approuvé par les entreprises e-commerce algériennes',
    title: 'Extensions Magento 2 Professionnelles',
    subtitle: 'Conçues pour le Marché Algérien',
    description: "28 modules puissants conçus spécifiquement pour les entreprises e-commerce algériennes. De l'intégration Yalidine à la gestion multi-sources, nous couvrons tous vos besoins.",
    cta1: 'Explorer les Modules',
    cta2: 'Voir les Tarifs',
    stats: { modules: 'Modules', wilayas: 'Wilayas', centers: 'Centres', magento: 'Magento' },
  },
  ar: {
    badge: 'موثوق به من قبل شركات التجارة الإلكترونية الجزائرية',
    title: 'امتدادات Magento 2 احترافية',
    subtitle: 'مصممة للسوق الجزائري',
    description: '28 وحدة قوية مصممة خصيصًا لشركات التجارة الإلكترونية الجزائرية. من تكامل ياليدين إلى إدارة المخزون متعدد المصادر.',
    cta1: 'استكشف الوحدات',
    cta2: 'عرض الأسعار',
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
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">29</span>
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
