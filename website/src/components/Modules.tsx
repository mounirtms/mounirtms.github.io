export default function Modules() {
  const modules = [
    {
      featured: true,
      badge: 'Most Popular',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      name: 'YalidineCarrier',
      version: 'v2.1.0',
      description: 'Complete Yalidine Express integration with 165+ centers, real-time rates, and multi-account support.',
      features: ['Home Delivery', 'Stop Desk', 'Source Pickup', 'COD Support', 'Webhooks', '58 Wilayas'],
      priceDZD: '25,000 DZD',
      priceUSD: '$199',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      name: 'SourceSelector',
      version: 'v2.1.0',
      description: 'Intelligent multi-source inventory with distance-based selection and real-time stock alerts.',
      features: ['Distance-based', 'Real-time Sync', 'Stock Alerts', 'Multi-warehouse'],
      priceDZD: '18,000 DZD',
      priceUSD: '$149',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      name: 'CheckoutCustomization',
      version: 'v2.1.0',
      description: 'Enhanced checkout with Algerian address validation and pickup-source mismatch detection.',
      features: ['Wilaya Validation', 'Distance Matrix', 'Mobile UI', 'French Locale'],
      priceDZD: '12,000 DZD',
      priceUSD: '$99',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      name: 'SocialLogin',
      version: 'v2.1.0',
      description: 'Firebase Authentication with Google and Facebook login for seamless customer onboarding.',
      features: ['Google Sign-In', 'Facebook Login', 'Firebase Auth', 'OAuth 2.0'],
      priceDZD: '10,000 DZD',
      priceUSD: '$79',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      name: 'Notifications',
      version: 'v2.1.0',
      description: 'Push notification system for abandoned cart recovery and customer engagement campaigns.',
      features: ['WebPush API', 'Cart Recovery', 'Campaigns', 'Analytics'],
      priceDZD: '12,000 DZD',
      priceUSD: '$99',
    },
  ];

  const systemComponents = [
    {
      name: 'MonitorBot',
      subtitle: 'Telegram Integration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
      version: 'v1.0.0',
      description: 'Telegram bot integration for real-time system monitoring, order tracking, and instant alerts to your phone.',
      features: ['Telegram Alerts', 'System Commands', 'Multi-group Support', 'Real-time Status'],
      priceDZD: '15,000 DZD',
      priceUSD: '$129',
    },
    {
      name: 'AI Reports',
      subtitle: 'Business Intelligence',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 2a10 10 0 0 1 10 10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      version: 'v1.0.0',
      description: 'AI-powered business intelligence engine generating automated analytics and predictive insights for your store.',
      features: ['GPT Analytics', 'Automated Insights', 'Natural Language Queries', 'Predictive Forecasting'],
      priceDZD: '20,000 DZD',
      priceUSD: '$169',
    },
    {
      name: 'PIM Connect',
      subtitle: 'Akeneo Integration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.5 12 17" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      version: 'v1.0.0',
      description: 'Advanced Akeneo PIM integration with real-time sync, data quality monitoring, and job orchestration.',
      features: ['Real-time Sync', 'Quality Monitoring', 'Job Orchestration', 'Multi-language'],
      priceDZD: '18,000 DZD',
      priceUSD: '$149',
    },
    {
      name: 'Alert System',
      subtitle: 'Monitoring & Capacity',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      version: 'v1.0.0',
      description: 'Comprehensive threshold monitoring for system resources, performance, and capacity planning with proactive alerts.',
      features: ['Resource Tracking', 'Performance Alerts', 'Capacity Planning', 'Auto Escalation'],
      priceDZD: '15,000 DZD',
      priceUSD: '$129',
    },
  ];

  return (
    <section id="modules" className="modules">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Our Products</span>
          <h2 className="section-title">Featured Modules & System Components</h2>
          <p className="section-subtitle">Explore our most popular extensions and enterprise system components for Algerian e-commerce</p>
        </div>

        <h3 className="category-title">Core E-Commerce Modules</h3>
        <div className="modules-grid">
          {modules.map((mod, index) => (
            <div key={index} className={`module-card ${mod.featured ? 'featured' : ''}`}>
              {mod.badge && <div className="module-badge">{mod.badge}</div>}
              <div className="module-header">
                <div className="module-icon">{mod.icon}</div>
                <div className="module-info">
                  <h3>{mod.name}</h3>
                  <span className="module-version">{mod.version}</span>
                </div>
              </div>
              <p className="module-description">{mod.description}</p>
              <div className="module-features">
                {mod.features.map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
              <div className="module-price">
                <span className="price-dzd">{mod.priceDZD}</span>
                <span className="price-usd">{mod.priceUSD}</span>
              </div>
              <div className="module-actions">
                <a href="https://github.com/mounirtms" className="btn btn-small" target="_blank" rel="noopener noreferrer">Learn More</a>
                <a href="https://github.com/mounirtms" className="btn btn-small btn-outline" target="_blank" rel="noopener noreferrer">Documentation</a>
              </div>
            </div>
          ))}
        </div>

        <h3 className="category-title" style={{ marginTop: '64px' }}>Enterprise System Components</h3>
        <div className="modules-grid">
          {systemComponents.map((mod, index) => (
            <div key={index} className="module-card system-component">
              <div className="module-badge new">New</div>
              <div className="module-header">
                <div className="module-icon">{mod.icon}</div>
                <div className="module-info">
                  <h3>{mod.name}</h3>
                  <span className="module-version">{mod.version}</span>
                  {mod.subtitle && <span className="module-subtitle">{mod.subtitle}</span>}
                </div>
              </div>
              <p className="module-description">{mod.description}</p>
              <div className="module-features">
                {mod.features.map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
              <div className="module-price">
                <span className="price-dzd">{mod.priceDZD}</span>
                <span className="price-usd">{mod.priceUSD}</span>
              </div>
              <div className="module-actions">
                <a href="#architecture" className="btn btn-small">Learn More</a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <a href="https://github.com/mounirtms" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All 32+ Components on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
