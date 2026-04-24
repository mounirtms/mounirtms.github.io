'use client';

import { useState } from 'react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'algeria' | 'international'>('algeria');

  return (
    <section id="pricing" className="pricing">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Flexible Pricing</span>
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">Choose the perfect package for your business</p>
        </div>

        <div className="pricing-tabs">
          <button
            className={`tab-btn ${activeTab === 'algeria' ? 'active' : ''}`}
            onClick={() => setActiveTab('algeria')}
          >
            <span className="tab-icon">🇩🇿</span>
            <span>Algerian Market (DZD)</span>
          </button>
          <button
            className={`tab-btn ${activeTab === 'international' ? 'active' : ''}`}
            onClick={() => setActiveTab('international')}
          >
            <span className="tab-icon">🌍</span>
            <span>International (USD)</span>
          </button>
        </div>

        {activeTab === 'algeria' && (
          <div className="pricing-content active">
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Starter</h3>
                <div className="price">25,000 - 60,000 DZD</div>
                <p className="price-subtitle">Perfect for small businesses</p>
                <ul className="pricing-features">
                  <li>1-3 modules</li>
                  <li>Basic configuration</li>
                  <li>Email support</li>
                  <li>6 months updates</li>
                  <li>French localization</li>
                </ul>
                <a href="#contact" className="btn btn-outline">Get Started</a>
              </div>

              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3>Professional</h3>
                <div className="price">80,000 - 150,000 DZD</div>
                <p className="price-subtitle">For growing businesses</p>
                <ul className="pricing-features">
                  <li>5-10 modules</li>
                  <li>Priority email + chat</li>
                  <li>Advanced configuration</li>
                  <li>12 months updates</li>
                  <li>Training session included</li>
                </ul>
                <a href="#contact" className="btn btn-primary">Get Started</a>
              </div>

              <div className="pricing-card">
                <h3>Enterprise</h3>
                <div className="price">200,000+ DZD</div>
                <p className="price-subtitle">For large operations</p>
                <ul className="pricing-features">
                  <li>Full suite (28 modules)</li>
                  <li>Priority phone support</li>
                  <li>Custom development</li>
                  <li>24 months updates</li>
                  <li>On-site training</li>
                  <li>Dedicated account manager</li>
                </ul>
                <a href="#contact" className="btn btn-outline">Contact Us</a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'international' && (
          <div className="pricing-content active">
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Community</h3>
                <div className="price">$79 - $199</div>
                <p className="price-subtitle">Per module license</p>
                <ul className="pricing-features">
                  <li>Single domain</li>
                  <li>Email support</li>
                  <li>12 months updates</li>
                  <li>Community forum</li>
                </ul>
                <a href="#contact" className="btn btn-outline">Purchase</a>
              </div>

              <div className="pricing-card popular">
                <div className="popular-badge">Best Value</div>
                <h3>Business</h3>
                <div className="price">$299 - $599</div>
                <p className="price-subtitle">5 modules bundle</p>
                <ul className="pricing-features">
                  <li>Up to 5 domains</li>
                  <li>Email + chat support</li>
                  <li>12 months updates</li>
                  <li>Priority bug fixes</li>
                </ul>
                <a href="#contact" className="btn btn-primary">Purchase</a>
              </div>

              <div className="pricing-card">
                <h3>Enterprise</h3>
                <div className="price">$999+</div>
                <p className="price-subtitle">Full suite license</p>
                <ul className="pricing-features">
                  <li>Unlimited domains</li>
                  <li>Priority support</li>
                  <li>24 months updates</li>
                  <li>Custom development</li>
                  <li>White-label options</li>
                </ul>
                <a href="#contact" className="btn btn-outline">Contact Us</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
