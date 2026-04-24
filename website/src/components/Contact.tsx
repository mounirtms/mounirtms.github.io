'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    modules: [] as string[],
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Here you would integrate with Firebase or your backend
      // For now, simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: "Message sent successfully! We'll get back to you soon." });
      setFormData({ name: '', email: '', company: '', modules: [], message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Let&apos;s Talk</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Ready to transform your Algerian e-commerce store?</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <strong>Mounir Abderrahmani</strong>
                <p>Senior Full Stack Developer & Magento Certified Expert</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <strong>Email:</strong>
                <a href="mailto:mounir.webdev@gmail.com">mounir.webdev@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <strong>Portfolio:</strong>
                <a href="https://mounir1.github.io" target="_blank" rel="noopener noreferrer">mounir1.github.io</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <strong>GitHub:</strong>
                <a href="https://github.com/mounirtms" target="_blank" rel="noopener noreferrer">github.com/mounirtms</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <strong>Support Hours:</strong>
                <p>Sunday - Thursday: 9:00 AM - 6:00 PM (Algeria Time)</p>
                <p>Email support: 24/7</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  suppressHydrationWarning
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="modules">Modules Interested In</label>
                <select
                  id="contact-modules"
                  name="modules"
                  multiple
                  value={formData.modules}
                  onChange={(e) => {
                    const options = Array.from(e.target.selectedOptions, option => option.value);
                    setFormData({ ...formData, modules: options });
                  }}
                >
                  <option value="YalidineCarrier">YalidineCarrier</option>
                  <option value="SourceSelector">SourceSelector</option>
                  <option value="CheckoutCustomization">CheckoutCustomization</option>
                  <option value="SocialLogin">SocialLogin</option>
                  <option value="Notifications">Notifications</option>
                  <option value="Full Suite">Full Suite</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              {status && (
                <div className={`form-status ${status.type}`} style={{ display: 'block' }}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
