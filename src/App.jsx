import './App.css'
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'

/* ───────── animation variants ───────── */
const revealVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.96, filter: 'blur(18px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: i => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: i => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
}

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionH1 = motion.h1

/* ───────── Floating Particles ───────── */
function Particles() {
  const particles = useRef(
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  ).current

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ───────── Aurora Background ───────── */
function AuroraBackground() {
  return (
    <div className="aurora-container" aria-hidden="true">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
    </div>
  )
}

/* ───────── Scroll Progress Bar ───────── */
function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

/* ───────── Magnetic Button ───────── */
function MagneticButton({ children, onClick, className, type }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouse = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }, [x, y])

  const reset = useCallback(() => { x.set(0); y.set(0) }, [x, y])

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      type={type || 'button'}
    >
      {children}
    </motion.button>
  )
}

/* ───────── 3D Tilt Card ───────── */
function TiltCard({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouse = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [x, y])

  const reset = useCallback(() => { x.set(0); y.set(0) }, [x, y])

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}

/* ───────── Animated Title Letters ───────── */
function AnimatedText({ text, className }) {
  return (
    <motion.span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

/* ───────── Glitch Text ───────── */
function GlitchText({ text }) {
  return (
    <span className="glitch-wrapper">
      <span className="glitch-text" data-text={text}>{text}</span>
    </span>
  )
}

/* ───────── Active Section Hook ───────── */
function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])
  return active
}

