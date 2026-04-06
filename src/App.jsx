import './App.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="topbar">
        <nav className="topbar-inner">
          <Link to="/" className="brand">
            <span className="brand-icon material-symbols-outlined">terminal</span>
            <span className="brand-text">Diego Delgado</span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menú"
            type="button"
            title="Menú"
          >
            <span className="menu-bars">☰</span>
          </button>

          <div className={menuOpen ? 'top-menu top-menu-open' : 'top-menu'}>
            <NavLink to="/" className="top-menu-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="top-menu-link" onClick={() => setMenuOpen(false)}>Profile</NavLink>
            <NavLink to="/projects" className="top-menu-link" onClick={() => setMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/experience" className="top-menu-link" onClick={() => setMenuOpen(false)}>Experience</NavLink>
            <NavLink to="/resume" className="top-menu-link" onClick={() => setMenuOpen(false)}>Resume</NavLink>
            <NavLink to="/contact" className="top-menu-link" onClick={() => setMenuOpen(false)}>Get in Touch</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="chip">Computer Science and Technology Student</p>
            <h1 className="hero-title">
              Diego <span>Delgado</span>
            </h1>
            <p className="hero-subtitle">
              Technology for me is clarity and purpose. I build practical solutions in software, data, and IoT systems.
            </p>

            <div className="hero-actions">
              <Link to="/projects" className="icon-box" aria-label="Ir a proyectos">View Projects</Link>
              <Link to="/about" className="icon-box" aria-label="Ir a perfil">About Me</Link>
              <Link to="/contact" className="btn btn-primary">Contact Me</Link>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="https://diegodelgadog6.github.io/diegodelgadogontes.com/assets/avatar.png"
              alt="Diego Delgado"
              className="hero-image"
            />
          </div>
        </section>

        <section className="skills-section">
          <div className="section-head">
            <h2>Skills and Technologies</h2>
            <p>Programming, tools, and platforms I use to turn ideas into working products.</p>
          </div>
          <div className="skill-list">
            {['Python', 'C++', 'MATLAB', 'HTML', 'CSS', 'SQL', 'Git', 'GitHub', 'VS Code', 'Linux', 'Arduino', 'IoT'].map((skill) => (
              <span className="skill-item" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="projects-section">
          <div className="section-head">
            <h2>Featured Projects</h2>
          </div>

          <div className="project-grid">
            <Link to="/projects" className="project-card project-card-wide">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80"
                alt="IoT dashboard"
              />
              <div className="project-content">
                <h3>MQTT Real-Time Viewer</h3>
                <p>Web app to visualize real-time MQTT messages from ESP32 and Raspberry Pi devices.</p>
              </div>
            </Link>

            <Link to="/projects" className="project-card">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"
                alt="C++ project"
              />
              <div className="project-content">
                <h3>The Naval Battle</h3>
                <p>Turn-based C++ strategy game inspired by Battleship with a 10x10 board.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="experience-section">
          <div className="section-head">
            <h2>Academic and Technical Path</h2>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date">2023 — PRESENT</time>
                <h3>Computer Science and Technology Student</h3>
                <p className="timeline-company">Tecnologico de Monterrey</p>
                <p className="timeline-description">
                  Building strong foundations in software engineering, data structures, algorithms, and practical development projects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <time className="timeline-date">Ongoing</time>
                <h3>Hands-on Builder</h3>
                <p className="timeline-company">Personal and Academic Projects</p>
                <p className="timeline-description">
                  Developing apps in Python and C++, experimenting with IoT, and creating useful solutions with a practical mindset.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Lets build something useful</h2>
          <p>Open to collaboration, learning opportunities, and software projects with real impact.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/projects" className="btn btn-outline">View Projects</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Diego Delgado</strong>
          <p>© 2025 Diego Delgado. Built with React and Vite.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/diegodelgadog6" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://www.linkedin.com/in/diegodelgadog6" target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href="mailto:diegodelgadog1@gmail.com">EMAIL</a>
          <a href="https://x.com/diegodelgadog6" target="_blank" rel="noreferrer">X</a>
        </div>
      </footer>
    </div>
  )
}

export default App