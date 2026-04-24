export default function About() {
  return (
    <section id="about" className="about">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <span className="section-badge">Our Story</span>
          <h2 className="section-title">About MAB Modules</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>MAB Modules was born from real-world experience building e-commerce solutions for the Algerian market. After facing the challenges of integrating local shipping providers, managing multi-location inventory, and creating culturally-relevant checkout experiences, we decided to build a comprehensive solution.</p>

            <h3>Our Mission</h3>
            <p>To provide professional, affordable, and culturally-appropriate e-commerce extensions for Algerian businesses looking to compete in the digital economy.</p>

            <h3>Our Values</h3>
            <ul className="values-list">
              <li><strong>Quality First:</strong> Enterprise-grade code with professional documentation</li>
              <li><strong>Local Focus:</strong> Built specifically for Algerian market needs</li>
              <li><strong>Affordable:</strong> Competitive pricing for businesses of all sizes</li>
              <li><strong>Support:</strong> Dedicated assistance in French and Arabic</li>
              <li><strong>Innovation:</strong> Continuous improvement based on real feedback</li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-number">38+</div>
              <div className="stat-label">Development Sessions</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">28</div>
              <div className="stat-label">Professional Modules</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">Code Files</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Algerian Market Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
