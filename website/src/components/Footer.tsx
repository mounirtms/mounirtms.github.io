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
              <a href="https://github.com/mounirtms" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 2.95.957.857-.238 1.767-.357 2.675-.36.91.003 1.816.122 2.675.36 1.942-1.279 2.946-.958 2.946-.958.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://mounir1.github.io" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
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
              <li><a href="https://github.com/mounirtms" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
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
