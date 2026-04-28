export default function AkeneoPricing() {
  const akeneoPackages = [
    {
      name: "Akeneo Community",
      description: "Open-source PIM for small to medium businesses",
      features: [
        "Akeneo Community Edition",
        "Basic product catalog",
        "Attribute management",
        "Category structure",
        "Media asset manager",
        "Basic user permissions",
        "Email support",
        "Installation guide",
      ],
      priceDZD: "80,000 DZD",
      priceUSD: "$599",
      time: "3-5 days",
    },
    {
      featured: true,
      badge: "Recommended",
      name: "Akeneo Enterprise",
      description: "Full-featured PIM with advanced capabilities and Magento integration",
      features: [
        "Akeneo Enterprise Edition",
        "Advanced catalog management",
        "Product modeling & variants",
        "Enrichment workflows",
        "Translation management",
        "Advanced permissions",
        "Magento 2 connector",
        "ETL pipeline setup",
        "Data quality dashboard",
        "Training session",
        "Priority support",
      ],
      priceDZD: "200,000 DZD",
      priceUSD: "$1,499",
      time: "7-10 days",
    },
    {
      name: "Custom PIM Solution",
      description: "Tailored PIM solution with custom development and integrations",
      features: [
        "Custom PIM architecture",
        "Multiple system integrations",
        "Custom workflows",
        "API development",
        "Data migration",
        "Advanced automation",
        "Custom reporting",
        "On-site training",
        "3 months support",
        "Performance optimization",
      ],
      priceDZD: "350,000+ DZD",
      priceUSD: "$2,499+",
      time: "14-21 days",
    },
  ];

  const professionalServices = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      ),
      name: "Magento 2 Development",
      description: "Custom module development, theme customization, and platform optimization",
      priceStart: "From 30,000 DZD ($239)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      name: "System Integration",
      description: "ERP, CRM, shipping carriers, payment gateways, and third-party APIs",
      priceStart: "From 50,000 DZD ($389)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      name: "Performance Audit",
      description: "Complete performance analysis with actionable optimization recommendations",
      priceStart: "From 25,000 DZD ($199)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      name: "Security Hardening",
      description: "Comprehensive security audit, penetration testing, and vulnerability fixes",
      priceStart: "From 40,000 DZD ($319)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      name: "Training & Consulting",
      description: "On-site or remote training sessions for your team on Magento and Akeneo",
      priceStart: "From 15,000 DZD/session ($119)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      name: "Ongoing Support",
      description: "Monthly support packages with priority assistance and maintenance",
      priceStart: "From 20,000 DZD/month ($159)",
    },
  ];

  return (
    <section id="akeneo-pricing" className="akeneo-pricing">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">PIM Solutions</span>
          <h2 className="section-title">Akeneo PIM & Professional Services</h2>
          <p className="section-subtitle">
            Enterprise Product Information Management with expert consulting and integration services
          </p>
        </div>

        <div className="akeneo-packages-title">
          <h3>Akeneo PIM Packages</h3>
        </div>

        <div className="akeneo-grid">
          {akeneoPackages.map((pkg, index) => (
            <div key={index} className={`akeneo-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.badge && <div className="akeneo-badge">{pkg.badge}</div>}
              <h4>{pkg.name}</h4>
              <p className="akeneo-description">{pkg.description}</p>
              <div className="akeneo-pricing">
                <span className="akeneo-price-dzd">{pkg.priceDZD}</span>
                <span className="akeneo-price-usd">{pkg.priceUSD}</span>
                <span className="akeneo-time">Delivery: {pkg.time}</span>
              </div>
              <ul className="akeneo-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="professional-services">
          <h3>Professional Services</h3>
          <div className="services-cards-grid">
            {professionalServices.map((service, index) => (
              <div key={index} className="professional-card">
                <div className="professional-icon">{service.icon}</div>
                <h4>{service.name}</h4>
                <p>{service.description}</p>
                <span className="professional-price">{service.priceStart}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
