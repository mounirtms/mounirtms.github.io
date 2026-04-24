export default function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: 'Yalidine Integration',
      description: 'Real-time shipping with 165+ centers across all 58 Algerian wilayas. Home delivery, stop desk, and pickup options.',
      items: ['165+ delivery centers', 'Real-time rate calculation', 'Cash on delivery support', 'Webhook tracking'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Multi-Source Inventory',
      description: 'Intelligent warehouse management with distance-based source selection and real-time stock tracking.',
      items: ['Distance-based fulfillment', 'Real-time synchronization', 'Stock alerts', 'Dealer contact prompts'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      title: 'Enhanced Checkout',
      description: 'Algerian address validation, pickup-source mismatch detection, modern UI/UX with mobile optimization.',
      items: ['Wilaya/commune selection', 'Distance matrix validation', 'Mobile responsive', 'French localization'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: 'Social Login',
      description: 'Firebase-powered social login with Google and Facebook. Seamless checkout success page integration.',
      items: ['Google Sign-In', 'Facebook Login', 'Firebase Authentication', 'Secure OAuth 2.0'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      title: 'Push Notifications',
      description: 'WebPush API integration for abandoned cart recovery, order updates, and promotional campaigns.',
      items: ['Browser push notifications', 'Abandoned cart recovery', 'Campaign management', 'Analytics dashboard'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'Performance',
      description: 'Intelligent caching, CDN integration, and database optimization for sub-second page loads.',
      items: ['Smart caching', 'Cloudflare CDN', 'Elasticsearch optimization', 'Query optimization'],
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">Enterprise-grade solutions built for the Algerian market</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="feature-list">
                {feature.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
