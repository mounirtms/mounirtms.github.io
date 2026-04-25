import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import TechStack from '@/components/TechStack';
import Architecture from '@/components/Architecture';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MAB Modules",
    "url": "https://mab-modules.com",
    "founder": {
      "@type": "Person",
      "name": "Mounir Abderrahmani"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Features />
        <Modules />
        <TechStack />
        <Architecture />
        <Pricing />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
