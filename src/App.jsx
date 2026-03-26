import './App.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)

  return (
    <div className={isLightTheme ? 'app theme-light' : 'app'}>
      <header className="topbar">
        <nav className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-icon">&lt;/&gt;</span>
            <span className="brand-text">The Kinetic Architect</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            type="button"
          >
            {menuOpen ? 'Cerrar' : 'Menú'}
          </button>

          <div className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Profile</NavLink>
            <NavLink to="/projects" className="nav-link" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience</NavLink>
            <Link to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get in Touch</Link>
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => setIsLightTheme((prev) => !prev)}
            >
              {isLightTheme ? 'Modo oscuro' : 'Modo claro'}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="chip">Full Stack Developer</p>
            <h1 className="hero-title">
              Alex <span>Dev</span>
            </h1>
            <p className="hero-subtitle">
              Passionate about building scalable web applications and exploring new technologies.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="icon-box" aria-label="Ir a proyectos">Code</Link>
              <Link to="/about" className="icon-box" aria-label="Ir a perfil">Profile</Link>
              <Link to="/resume" className="btn btn-primary">View Resume</Link>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbrOsBlY59zRkZN5clESA-MCzUWDSYcuoefAckeKmMU1P2tdYO-5jqKoetMvCi8vZVSdNgZJPFbvXFokP7jF66zSotb-Kk03xMlJAkgY734npSXx_MGMYAshiRNHOmLC-7fZfjwZC3ql5o8QwvBLdLHmDscw3gbFYvdMzuTeAlvnUNMInm4JU56ADWXZtAjQCXJFNaoxE2ZaoY8rKhDxqpcnQJ9kqhhkHPQLd4m83NMQztQxfXqU7NVkIkF1WuzT9E8ob-yyfpb4-b"
              alt="Portrait"
              className="hero-image"
            />
          </div>
        </section>

        <section className="skills-section">
          <div className="section-head">
            <h2>Core Expertise</h2>
            <p>Stack moderno para construir productos rápidos, accesibles y escalables.</p>
          </div>
          <div className="skill-list">
            {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Kubernetes'].map((skill) => (
              <span className="skill-item" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <div className="section-head">
            <h2>Selected Projects</h2>
          </div>

          <div className="project-grid">
            <Link to="/projects" className="project-card project-card-wide">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvAbUi3QGspXGsg0apVmttPDL8wB-orSF36cMxbqjq4zqX7cwd0f9b8tPWBrXxuyUbSKvZWOnjwjWP-VSOD0CnIR6h1AV_qGDTVpbrB-bhQH1hfakHfSM5xpeIIDm4xNCUiTYDlxGg9IXRam7rPCRNVvB2ryndEsOhI0JmGIduhxpKsZOEZTv_-bc8iro0h9ph5ke7nwly9CHnSR7RWL6chtL1i6_1jhdylrtE8l_aWiEvcwtSXokg4M6Ei_NbVforT7F3JY43FxPY"
                alt="Project dashboard"
              />
              <div className="project-content">
                <h3>Architect Dash</h3>
                <p>Enterprise-grade analytics platform with real-time data streaming and predictive modeling.</p>
              </div>
            </Link>

            <Link to="/projects" className="project-card">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZG07ZCCkCnvBV8gSnTY9IzTPOXylLIHUtAZfYEdlIEHlkMG05smIh1UVr-jGM2oQWfvEaHNNB2Y5WTLim8cmyxktI5nR-ZCuD-P1eUuA7KQplCz2pMbkp4XEVnS8H7UzU83TDoykF6n0VXKd42omo_LxU-ZOEi9FNZ3j4oC-Qyqyq9ph1vYUavcqV350c1M2usyO2TVeNBlk7EC5ee0yHzrRLOLj5C75zcX6IY5eGthGlxIr1UXVelT_iFot8mD-pellfB8s-AYO"
                alt="Code on screen"
              />
              <div className="project-content">
                <h3>SyncNode</h3>
                <p>Distributed task management engine for remote-first engineering teams.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="experience-section">
          <div className="section-head">
            <h2>Professional Path</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date">2021 — PRESENT</time>
                <h3>Senior Developer</h3>
                <p className="timeline-company">TechCorp Solutions</p>
                <p className="timeline-description">
                  Leading the architectural overhaul of the core cloud infrastructure. Managing a team of 8 developers and implementing CI/CD best practices.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date">2018 — 2021</time>
                <h3>Junior Developer</h3>
                <p className="timeline-company">StartUp Inc.</p>
                <p className="timeline-description">
                  Developed responsive frontend components and optimized database queries for a high-traffic e-commerce platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to build the future?</h2>
          <p>Disponible para proyectos freelance y oportunidades full-time.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/projects" className="btn btn-outline">View Projects</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>The Kinetic Architect</strong>
          <p>Built with technical precision.</p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Github</Link>
          <Link to="/about">LinkedIn</Link>
          <Link to="/experience">Twitter</Link>
          <Link to="/contact">Email</Link>
        </div>
      </footer>
    </div>
  )
}

export default App