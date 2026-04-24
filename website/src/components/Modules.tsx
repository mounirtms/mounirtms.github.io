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

  return (
    <section id="modules" className="modules">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Our Products</span>
          <h2 className="section-title">Featured Modules</h2>
          <p className="section-subtitle">Explore our most popular extensions for Algerian e-commerce</p>
        </div>

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

        <div className="view-all">
          <a href="https://github.com/mounirtms" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View All 28 Modules on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
