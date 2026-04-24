'use client';

import { useState, useEffect } from 'react';
import MABLogo from './icons/MABLogo';

type Locale = 'en' | 'fr' | 'ar';

interface LocaleConfig {
  code: Locale;
  label: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

const locales: LocaleConfig[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇩🇿', dir: 'rtl' },
];

const navTranslations: Record<Locale, Record<string, string>> = {
  en: {
    features: 'Features',
    modules: 'Modules',
    techStack: 'Tech Stack',
    architecture: 'Architecture',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
  },
  fr: {
    features: 'Fonctionnalités',
    modules: 'Modules',
    techStack: 'Technologies',
    architecture: 'Architecture',
    pricing: 'Tarifs',
    about: 'À Propos',
    contact: 'Contact',
  },
  ar: {
    features: 'المميزات',
    modules: 'الوحدات',
    techStack: 'التقنيات',
    architecture: 'البنية',
    pricing: 'الأسعار',
    about: 'حول',
    contact: 'اتصل بنا',
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>('en');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loc = locales.find((l) => l.code === locale);
    const rtl = loc?.dir === 'rtl';
    
    if (rtl) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const t = navTranslations[locale];
  const isRTL = locale === 'ar';

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isRTL ? 'rtl' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="nav-brand">
          <div className="logo-icon">
            <MABLogo className="w-10 h-10" />
          </div>
          <span className="brand-text">MAB Modules</span>
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>{t.features}</a></li>
          <li><a href="#modules" onClick={() => setMobileMenuOpen(false)}>{t.modules}</a></li>
          <li><a href="#tech-stack" onClick={() => setMobileMenuOpen(false)}>{t.techStack}</a></li>
          <li><a href="#architecture" onClick={() => setMobileMenuOpen(false)}>{t.architecture}</a></li>
          <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>{t.pricing}</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.about}</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a></li>
        </ul>

        <div className="nav-actions">
          <div className="lang-switcher">
            {locales.map((loc) => (
              <button
                key={loc.code}
                className={`lang-btn ${locale === loc.code ? 'active' : ''}`}
                title={loc.label === 'EN' ? 'English' : loc.label === 'FR' ? 'Français' : 'العربية'}
                onClick={() => handleLocaleChange(loc.code)}
              >
                <span className="lang-flag">{loc.flag}</span>
                <span className="lang-label">{loc.label}</span>
              </button>
            ))}
          </div>
          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
