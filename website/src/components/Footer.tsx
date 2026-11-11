import MABLogo from './icons/MABLogo';
import MABSignature from './icons/MABSignature';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <div className="logo-icon">
                <MABLogo className="w-10 h-10" />
              </div>
              <span>MAB Modules</span>
            </div>
            <p>Professional Magento 2 Extensions for the Algerian Market</p>
            <div className="footer-signature">
              <MABSignature className="w-40 h-12" />
            </div>
            <div className="social-links">
              <a href="mailto:mounir.webdev@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#modules">Modules</a></li>
              <li><a href="#tech-stack">Tech Stack</a></li>
              <li><a href="#architecture">Architecture</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
            <div className="footer-section">
              <h4>Documentation</h4>
              <ul>
                <li><a href="/MAB_MODULES_COMPREHENSIVE_REPORT.md" target="_blank" rel="noopener noreferrer">Comprehensive Report</a></li>
                <li><a href="/WEBSITE_CONTENT_GUIDE.md" target="_blank" rel="noopener noreferrer">Content Guide</a></li>
              </ul>
            </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Techno Stationery. Built with excellence by Mounir Abderrahmani. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
