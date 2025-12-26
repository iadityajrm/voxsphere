import React, { useState, useEffect } from 'react';
import {
  Phone, Globe, Cpu, Activity, Shield, ArrowRight,
  Bot, Zap, Mic, Menu, X, Mail, MapPin, Smartphone
} from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app">
      <div className="bg-grid"></div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-circle"></div>
            </div>
            <span>VOXSPHERE</span>
          </div>

          <div className="desktop-nav">
            <button onClick={() => scrollToSection('services')} className="nav-link">Capabilities</button>
            <button onClick={() => scrollToSection('technology')} className="nav-link">Intelligence</button>
            <button onClick={() => scrollToSection('features')} className="nav-link">Infrastructure</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Partner With Us</button>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('services')} className="mobile-link">Capabilities</button>
            <button onClick={() => scrollToSection('technology')} className="mobile-link">Intelligence</button>
            <button onClick={() => scrollToSection('features')} className="mobile-link">Infrastructure</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-link primary">Partner With Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-image">
          {/* Using the generated image */}
          <img src="/hero-bg.png" alt="Neural Network Background" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge animate-fade-in">
              <span className="badge-dot"></span>
              Enterprise-Grade Communications
            </div>
            <h1 className="animate-fade-in delay-100">
              Architecting the <br />
              <span className="gradient-text-primary">Voice of Tomorrow</span>
            </h1>
            <p className="animate-fade-in delay-200">
              Orchestrating the convergence of human intuition and artificial intelligence.
              VoxSphere engineers bespoke IVR and Concierge architectures for the world's most discerning enterprises.
            </p>
            <div className="hero-buttons animate-fade-in delay-300">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Schedule Briefing <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
              <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
                View Capabilities
              </button>
            </div>
          </div>

          <div className="hero-visual animate-fade-in delay-300">
            {/* Abstract UI representation */}
            <div className="ui-card glass-card">
              <div className="ui-header">
                <div className="ui-avatar">
                  <Bot size={24} color="#7c3aed" />
                </div>
                <div className="ui-info">
                  <div className="ui-name">VoxSphere Prime</div>
                  <div className="ui-status">System Operational • Awaiting Input</div>
                </div>
              </div>
              <div className="ui-wave">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="ui-message">
                "Good morning. Connecting you to the executive suite."
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="section-padding services">
        <div className="container">
          <div className="section-header">
            <h2>The Ecosystem</h2>
            <p>From refined legacy frameworks to avant-garde AI integration.</p>
          </div>

          <div className="grid-3">
            <ServiceCard
              icon={<Phone size={32} />}
              title="Intelligent Routing"
              description="Sophisticated logic pathways that virtually eliminate friction and optimize client direction."
            />
            <ServiceCard
              icon={<Bot size={32} />}
              title="Cognitive Concierge"
              description="Empowered by Natural Language Processing to discern intent with human-like precision."
            />
            <ServiceCard
              icon={<Activity size={32} />}
              title="Virtual Receptionist"
              description="Uninterrupted 24/7 presence managing bookings and inquiries with absolute professionalism."
            />
          </div>
        </div>
      </section>

      {/* Technology / Features */}
      <section id="technology" className="section-padding tech-section">
        <div className="container">
          <div className="tech-layout">
            <div className="tech-info">
              <h2 className="gradient-text">Symbiotic Intelligence</h2>
              <p>
                We do not merely upgrade systems; we elevate them. VoxSphere fuses the reliability of
                foundational telephony with the adaptive brilliance of Generative AI.
              </p>

              <ul className="tech-list">
                <li>
                  <div className="check-icon"><Zap size={16} /></div>
                  <span>Instantaneous Intent Recognition</span>
                </li>
                <li>
                  <div className="check-icon"><Globe size={16} /></div>
                  <span>Polyglot Fluency (80+ Dials)</span>
                </li>
                <li>
                  <div className="check-icon"><Cpu size={16} /></div>
                  <span>Real-time Sentiment Calibration</span>
                </li>
                <li>
                  <div className="check-icon"><Shield size={16} /></div>
                  <span>SOC2 Type II Compliant Security</span>
                </li>
              </ul>
            </div>

            <div className="tech-visual">
              <div className="glass-card tech-card">
                <div className="stat-row">
                  <span>Resolution Efficiency</span>
                  <span className="stat-val">98.4%</span>
                </div>
                <div className="progress-bar"><div className="fill" style={{ width: '98.4%' }}></div></div>

                <div className="stat-row" style={{ marginTop: '1.5rem' }}>
                  <span>Operational Savings</span>
                  <span className="stat-val">72%</span>
                </div>
                <div className="progress-bar"><div className="fill" style={{ width: '72%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section-padding features-grid-sec">
        <div className="container">
          <div className="grid-4">
            <FeatureItem title="Precision Routing" icon={<MapPin />} text="Geolocation and data-driven endpoint logic." />
            <FeatureItem title="Acoustic Biometrics" icon={<Mic />} text="Military-grade identity verification via voiceprint." />
            <FeatureItem title="CRM Synchronization" icon={<Activity />} text="Deep integration with Salesforce & enterprise ERPs." />
            <FeatureItem title="Unified Omnichannel" icon={<Globe />} text="A singular interface for Voice, SMS, and Data." />
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="contact-wrapper glass-card">
            <div className="contact-info">
              <h2>Initiate Dialogue</h2>
              <p>Secure your place at the forefront of the acoustic revolution.</p>

              <div className="contact-details">
                <div className="c-item">
                  <Mail className="c-icon" />
                  <span>concierge@voxsphere.tech</span>
                </div>
                <div className="c-item">
                  <Phone className="c-icon" />
                  <span>+1 (888) 909-VOX-AI</span>
                </div>
                <div className="c-item">
                  <Smartphone className="c-icon" />
                  <span>Text 'ELITE' to 55022</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" placeholder="e.g. Acme Global Holdings" />
              </div>
              <div className="form-group">
                <label>Executive Email</label>
                <input type="email" placeholder="name@corporation.com" />
              </div>
              <div className="form-group">
                <label>Area of Interest</label>
                <select>
                  <option>Cognitive Call Concierge</option>
                  <option>Enterprise IVR Architecture</option>
                  <option>Full Ecosystem Suite</option>
                </select>
              </div>
              <button className="btn btn-primary full-width">Request Private Consultation</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>VOXSPHERE</h3>
            <p>Pioneering the acoustic interface of tomorrow.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 VoxSphere Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Sub-components
function ServiceCard({ icon, title, description }) {
  return (
    <div className="glass-card service-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FeatureItem({ title, icon, text }) {
  return (
    <div className="feature-item">
      <div className="f-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default App;
