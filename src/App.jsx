import './App.css'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('✓ Correo enviado correctamente')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        const errorData = await response.json()
        setStatus(`✗ Error: ${errorData.message || 'No se pudo enviar'}`)
      }
    } catch (error) {
      setStatus(`✗ Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <nav className="topbar-inner">
          <a onClick={() => scrollToSection('top')} className="brand">
            <span className="brand-icon material-symbols-outlined">terminal</span>
            <span className="brand-text">Diego Delgado</span>
          </a>

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
            <a onClick={() => scrollToSection('about')} className="top-menu-link">About</a>
            <a onClick={() => scrollToSection('skills')} className="top-menu-link">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="top-menu-link">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="top-menu-link">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="hero">
          <div>
            <p className="chip">💻 Computer Science and Technology Student</p>
            <h1 className="hero-title">
              Hi, I'm <span>Diego Delgado</span>
            </h1>
            <p className="hero-subtitle">
              TECNOLÓGICO DE MONTERREY #GDL
            </p>
            <p className="hero-tagline">run("think for yourself");</p>

            <div className="hero-actions">
              <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact Me</button>
              <button onClick={() => scrollToSection('projects')} className="icon-box">View Projects</button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img
              src="/assets/avatar.png"
              alt="Diego Delgado"
              className="hero-image"
            />
          </div>
        </section>

        {/* 01. ABOUT ME */}
        <section id="about" className="section-about">
          <div className="section-container">
            <h2 className="section-title">01. About Me</h2>
            <div className="about-content">
              <p>
                Hi! I'm Diego, and I'm currently studying Computer Science and Technology at Tecnológico de Monterrey.
              </p>
              <p>
                For me, technology isn't just about writing code, but about clarity, efficiency, and building things with purpose. If something is unnecessarily complicated, I simplify it. If it doesn't work well, I rethink it.
              </p>
              <p>
                I work in various areas of technology: from programming in Python, C++, and MATLAB to circuit design and prototyping with Arduino. I've explored object-oriented programming, data structures, and software requirements, always with a focus on practical implementation. My background in mathematics education and statistical analysis strengthens my systems thinking and critical reasoning, especially when working with databases, SQL, and AI tools.
              </p>
              <p>
                I also enjoy front-end web development, using HTML5, CSS, and Visual Studio Code to create clean, functional interfaces. I'm familiar with Git and GitHub for version control and collaboration, and I work comfortably in Linux environments like Ubuntu.
              </p>
              <p>
                But that's just a small part of who I am. At my core, I'm passionate about documenting processes, mentoring colleagues, and synthesizing information. My goal is to turn ideas into realities in a clear, logical, and practical way.
              </p>
              <p><strong>Nice to meet you!</strong></p>
            </div>
          </div>
        </section>

        {/* 02. SKILLS & TECHNOLOGIES */}
        <section id="skills" className="section-skills">
          <div className="section-container">
            <h2 className="section-title">02. Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>💻 Programming Languages</h3>
                <div className="skill-items">
                  <span className="skill-item">Python</span>
                  <span className="skill-item">C++</span>
                  <span className="skill-item">MATLAB</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🌐 Web Technologies</h3>
                <div className="skill-items">
                  <span className="skill-item">HTML5</span>
                  <span className="skill-item">CSS</span>
                  <span className="skill-item">SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🛠️ Development Tools</h3>
                <div className="skill-items">
                  <span className="skill-item">VS Code</span>
                  <span className="skill-item">Git & GitHub</span>
                  <span className="skill-item">Linux</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>🌍 Languages</h3>
                <div className="skill-items">
                  <span className="skill-item">Spanish (Native)</span>
                  <span className="skill-item">English (Intermediate)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. FEATURED PROJECTS */}
        <section id="projects" className="section-projects">
          <div className="section-container">
            <h2 className="section-title">03. Featured Projects</h2>
            <div className="projects-list">
              <article className="project">
                <h3>MQTT Real-Time Viewer</h3>
                <p>Real-time web application for visualizing MQTT messages from IoT devices. Monitors data streams from Raspberry Pi and ESP32 microcontrollers, displaying live sensor readings and device communications through an intuitive web interface.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Flask</span>
                  <span>MQTT</span>
                  <span>IoT</span>
                  <span>WebSockets</span>
                </div>
                <div className="project-links">
                  <a href="https://ampelintelligence.up.railway.app/" target="_blank" rel="noreferrer">View Viewer →</a>
                  <a href="https://github.com/diegodelgadog6/mqtt-viewer" target="_blank" rel="noreferrer">View Code →</a>
                </div>
              </article>

              <article className="project">
                <h3>Chat Message Memory Management</h3>
                <p>Implementation of an advanced memory management system for messaging applications. The program manages messages with dynamic pointers, marks messages as deleted, and executes a compaction function that frees memory and reorganizes the vector.</p>
                <div className="project-tags">
                  <span>C++</span>
                  <span>Memory Management</span>
                  <span>Data Structures</span>
                  <span>Pointers</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/diegodelgadog6/manejo-memoria-app-mensajeria-whatsapp" target="_blank" rel="noreferrer">View Code →</a>
                </div>
              </article>

              <article className="project">
                <h3>The Naval Battle</h3>
                <p>A turn-based strategy game developed in C++ that simulates the classic Battleship game. Two players place and attack ships on a 10x10 board until one of them runs out of ships.</p>
                <div className="project-tags">
                  <span>C++</span>
                  <span>Game Development</span>
                  <span>Logic</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/diegodelgadog6/The-Naval-battle" target="_blank" rel="noreferrer">View Code →</a>
                </div>
              </article>

              <article className="project">
                <h3>Car Sales & Inventory Tracker</h3>
                <p>A Python-based application to manage car sales and inventory. This system allows users to register vehicle sales, track inventory, and generate various reports like top-selling models and top-performing salespeople.</p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Data Analysis</span>
                  <span>File Handling</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/diegodelgadog6/Car-Sales-and-Inventory-Tracker" target="_blank" rel="noreferrer">View Code →</a>
                </div>
              </article>

              <article className="project">
                <h3>Linked List Implementation</h3>
                <p>Educational implementation of a simple linked list in C++ from scratch using classes. Features insertion (beginning/end/position), deletion by value, search, and display with minimal testing and documentation.</p>
                <div className="project-tags">
                  <span>C++</span>
                  <span>Data Structures</span>
                  <span>Pointers</span>
                </div>
                <div className="project-links">
                  <a href="https://github.com/diegodelgadog6/lista-ligada-cpp-desde-cero" target="_blank" rel="noreferrer">View Code →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 04. LET'S CONNECT */}
        <section id="contact" className="section-contact">
          <div className="section-container">
            <h2 className="section-title">04. Let's Connect</h2>
            
            <form onSubmit={handleSendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className={status.includes('✓') ? 'form-success' : 'form-error'}>{status}</p>}
            </form>

            <div className="contact-links">
              <a href="https://drive.google.com/file/d/14KJrOJlYpKMyzHbg9HglPNPas9sGh_0Q/view?usp=drive_link" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/cv.png" alt="Resume" /> My Resume
              </a>
              <a href="mailto:diegodelgadog1@gmail.com" className="contact-link">
                <img src="/assets/mail.png" alt="Email" /> Send email
              </a>
              <a href="https://github.com/diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/github.png" alt="GitHub" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/linkedin.png" alt="LinkedIn" /> LinkedIn
              </a>
              <a href="https://x.com/diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/x.png" alt="X" /> X
              </a>
              <a href="https://instagram.com/diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/instagram.png" alt="Instagram" /> Instagram
              </a>
              <a href="https://youtube.com/@diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/youtube.png" alt="YouTube" /> YouTube
              </a>
              <a href="https://tiktok.com/@diegodelgadog6" target="_blank" rel="noreferrer" className="contact-link">
                <img src="/assets/tiktok.png" alt="TikTok" /> TikTok
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 - Diego Delgado</p>
      </footer>
    </div>
  )
}

export default App