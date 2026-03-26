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
              src="https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=900&q=80"
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
                src="https://images.unsplash.com/photo-1551281044-8b1d3f8f6d2f?auto=format&fit=crop&w=1400&q=80"
                alt="Project dashboard"
              />
              <div className="project-content">
                <h3>Architect Dash</h3>
                <p>Analytics platform with real-time visualization and predictive modules.</p>
              </div>
            </Link>

            <Link to="/projects" className="project-card">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80"
                alt="Code on screen"
              />
              <div className="project-content">
                <h3>SyncNode</h3>
                <p>Distributed task engine for remote-first teams.</p>
              </div>
            </Link>
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