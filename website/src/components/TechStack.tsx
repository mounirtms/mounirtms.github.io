'use client';

import { useState, useEffect } from 'react';
import BrandIcon from './BrandIcon';
import YalidineIcon from './icons/YalidineIcon';
import WebPushIcon from './icons/WebPushIcon';

type Locale = 'en' | 'fr' | 'ar';

const techTranslations: Record<Locale, {
  badge: string;
  title: string;
  subtitle: string;
  categories: {
    core: { title: string; desc: string };
    frontend: { title: string; desc: string };
    auth: { title: string; desc: string };
    search: { title: string; desc: string };
    shipping: { title: string; desc: string };
    dev: { title: string; desc: string };
  };
}> = {
  en: {
    badge: 'Technologies',
    title: 'Our Tech Stack',
    subtitle: 'Built with the best tools and technologies for enterprise-grade e-commerce',
    categories: {
      core: { title: 'Core Platform', desc: 'Built on industry-leading technologies' },
      frontend: { title: 'Frontend & UI', desc: 'Modern, responsive, and accessible' },
      auth: { title: 'Authentication & Social', desc: 'Seamless user experience' },
      search: { title: 'Search & Performance', desc: 'Lightning-fast search and delivery' },
      shipping: { title: 'Shipping & Logistics', desc: 'Algerian market integration' },
      dev: { title: 'Development & Deployment', desc: 'Professional tooling and workflow' },
    },
  },
  fr: {
    badge: 'Technologies',
    title: 'Notre Stack Technique',
    subtitle: 'Construit avec les meilleurs outils pour le e-commerce enterprise',
    categories: {
      core: { title: 'Plateforme Core', desc: 'Basé sur des technologies leaders' },
      frontend: { title: 'Frontend & UI', desc: 'Moderne, responsive et accessible' },
      auth: { title: 'Authentification & Social', desc: 'Expérience utilisateur fluide' },
      search: { title: 'Recherche & Performance', desc: 'Recherche ultra-rapide' },
      shipping: { title: 'Livraison & Logistique', desc: 'Intégration marché algérien' },
      dev: { title: 'Développement & Déploiement', desc: 'Outillage professionnel' },
    },
  },
  ar: {
    badge: 'التقنيات',
    title: 'مجموعة التقنيات',
    subtitle: 'مبني بأفضل الأدوات للتجارة الإلكترونية المتقدمة',
    categories: {
      core: { title: 'المنصة الأساسية', desc: 'مبني على تقنيات رائدة' },
      frontend: { title: 'الواجهة الأمامية', desc: 'عصرية ومتجاوبة' },
      auth: { title: 'المصادقة والتواصل', desc: 'تجربة مستخدم سلسة' },
      search: { title: 'البحث والأداء', desc: 'بحث فائق السرعة' },
      shipping: { title: 'الشحن واللوجستيات', desc: 'تكامل السوق الجزائري' },
      dev: { title: 'التطوير والنشر', desc: 'أدوات احترافية' },
    },
  },
};

