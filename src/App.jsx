import React, { useState, useEffect } from 'react';
import {
  Target, Megaphone, Search, TrendingUp, Shield, ArrowRight,
  BarChart3, Zap, Globe, Menu, X, Mail, MapPin, Phone,
  Users, FileText, Palette, Layers
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
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('intelligence')} className="nav-link">Intelligence</button>
            <button onClick={() => scrollToSection('strategy')} className="nav-link">Strategy</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Start Your Campaign</button>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('services')} className="mobile-link">Services</button>
            <button onClick={() => scrollToSection('intelligence')} className="mobile-link">Intelligence</button>
            <button onClick={() => scrollToSection('strategy')} className="mobile-link">Strategy</button>
            <button onClick={() => scrollToSection('contact')} className="mobile-link primary">Start Your Campaign</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg-image">
          <img src="/hero-bg-new.png" alt="Digital Growth Background" />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge animate-fade-in">
              <span className="badge-dot"></span>
              AI-First Digital Evolution Agency
            </div>
            <h1 className="animate-fade-in delay-100">
              Architecting <br />
              <span className="gradient-text-primary">Intelligent Futures</span>
            </h1>
            <p className="animate-fade-in delay-200">
              We fuse neural networks with creative intuition. Voxsphere is a full-service AI marketing agency dedicated to scaling the world's most ambitious brands through predictive strategies and autonomous optimization.
            </p>
            <div className="hero-buttons animate-fade-in delay-300">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
                Initiate AI Campaign <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
              </button>
              <button onClick={() => scrollToSection('services')} className="btn btn-secondary">
                Explore Solutions
              </button>
            </div>
          </div>

          <div className="hero-visual animate-fade-in delay-300">
            <div className="ui-card glass-card">
              <div className="ui-header">
                <div className="ui-avatar">
                  <TrendingUp size={24} color="#7c3aed" />
                </div>
                <div className="ui-info">
                  <div className="ui-name">Neural Predictive Model</div>
                  <div className="ui-status">Live Algorithm Tracking</div>
                </div>
              </div>
              <div className="ui-wave">
                <div className="bar" style={{ height: '30px' }}></div>
                <div className="bar" style={{ height: '50px' }}></div>
                <div className="bar" style={{ height: '80px' }}></div>
                <div className="bar" style={{ height: '60px' }}></div>
                <div className="bar" style={{ height: '90px' }}></div>
              </div>
              <div className="ui-message">
                "AI projects 145% ROI uplift this quarter."
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="section-padding services">
        <div className="container">
          <div className="section-header">
            <h2>The AI Ecosystem</h2>
            <p>Comprehensive autonomous solutions designed to dominate the digital landscape.</p>
          </div>

          <div className="grid-3">
            <ServiceCard
              icon={<Target size={32} />}
              title="AI-Powered Strategy"
              description="Deep learning models that analyze market patterns to predict trends and drive measurable growth."
            />
            <ServiceCard
              icon={<Megaphone size={32} />}
              title="Algorithmic Ad Optimization"
              description="High-frequency bidding systems across search, social, and display networks optimized for maximum ROI."
            />
            <ServiceCard
              icon={<Search size={32} />}
              title="Cognitive Content Analysis"
              description="NLP-driven auditing and optimization of your digital footprint to ensure maximum resonance and impact."
            />
          </div>
        </div>
      </section>

      {/* Intelligence Section */}
      <section id="intelligence" className="section-padding tech-section">
        <div className="container">
          <div className="tech-layout">
            <div className="tech-info">
              <h2 className="gradient-text">Sentient Market Intelligence</h2>
              <p>
                We don't just guess; we compute. Voxsphere combines creative excellence with advanced machine learning to deliver superior results and predictable scaling.
              </p>

              <ul className="tech-list">
                <li>
                  <div className="check-icon"><BarChart3 size={16} /></div>
                  <span>Predictive Audience Modeling</span>
                </li>
                <li>
                  <div className="check-icon"><Layers size={16} /></div>
                  <span>Generative Cross-Channel Optimization</span>
                </li>
                <li>
                  <div className="check-icon"><Zap size={16} /></div>
                  <span>Real-time Neural Tracking</span>
                </li>
                <li>
                  <div className="check-icon"><Shield size={16} /></div>
                  <span>Automated Conversion Rate Optimization</span>
                </li>
              </ul>
            </div>

            <div className="tech-visual">
              <div className="glass-card tech-card">
                <div className="stat-row">
                  <span>Average ROI Increase</span>
                  <span className="stat-val">145%</span>
                </div>
                <div className="progress-bar"><div className="fill" style={{ width: '85%' }}></div></div>

                <div className="stat-row" style={{ marginTop: '1.5rem' }}>
                  <span>Customer Acquisition Cost Reduction</span>
                  <span className="stat-val">38%</span>
                </div>
                <div className="progress-bar"><div className="fill" style={{ width: '65%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Grid */}
      <section id="strategy" className="section-padding features-grid-sec">
        <div className="container">
          <div className="grid-4">
            <FeatureItem title="Algorithmic Targeting" icon={<Users />} text="Reaching your ideal audience with sub-millisecond precision." />
            <FeatureItem title="Generative Strategy" icon={<FileText />} text="Crafting narratives that convert using LLM-assisted frameworks." />
            <FeatureItem title="Semantic SEO" icon={<Globe />} text="Dominating search results through technical and cognitive mastery." />
            <FeatureItem title="Digital Identity" icon={<Palette />} text="Designing visual identities that resonate and endure in the AI era." />
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <div className="contact-wrapper glass-card">
            <div className="contact-info">
              <h2>Initiate Protocol</h2>
              <p>Partner with us to redefine your digital presence and scale your brand.</p>

              <div className="contact-details">
                <div className="c-item">
                  <Mail className="c-icon" />
                  <span>neural@voxsphere.ai</span>
                </div>
                <div className="c-item">
                  <Phone className="c-icon" />
                  <a href="tel:+18885554769" className="contact-link">+1 (888) 555-DATA</a>
                </div>
                <div className="c-item">
                  <MapPin className="c-icon" />
                  <span>Global HQ • Cloud Native</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Organization</label>
                <input type="text" placeholder="e.g. Acme Global" />
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="name@company.com" />
              </div>
              <div className="form-group">
                <label>Area of Interest</label>
                <select>
                  <option>Strategic Campaign</option>
                  <option>Performance Advertising</option>
                  <option>Content Audit & Strategy</option>
                  <option>Full-Service Marketing</option>
                </select>
              </div>
              <button className="btn btn-primary full-width">Request Consultation</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>VOXSPHERE</h3>
            <p>Pioneering the digital landscape of tomorrow.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Protocol</a>
            <a href="#">Terms of Service</a>
            <a href="#">Neural Net</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Voxsphere AI Marketing Agency. All rights reserved.
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
