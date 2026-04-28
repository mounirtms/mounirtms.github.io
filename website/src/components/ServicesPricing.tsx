export default function ServicesPricing() {
  const services = [
    {
      name: "Server Setup",
      description: "Complete server installation and configuration for your e-commerce platform",
      features: [
        "Linux server setup (Ubuntu/CentOS)",
        "LAMP/LEMP stack installation",
        "PHP 8.x + MySQL/MariaDB",
        "Nginx/Apache configuration",
        "SSL certificate setup",
        "Basic security hardening",
        "Email notifications setup",
        "Performance baseline",
      ],
      priceDZD: "45,000 DZD",
      priceUSD: "$349",
      time: "2-3 days",
    },
    {
      featured: true,
      badge: "Most Popular",
      name: "Production Deployment",
      description: "Full production-ready deployment with optimization and monitoring",
      features: [
        "Everything in Server Setup",
        "Magento 2 / Akeneo installation",
        "Redis + Varnish configuration",
        "Elasticsearch setup",
        "CDN integration (CloudFlare)",
        "Automated backups",
        "Monitoring dashboard",
        "Load testing",
        "CI/CD pipeline",
        "Documentation",
      ],
      priceDZD: "120,000 DZD",
      priceUSD: "$899",
      time: "5-7 days",
    },
    {
      name: "Enterprise Infrastructure",
      description: "High-availability infrastructure with scaling and disaster recovery",
      features: [
        "Everything in Production",
        "Multi-server architecture",
        "Database clustering",
        "Load balancer setup",
        "Auto-scaling configuration",
        "Disaster recovery plan",
        "24/7 monitoring alerts",
        "Performance optimization",
        "Security audit",
        "30 days support",
      ],
      priceDZD: "250,000 DZD",
      priceUSD: "$1,899",
      time: "10-14 days",
    },
  ];

  const additionalServices = [
    {
      service: "Server Migration",
      description: "Migrate existing e-commerce to new infrastructure with zero downtime",
      priceDZD: "35,000 DZD",
      priceUSD: "$279",
    },
    {
      service: "Performance Optimization",
      description: "Deep optimization of existing server for maximum speed and reliability",
      priceDZD: "25,000 DZD",
      priceUSD: "$199",
    },
    {
      service: "Security Audit",
      description: "Comprehensive security assessment and hardening of your infrastructure",
      priceDZD: "30,000 DZD",
      priceUSD: "$239",
    },
    {
      service: "Monthly Maintenance",
      description: "Ongoing server maintenance, updates, and monitoring (per month)",
      priceDZD: "15,000 DZD/mo",
      priceUSD: "$119/mo",
    },
  ];

  return (
    <section id="services-pricing" className="services-pricing">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Professional Services</span>
          <h2 className="section-title">Server Installation & Configuration</h2>
          <p className="section-subtitle">
            Expert server setup and deployment services for your e-commerce infrastructure
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
              {service.badge && <div className="service-badge">{service.badge}</div>}
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-pricing">
                <span className="service-price-dzd">{service.priceDZD}</span>
                <span className="service-price-usd">{service.priceUSD}</span>
                <span className="service-time">Delivery: {service.time}</span>
              </div>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${service.featured ? 'btn-primary' : 'btn-outline'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="additional-services">
          <h3>Additional Services</h3>
          <div className="additional-grid">
            {additionalServices.map((item, index) => (
              <div key={index} className="additional-card">
                <div className="additional-header">
                  <h4>{item.service}</h4>
                  <div className="additional-prices">
                    <span className="additional-price-dzd">{item.priceDZD}</span>
                    <span className="additional-price-usd">{item.priceUSD}</span>
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