export default function TechStack() {
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

  const t = techTranslations[locale];

  const techCategories = [
    {
      key: 'core',
      items: [
        { name: 'Magento 2', icon: <BrandIcon brand="magento" className="w-16 h-16" />, description: locale === 'fr' ? 'Plateforme E-commerce' : locale === 'ar' ? 'منصة التجارة' : 'E-commerce Platform' },
        { name: 'PHP 8.1+', icon: <BrandIcon brand="php" className="w-16 h-16" />, description: locale === 'fr' ? 'Language Backend' : locale === 'ar' ? 'لغة الخادم' : 'Backend Language' },
        { name: 'MySQL 8.0+', icon: <BrandIcon brand="mysql" className="w-16 h-16" />, description: locale === 'fr' ? 'Base de Données' : locale === 'ar' ? 'قاعدة البيانات' : 'Database' },
      ],
    },
    {
      key: 'frontend',
      items: [
        { name: 'Next.js 16', icon: <BrandIcon brand="next.js" className="w-16 h-16" />, description: locale === 'fr' ? 'Framework React' : locale === 'ar' ? 'إطار React' : 'React Framework' },
        { name: 'React 19', icon: <BrandIcon brand="react" className="w-16 h-16" />, description: locale === 'fr' ? 'Bibliothèque UI' : locale === 'ar' ? 'مكتبة الواجهة' : 'UI Library' },
        { name: 'TypeScript', icon: <BrandIcon brand="typescript" className="w-16 h-16" />, description: locale === 'fr' ? 'Sécurité de Type' : locale === 'ar' ? 'أمان الأنواع' : 'Type Safety' },
        { name: 'Tailwind CSS', icon: <BrandIcon brand="tailwindcss" className="w-16 h-16" />, description: locale === 'fr' ? 'CSS Utilitaire' : locale === 'ar' ? 'CSS أداتي' : 'Utility-first CSS' },
      ],
    },
    {
      key: 'auth',
      items: [
        { name: 'Firebase', icon: <BrandIcon brand="firebase" className="w-16 h-16" />, description: locale === 'fr' ? 'Backend as a Service' : locale === 'ar' ? 'الخادم كخدمة' : 'Backend as a Service' },
        { name: 'Google Sign-In', icon: <BrandIcon brand="google" className="w-16 h-16" />, description: locale === 'fr' ? 'Fournisseur OAuth' : locale === 'ar' ? 'مزود OAuth' : 'OAuth Provider' },
        { name: 'Facebook Login', icon: <BrandIcon brand="facebook" className="w-16 h-16" />, description: locale === 'fr' ? 'Auth Social' : locale === 'ar' ? 'مصادقة اجتماعية' : 'Social Auth' },
      ],
    },
    {
      key: 'search',
      items: [
        { name: 'Elasticsearch', icon: <BrandIcon brand="elastic" className="w-16 h-16" />, description: locale === 'fr' ? 'Moteur de Recherche' : locale === 'ar' ? 'محرك البحث' : 'Search Engine' },
        { name: 'Algolia', icon: <BrandIcon brand="algolia" className="w-16 h-16" />, description: locale === 'fr' ? 'Recherche as a Service' : locale === 'ar' ? 'البحث كخدمة' : 'Search as a Service' },
        { name: 'Cloudflare CDN', icon: <BrandIcon brand="cloudflare" className="w-16 h-16" />, description: locale === 'fr' ? 'Livraison de Contenu' : locale === 'ar' ? 'توصيل المحتوى' : 'Content Delivery' },
      ],
    },
    {
      key: 'shipping',
      items: [
        { name: 'Yalidine Express', icon: <YalidineIcon className="w-16 h-16" />, description: locale === 'fr' ? 'Partenaire Livraison' : locale === 'ar' ? 'شريك الشحن' : 'Shipping Partner' },
        { name: 'WebPush API', icon: <WebPushIcon className="w-16 h-16" />, description: locale === 'fr' ? 'Notifications Push' : locale === 'ar' ? 'إشعارات فورية' : 'Push Notifications' },
      ],
    },
    {
      key: 'dev',
      items: [
        { name: 'Git', icon: <BrandIcon brand="git" className="w-16 h-16" />, description: locale === 'fr' ? 'Contrôle de Version' : locale === 'ar' ? 'التحكم بالإصدارات' : 'Version Control' },
        { name: 'GitHub', icon: <BrandIcon brand="github" className="w-16 h-16" />, description: locale === 'fr' ? 'Dépôt de Code' : locale === 'ar' ? 'مستودع الكود' : 'Code Repository' },
        { name: 'Vercel', icon: <BrandIcon brand="vercel" className="w-16 h-16" />, description: locale === 'fr' ? 'Plateforme de Déploiement' : locale === 'ar' ? 'منصة النشر' : 'Deployment Platform' },
        { name: 'Node.js', icon: <BrandIcon brand="node.js" className="w-16 h-16" />, description: locale === 'fr' ? 'Environnement Runtime' : locale === 'ar' ? 'بيئة التشغيل' : 'Runtime Environment' },
      ],
    },
  ];

  const getCategoryConfig = (key: string) => t.categories[key as keyof typeof t.categories] || t.categories.core;

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {techCategories.map((category) => {
          const config = getCategoryConfig(category.key);
          return (
            <div key={category.key} className="tech-category">
              <h3 className="tech-category-title">{config.title}</h3>
              <p className="tech-category-subtitle">{config.desc}</p>
              <div className="tech-grid">
                {category.items.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-card">
                    <div className="tech-icon">{tech.icon}</div>
                    <h4 className="tech-name">{tech.name}</h4>
                    <p className="tech-description">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
