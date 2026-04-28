export default function EtlPipeline() {
  const pipelines = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Product Data Integration",
      description: "Seamless product catalog synchronization between Akeneo PIM and Magento 2 with automated data transformation and validation.",
      features: ["Attribute mapping", "Media asset sync", "Category hierarchy", "Variant management"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "ERP & Order Management",
      description: "Bi-directional data flow between ERP systems and e-commerce platforms for orders, customers, and inventory management.",
      features: ["Order sync", "Customer data", "Stock levels", "Invoice generation"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Real-time Analytics Pipeline",
      description: "Automated data extraction from multiple sources into analytics dashboards for business intelligence and reporting.",
      features: ["Sales metrics", "Customer behavior", "Inventory reports", "Performance KPIs"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Customer Data Platform",
      description: "Unified customer profiles aggregated from multiple touchpoints for personalized marketing and improved customer experience.",
      features: ["Profile unification", "Segmentation", "Behavioral tracking", "Email campaigns"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Shipping & Logistics",
      description: "Automated shipping data synchronization with Yalidine Express and other Algerian carriers for real-time tracking and delivery updates.",
      features: ["Rate calculation", "Label generation", "Tracking updates", "Delivery webhooks"],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Data Quality & Validation",
      description: "Comprehensive data quality checks and validation rules to ensure data integrity across all integrated systems.",
      features: ["Schema validation", "Duplicate detection", "Data cleansing", "Audit trails"],
    },
  ];

  const technologies = [
    { name: "Akeneo PIM", icon: "📦" },
    { name: "Magento 2", icon: "🛒" },
    { name: "Apache Kafka", icon: "⚡" },
    { name: "Redis", icon: "💾" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Elasticsearch", icon: "🔍" },
    { name: "Firebase", icon: "🔥" },
    { name: "REST APIs", icon: "🔗" },
  ];

  return (
    <section id="etl" className="etl-pipeline">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Data Integration</span>
          <h2 className="section-title">ETL Pipeline Solutions</h2>
          <p className="section-subtitle">
            Enterprise-grade Extract, Transform, Load pipelines for seamless data integration across your e-commerce ecosystem
          </p>
        </div>

        <div className="etl-grid">
          {pipelines.map((pipeline, index) => (
            <div key={index} className="etl-card">
              <div className="etl-icon-wrapper">
                <div className="etl-icon">{pipeline.icon}</div>
              </div>
              <h3>{pipeline.title}</h3>
              <p>{pipeline.description}</p>
              <ul className="etl-features">
                {pipeline.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="etl-tech-stack">
          <h3>Supported Technologies</h3>
          <div className="etl-tech-icons">
            {technologies.map((tech, index) => (
              <div key={index} className="etl-tech-item">
                <span className="etl-tech-icon">{tech.icon}</span>
                <span className="etl-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
