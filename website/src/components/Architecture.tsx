import Image from 'next/image';

export default function Architecture() {
  return (
    <section id="architecture" className="architecture">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">System Design</span>
          <h2 className="section-title">Platform Architecture</h2>
          <p className="section-subtitle">
            A comprehensive view of the MAB Modules ecosystem - scalable, modular, and integrated
          </p>
        </div>

        <div className="architecture-diagram">
          <div className="diagram-container">
            <Image
              src="/assets/flow.png"
              alt="MAB Modules Architecture - Complete system diagram showing environments, core systems, integrations, and deployment infrastructure"
              width={1600}
              height={900}
              priority
              className="diagram-image"
            />
          </div>
        </div>

        <div className="architecture-highlights">
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4>Multi-Environment</h4>
              <p>Development, staging, and production environments with Firebase hosting</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Security First</h4>
              <p>License validation, rate limiting, webhook security, and OAuth 2.0</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h4>Performance</h4>
              <p>CDN caching, Elasticsearch optimization, and database query optimization</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h4>Modular Design</h4>
              <p>28 independent modules that work together seamlessly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