/* ═══════════════════════ MAIN APP ═══════════════════════ */
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const activeSection = useActiveSection()
  const { scrollYProgress } = useScroll()

  const featuredProjects = [
    {
      icon: '⚡',
      title: 'AmpelIntelligence',
      description: 'IoT platform that captures and visualizes real-time device data to monitor signals and behavior in a clear web dashboard.',
      tags: ['Python', 'Flask', 'MQTT', 'IoT', 'WebSockets'],
      codeUrl: 'https://github.com/diegodelgadog6/AmpelIntelligence',
    },
    {
      icon: '🎮',
      title: 'console-retro-game',
      description: 'Retro-style console game implemented with classic game-loop logic, focused on responsive controls and clean terminal rendering.',
      tags: ['Python', 'Game Loop', 'CLI', 'OOP'],
      codeUrl: 'https://github.com/diegodelgadog6/console-retro-game',
      demoUrl: 'https://console-retro-game.vercel.app/',
    },
    {
      icon: '💬',
      title: 'chatify-app',
      description: 'Chat application project centered on real-time messaging flow, user interaction, and a clean communication interface.',
      tags: ['Web App', 'Chat', 'UI', 'Realtime'],
      codeUrl: 'https://github.com/diegodelgadog6/chatify-app',
      demoUrl: 'https://chatify-app-z8m3.vercel.app/',
    },
  ]

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])

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
      <Particles />
      <AuroraBackground />
      <ScrollProgress />

      {/* ─── NAVBAR ─── */}
      <motion.header
        className="topbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <nav className="topbar-inner">
          <motion.a
            onClick={() => scrollToSection('top')}
            className="brand"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="brand-icon material-symbols-outlined">terminal</span>
            <span className="brand-text">Diego Delgado</span>
          </motion.a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menú"
            type="button"
            title="Menú"
          >
            <motion.span
              className="menu-bars"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? '✕' : '☰'}
            </motion.span>
          </button>

          <div className={menuOpen ? 'top-menu top-menu-open' : 'top-menu'}>
            {['about', 'skills', 'projects', 'contact'].map((section, i) => (
              <motion.a
                key={section}
                onClick={() => scrollToSection(section)}
                className={`top-menu-link ${activeSection === section ? 'active' : ''}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.08 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </div>
        </nav>
      </motion.header>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <MotionSection
          id="top"
          className="hero hero-scene"
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={staggerVariants}
          style={shouldReduceMotion ? {} : { y: heroY, opacity: heroOpacity }}
        >
          <MotionDiv className="hero-copy" variants={revealVariants}>
            <motion.div
              className="hero-kicker"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {['Computer Science and Technology Student', 'Tecnológico de Monterrey · GDL'].map((text, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>

            <MotionH1
              className="hero-title"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
            >
              <AnimatedText text="Diego" className="hero-title-line" />
              <br />
              <AnimatedText text="Delgado" className="hero-title-line" />
            </MotionH1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi, I'm Diego Delgado. I design code, interfaces, and technical ideas as if they were scenes: precise, atmospheric, and impossible to ignore.
            </motion.p>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <GlitchText text='run("think for yourself");' />
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <MagneticButton onClick={() => scrollToSection('projects')} className="btn btn-primary">
                <span className="btn-shine" />
                Enter the work
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection('contact')} className="icon-box">
                Start a conversation
              </MagneticButton>
            </motion.div>

            <motion.div
              className="hero-metrics"
              aria-label="Core strengths"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 1.5 } } }}
            >
              {[
                { num: '01', label: 'logic', title: 'Python, C++, MATLAB', desc: 'Reasoning, automation, and systems thinking.' },
                { num: '02', label: 'interface', title: 'HTML, CSS, SQL', desc: 'Interfaces shaped with clarity and restraint.' },
                { num: '03', label: 'craft', title: 'Git, Linux, Arduino', desc: 'Practical tools for real prototypes and delivery.' },
              ].map((m, i) => (
                <TiltCard key={i} className="metric-card">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    <span className="stat-label">{m.num} / {m.label}</span>
                    <strong>{m.title}</strong>
                    <span>{m.desc}</span>
                    <div className="metric-glow" />
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </MotionDiv>

          <MotionDiv className="hero-visual" variants={revealVariants}>
            <TiltCard className="hero-poster">
              <div className="hero-poster-glow" />
              <div className="hero-poster-image hero-poster-image-banner" aria-hidden="true" />
              <div className="hero-poster-image hero-poster-image-portrait" aria-hidden="true" />
              <div className="hero-poster-panel">
                <span className="hero-poster-label">Selected sequence</span>
                <h2>Built like a scene, not a template.</h2>
                <p>The page leans into contrast, depth, and composition so the work feels curated instead of assembled.</p>
              </div>
              <div className="hero-film-strip" aria-hidden="true">
                {[0, 1, 2, 3].map(i => (
                  <motion.span
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>
            </TiltCard>
          </MotionDiv>
        </MotionSection>

        {/* ═══════════ ABOUT ═══════════ */}
        <MotionSection
          id="about"
          className="section-about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title">
                <span className="section-number">01.</span> About Me
              </h2>
            </MotionDiv>
            <div className="about-content">
              {[
                "Hi! I'm Diego, and I'm currently studying Computer Science and Technology at Tecnológico de Monterrey.",
                "For me, technology isn't just about writing code, but about clarity, efficiency, and building things with purpose. If something is unnecessarily complicated, I simplify it. If it doesn't work well, I rethink it.",
                "I work in various areas of technology: from programming in Python, C++, and MATLAB to circuit design and prototyping with Arduino. I've explored object-oriented programming, data structures, and software requirements, always with a focus on practical implementation. My background in mathematics education and statistical analysis strengthens my systems thinking and critical reasoning, especially when working with databases, SQL, and AI tools.",
                "I also enjoy front-end web development, using HTML5, CSS, and Visual Studio Code to create clean, functional interfaces. I'm familiar with Git and GitHub for version control and collaboration, and I work comfortably in Linux environments like Ubuntu.",
                "But that's just a small part of who I am. At my core, I'm passionate about documenting processes, mentoring colleagues, and synthesizing information. My goal is to turn ideas into realities in a clear, logical, and practical way.",
              ].map((text, i) => (
                <MotionDiv
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -30, filter: 'blur(8px)' },
                    visible: {
                      opacity: 1, x: 0, filter: 'blur(0px)',
                      transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <p>{text}</p>
                </MotionDiv>
              ))}
              <MotionDiv
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.6 } },
                }}
              >
                <p><strong>Nice to meet you!</strong></p>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        {/* ═══════════ SKILLS ═══════════ */}
        <MotionSection
          id="skills"
          className="section-skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title">
                <span className="section-number">02.</span> Skills & Technologies
              </h2>
            </MotionDiv>
            <div className="skills-grid">
              {[
                { icon: '💻', title: 'Programming Languages', items: ['Python', 'C++', 'MATLAB'] },
                { icon: '🌐', title: 'Web Technologies', items: ['HTML5', 'CSS', 'SQL'] },
                { icon: '🛠️', title: 'Development Tools', items: ['VS Code', 'Git & GitHub', 'Linux'] },
                { icon: '🌍', title: 'Languages', items: ['Spanish (Native)', 'English (Intermediate)'] },
              ].map((cat, ci) => (
                <TiltCard key={ci} className="skill-category">
                  <MotionDiv
                    variants={{
                      hidden: { opacity: 0, y: 50, rotateX: -15 },
                      visible: {
                        opacity: 1, y: 0, rotateX: 0,
                        transition: { duration: 0.7, delay: ci * 0.12, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <h3>{cat.icon} {cat.title}</h3>
                    <div className="skill-items">
                      {cat.items.map((item, si) => (
                        <motion.span
                          key={si}
                          className="skill-item"
                          custom={ci * 3 + si}
                          variants={tagVariants}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: '0 0 20px rgba(123,220,255,0.3)',
                            borderColor: 'rgba(123,220,255,0.5)',
                          }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                    <div className="card-border-glow" />
                  </MotionDiv>
                </TiltCard>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ═══════════ PROJECTS ═══════════ */}
        <MotionSection
          id="projects"
          className="section-projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title">
                <span className="section-number">03.</span> Featured Projects
              </h2>
            </MotionDiv>
            <div className="projects-list">
              {featuredProjects.map((project, pi) => (
                <TiltCard className="project" key={project.title}>
                  <MotionDiv
                    variants={{
                      hidden: { opacity: 0, y: 60, scale: 0.95 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.9, delay: pi * 0.08, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <div className="project-header">
                      <span className="project-icon">{project.icon}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={`${project.title}-${tag}`}
                          custom={i}
                          variants={tagVariants}
                          whileHover={{ scale: 1.15, y: -3 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.demoUrl ? (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ x: 6 }}
                          transition={{ duration: 0.25 }}
                        >
                          <span className="link-arrow">→</span> View Demo
                        </motion.a>
                      ) : null}
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="link-arrow">→</span> View Code
                      </motion.a>
                    </div>
                    <div className="project-glow" />
                  </MotionDiv>
                </TiltCard>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* ═══════════ CONTACT ═══════════ */}
        <MotionSection
          id="contact"
          className="section-contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title">
                <span className="section-number">04.</span> Let's Connect
              </h2>
            </MotionDiv>
            <div className="contact-layout">
              <MotionDiv
                className="contact-panel contact-panel-form"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
                }}
                aria-labelledby="contact-form-title"
              >
                <h3 id="contact-form-title" className="contact-panel-title">Send a message</h3>
                <form onSubmit={handleSendEmail} className="contact-form">
                  {[
                    { type: 'text', name: 'name', placeholder: 'Your name' },
                    { type: 'email', name: 'email', placeholder: 'Your email' },
                    { type: 'text', name: 'subject', placeholder: 'Subject' },
                  ].map((field, i) => (
                    <motion.div
                      key={field.name}
                      className="form-group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleFormChange}
                        required
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your message"
                      rows="5"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    />
                  </motion.div>
                  <MagneticButton className="btn btn-primary" type="submit">
                    <span className="btn-shine" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </MagneticButton>
                  <AnimatePresence>
                    {status && (
                      <motion.p
                        className={status.includes('✓') ? 'form-success' : 'form-error'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {status}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </MotionDiv>

              <MotionDiv
                className="contact-panel contact-panel-links"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
                }}
                aria-labelledby="contact-links-title"
              >
                <h3 id="contact-links-title" className="contact-panel-title">My networks</h3>
                <div className="contact-links">
                  {[
                    { href: 'https://drive.google.com/file/d/14KJrOJlYpKMyzHbg9HglPNPas9sGh_0Q/view?usp=drive_link', img: '/assets/cv.png', alt: 'Resume', label: 'My Resume' },
                    { href: 'mailto:diegodelgadog1@gmail.com', img: '/assets/mail.png', alt: 'Email', label: 'Send email' },
                    { href: 'https://github.com/diegodelgadog6', img: '/assets/github.png', alt: 'GitHub', label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/diegodelgadog6', img: '/assets/linkedin.png', alt: 'LinkedIn', label: 'LinkedIn' },
                    { href: 'https://x.com/diegodelgadog6', img: '/assets/x.png', alt: 'X', label: 'X' },
                    { href: 'https://instagram.com/diegodelgadog6', img: '/assets/instagram.png', alt: 'Instagram', label: 'Instagram' },
                    { href: 'https://youtube.com/@diegodelgadog6', img: '/assets/youtube.png', alt: 'YouTube', label: 'YouTube' },
                    { href: 'https://tiktok.com/@diegodelgadog6', img: '/assets/tiktok.png', alt: 'TikTok', label: 'TikTok' },
                    { href: 'https://steamcommunity.com/id/diegodelgadog6', img: '/assets/steam.png', alt: 'Steam', label: 'Steam' },
                    { href: 'https://www.reddit.com/user/diegodelgadog6', img: '/assets/reddit.png', alt: 'Reddit', label: 'Reddit' },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                      className="contact-link"
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{
                        scale: 1.06,
                        y: -4,
                      }}
                    >
                      <img src={link.img} alt={link.alt} />
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>
      </main>
    </div>
  )
}

export default App