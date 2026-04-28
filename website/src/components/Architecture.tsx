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
              <p>32+ components including enterprise system integrations</p>
            </div>
          </div>
        </div>

        <div className="enterprise-features">
          <h3 className="enterprise-title">Enterprise System Components</h3>
          <p className="enterprise-subtitle">Next-generation business intelligence and monitoring for Algerian enterprises</p>
          <div className="enterprise-grid">
            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>MonitorBot (Telegram Integration)</h4>
              <p>Real-time system alerts and notifications delivered to your Telegram groups. Monitor orders, shipping, PIM sync, and system health from your phone.</p>
              <ul className="enterprise-list">
                <li>Real-time alerts & notifications</li>
                <li>Order status & shipping tracking</li>
                <li>PIM sync status reports</li>
                <li>Commands: /status, /alerts, /reports, /pim</li>
              </ul>
            </div>

            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>AI Reports (Business Intelligence)</h4>
              <p>Automated business intelligence powered by AI. Get sales analytics, inventory optimization recommendations, and predictive demand forecasting.</p>
              <ul className="enterprise-list">
                <li>Automated BI reports</li>
                <li>Sales analytics with AI insights</li>
                <li>Customer behavior analysis</li>
                <li>Predictive demand forecasting</li>
              </ul>
            </div>

            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                  <polyline points="7.5 19.79 7.5 14.5 12 17" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>PIM Connect (Akeneo Integration)</h4>
              <p>Advanced product information management with real-time PIM sync, data quality scoring, attribute coverage tracking, and multi-language catalog management.</p>
              <ul className="enterprise-list">
                <li>Real-time PIM sync status</li>
                <li>Data quality scoring</li>
                <li>Import/export job monitoring</li>
                <li>Multi-language catalog support</li>
              </ul>
            </div>

            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>Alert System (Monitoring & Capacity)</h4>
              <p>Proactive monitoring and alerting for system capacity, performance bottlenecks, API rate limits, and resource planning. Know before issues impact customers.</p>
              <ul className="enterprise-list">
                <li>Resource capacity warnings</li>
                <li>Database performance alerts</li>
                <li>API rate limit monitoring</li>
                <li>Automated escalation workflows</li>
              </ul>
            </div>

            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>Monitoring Dashboard</h4>
              <p>Comprehensive real-time system health monitoring with CPU, memory, disk utilization, database performance, and API response time tracking.</p>
              <ul className="enterprise-list">
                <li>Real-time system health metrics</li>
                <li>CPU, memory, disk tracking</li>
                <li>Database performance analytics</li>
                <li>Custom threshold alerts</li>
              </ul>
            </div>

            <div className="enterprise-card">
              <div className="enterprise-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  <path d="M16 8h-4a4 4 0 1 0 0 8h4" />
                </svg>
              </div>
              <div className="enterprise-badge">New</div>
              <h4>Enterprise Resilience</h4>
              <p>Circuit breaker patterns, exponential backoff retry logic, graceful degradation, and multi-layer caching for maximum uptime and reliability.</p>
              <ul className="enterprise-list">
                <li>Circuit breaker patterns</li>
                <li>Exponential backoff retry</li>
                <li>Multi-layer caching (Redis, Varnish)</li>
                <li>Automated failover mechanisms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
