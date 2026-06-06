import './App.css'
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useRef, useCallback } from 'react'
import { LuUniversity } from 'react-icons/lu'
import { FaComputer, FaLocationDot, FaLink, FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaYoutube, FaSteam, FaRegFileLines } from 'react-icons/fa6'
import { RiGitRepositoryFill } from 'react-icons/ri'
import { TiSocialAtCircular } from 'react-icons/ti'
import { IoIosMail } from 'react-icons/io'

/* ───────── animation variants ───────── */
const revealVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97, filter: 'blur(14px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const MotionSection = motion.section
const MotionDiv = motion.div

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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })

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

/* ───────── Glitch Text ───────── */
function GlitchText({ text }) {
  return (
    <span className="glitch-wrapper">
      <span className="glitch-text" data-text={text}>{text}</span>
    </span>
  )
}

/* ───────── ASCII art (GitHub README) ───────── */
const asciiArt = [
  '                                 .-##*=:..',
  '                                 :*@%@@#*##+:..',
  '                                .=%+::.:*%@@%**#*-..',
  '                                .*#-@@@@@*-..=#@@@#+*%*:.',
  '                               .=%+=@@@@@@@@@@%=:.:*%@@@#+##=:',
  '                               .+*-@@@@@@@@@@@@@@@@%+:.:=#@@@%*+#*-.',
  '                              .=%==@@@@@@@@@@@@@@@@@@@@%#*-::-*%@%%#++*=:.',
  '                              .+#-%@@@@@@@@@@@@@@@@@@@@@@@@@@#*=::-+%@@%#**:',
  '                             .+%+=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*=::%+%*+',
  '                             .+%:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@==#*#%:',
  '                            .+%+-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*:#+%#+.',
  '                            .+%:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-=#*#%:',
  '                            =%+-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*:#+%#+.',
  '                           .+%:%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=+#*#%:',
  '                           +@*-@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*-#+%%=.',
  '                          .+@.*%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=+*##%:',
  '                        ..@%%@%-..=@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*-#*#%=.',
  '                    .#%::#*=%-#-@@@+..=@@@@@@@@@@@@@@@@@@@@@@@@@@=+*###:',
  '               .+#-:++%*=@@@@=%+%*=*#@%*:.:#@@@@@@@@@@@@@@@@@@@@*-#*#%=.',
  '          .=#=:===#@+%%+@%-%=@%=%*+##%*+*@%#:.:=@@@@@@@@@@@@@@@%-+*##*:',
  '      -*+:===%%%**%@%%=%%%@=@%@@#*@%%++#*#+**%%#=.:-%@@@@@@@@@@*-##*%=.',
  ' :*+=%##@@@@@%#*%@*#**@%=%=@@+%*@@%#*#@**###+#**+@@#+.:-+@@@@@%-=*#%*:',
  '#=*@@@@@@@@@@@@@@#%#*%##%*%%#%**%#%%#%#%#+#%%#=*#**+*#@#+-.-+%*-*##%-',
  '%*@###%@@@@@@@@@%%#%%%+##@%#%+@@#*#%@##*#@#**#@@**+##+#+##@#+-.+*#%+:',
  '.+**%%%#%%@@%*#@@@@@@@@@##+%#@%*#%%##%@@%*##@#**#%@**%**##++*%@%%##=',
  '   .-**#%%%#%*==*%@@@@@@@@@@#*+%%@##%%#*%%%###%#%*##@#%*#***+=:--**:',
  '       :+**%%@###+==#%@@@@@@@@%#+*%*%@***#@%###@@@%##@%+#=-.:=%%#+:',
  '          .-**#%@%*%#=-+#@%%*%@@@@@@**#@@#+#%@%@+#@#*==::=#@@%#+:',
  '              :+*+%@@##%#%@@@@@@@@@@@@@%*#@@#**@@#+-:-#@@%##*-.',
  '                 .=#**@@%+%@@@@@@@@@@@@@@@@%+%++::*@@@%*#=.',
  '                     :*%+%@@#+@@@@@@@@@@@@@@*-*@@@@*%*:',
  '                        .-%#+@@%**@@@@@@@**%@@@###-.',
  '                           .:+%**@@#*#@@@@@##%+:.',
  '                              ..-*#*%@@%#%*-.',
  '                                  .:+##=:.',
].join('\n')

/* ───────── data: README "neofetch" lines ───────── */
const readmeLines = [
  { key: 'OS', value: 'Bazzite, Windows 11' },
  { key: 'Uptime', value: '20 years old' },
  { key: 'Host', value: 'Tecnológico de Monterrey #GDL' },
  { key: 'Kernel', value: 'CS & Technology Student #ITC' },
  { key: 'IDE', value: 'Cursor, VSCode' },
  { spacer: true },
  { key: 'Languages.Code', value: 'Python, C++, JS' },
  { key: 'Frameworks', value: 'React, Flask, Tailwind CSS' },
  { key: 'Tools', value: 'Socket.IO, MySQL, Git' },
  { key: 'Languages.Human', value: 'Spanish, English' },
]

/* ───────── data: pinned repos (exactly as on GitHub) ───────── */
const langColors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  'C#': '#178600',
}

const pinnedRepos = [
  {
    name: 'paninixchange',
    lang: 'JavaScript',
    stars: 1,
    description: 'La red social del coleccionista del Mundial 2026 — conecta coleccionistas cercanos para intercambiar cromos Panini. Interfaz en React 19, Vite y Tailwind CSS.',
    url: 'https://github.com/diegodelgadog6/paninixchange',
    demoUrl: 'https://paninixchange.vercel.app/',
  },
  {
    name: 'kueski-extension',
    lang: 'JavaScript',
    stars: 1,
    description: 'Kueski Smart Widget: extensión de navegador (Manifest V3) que actúa como asistente financiero — cupones, saldo y más mientras navegas.',
    url: 'https://github.com/diegodelgadog6/kueski-extension',
  },
  {
    name: 'Server-chatify',
    lang: 'JavaScript',
    stars: 1,
    description: 'Backend de mensajería en tiempo real para Chatify, construido con Express, Socket.IO y PostgreSQL.',
    url: 'https://github.com/diegodelgadog6/Server-chatify',
    demoUrl: 'https://chatify-app-black.vercel.app/',
  },
  {
    name: 'Server-Postify',
    lang: 'Python',
    stars: 1,
    description: 'Backend en Python de Postify, una red social de publicaciones. API y lógica de servidor.',
    url: 'https://github.com/diegodelgadog6/Server-Postify',
    demoUrl: 'https://ui-postify.vercel.app/profile/e4f72569-8304-4167-882c-c06d6b34da91',
  },
  {
    name: 'AmpelIntelligence',
    lang: 'Python',
    stars: 1,
    description: 'Monitor IoT de tráfico urbano y calidad del aire en tiempo real. ESP32 + Raspberry Pi + MQTT + Flask + MySQL, con visor web en vivo.',
    url: 'https://github.com/diegodelgadog6/AmpelIntelligence',
    demoUrl: 'https://ampel-intelligence.vercel.app',
  },
  {
    name: 'console-retro-game',
    lang: 'JavaScript',
    stars: 1,
    description: 'Interfaz retro estilo consola para explorar Pokémon y jugar una batalla 1v1. Consume la PokeAPI, con modo combate completo (HP, ataques y pantalla de ganador). React, Vite y Tailwind CSS.',
    url: 'https://github.com/diegodelgadog6/console-retro-game',
    demoUrl: 'https://console-retro-game.vercel.app',
  },
]

/* ───────── data: social links ───────── */
const socialLinks = [
  { href: 'https://drive.google.com/file/d/1qA8NUq_-1kFo678xz40YtNd9NPKTmbyP/view?usp=sharing', Icon: FaRegFileLines, label: 'Resume' },
  { href: 'https://github.com/diegodelgadog6', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/diegodelgadog6', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:diegodelgadog1@gmail.com', Icon: IoIosMail, label: 'Email' },
  { href: 'https://x.com/diegodelgadog6', Icon: FaXTwitter, label: 'X' },
  { href: 'https://instagram.com/diegodelgadog6', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://youtube.com/@diegodelgadog6', Icon: FaYoutube, label: 'YouTube' },
  { href: 'https://steamcommunity.com/id/diegodelgadog6', Icon: FaSteam, label: 'Steam' },
]

/* ═══════════════════════ MAIN APP ═══════════════════════ */
function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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

      <main>
        {/* ═══════════ PROFILE + README ═══════════ */}
        <MotionSection
          id="top"
          className="profile"
          initial={shouldReduceMotion ? false : 'hidden'}
          animate="visible"
          variants={staggerVariants}
        >
          {/* Left: identity card (GitHub sidebar) */}
          <MotionDiv className="id-card" variants={revealVariants}>
            <div className="id-avatar">
              <img src="/assets/avatar.png" alt="Diego Delgado" />
            </div>
            <h1 className="id-name">Diego Alejandro Delgado Gontes</h1>
            <p className="id-handle">diegodelgadog6 · he/him</p>
            <p className="id-bio">
              <FaComputer className="id-bio-icon" /> Computer Science and Technology student at ITESM.
            </p>
            <ul className="id-meta">
              <li><LuUniversity className="id-meta-icon" /> Tecnológico de Monterrey · Campus Guadalajara</li>
              <li><FaLocationDot className="id-meta-icon" /> Zapopan, Jal, Mexico</li>
              <li>
                <FaLink className="id-meta-icon" />
                <a href="https://diegodelgadogontes.com" target="_blank" rel="noreferrer">diegodelgadogontes.com</a>
              </li>
            </ul>
            <div className="id-actions">
              <MagneticButton onClick={() => scrollToSection('pinned')} className="btn btn-primary">
                <span className="btn-shine" />
                View projects
              </MagneticButton>
              <MagneticButton onClick={() => scrollToSection('connect')} className="icon-box">
                Get in touch
              </MagneticButton>
            </div>
          </MotionDiv>

          {/* Right: README terminal card (neofetch style) */}
          <MotionDiv className="readme-wrap" variants={revealVariants}>
            <TiltCard className="readme-card">
              <div className="readme-bar">
                <span className="readme-dot readme-dot-r" />
                <span className="readme-dot readme-dot-y" />
                <span className="readme-dot readme-dot-g" />
                <span className="readme-bar-title">diegodelgadog6 / README.md</span>
              </div>
              <div className="readme-body">
                <pre className="readme-ascii" aria-hidden="true">{asciiArt}</pre>
                <div className="readme-info">
                <div className="readme-user">diegodelgadog6</div>
                <div className="readme-rule" />
                {readmeLines.map((line, i) =>
                  line.spacer ? (
                    <div key={i} className="readme-spacer" />
                  ) : (
                    <div key={i} className="readme-line">
                      <span className="readme-key">{line.key}</span>
                      <span className="readme-sep">: </span>
                      <span className="readme-val">{line.value}</span>
                    </div>
                  )
                )}
                <div className="readme-spacer" />
                <div className="readme-run">
                  <GlitchText text='run("think for yourself");' />
                </div>
                <div className="readme-spacer" />
                <div className="readme-line">
                  <span className="readme-key">My Web Site</span>
                  <span className="readme-sep">: </span>
                  <a className="readme-val readme-link" href="https://diegodelgadogontes.com" target="_blank" rel="noreferrer">
                    diegodelgadogontes.com
                  </a>
                </div>
                </div>
              </div>
            </TiltCard>
          </MotionDiv>
        </MotionSection>

        {/* ═══════════ PINNED REPOS ═══════════ */}
        <MotionSection
          id="pinned"
          className="section-pinned"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title"><RiGitRepositoryFill className="section-pin" /> Projects</h2>
            </MotionDiv>
            <div className="repos-grid">
              {pinnedRepos.map((repo, ri) => (
                <TiltCard className="repo-card" key={repo.name}>
                  <MotionDiv
                    className="repo-inner"
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.96 },
                      visible: {
                        opacity: 1, y: 0, scale: 1,
                        transition: { duration: 0.7, delay: ri * 0.07, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <div className="repo-top">
                      <a className="repo-name" href={repo.url} target="_blank" rel="noreferrer">{repo.name}</a>
                      <span className="repo-badge">Public</span>
                    </div>
                    <p className="repo-desc">{repo.description}</p>
                    <div className="repo-meta">
                      <span className="repo-lang">
                        <span className="lang-dot" style={{ background: langColors[repo.lang] }} />
                        {repo.lang}
                      </span>
                      <span className="repo-stars">★ {repo.stars}</span>
                      {repo.demoUrl && (
                        <a className="repo-demo" href={repo.demoUrl} target="_blank" rel="noreferrer">
                          ↗ Live demo
                        </a>
                      )}
                    </div>
                    <div className="repo-glow" />
                  </MotionDiv>
                </TiltCard>
              ))}
            </div>
            <p className="repos-footer">
              <a href="https://github.com/diegodelgadog6?tab=repositories" target="_blank" rel="noreferrer">
                See all repositories on GitHub →
              </a>
            </p>
          </div>
        </MotionSection>

        {/* ═══════════ CONNECT / SOCIAL ═══════════ */}
        <MotionSection
          id="connect"
          className="section-connect"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerVariants}
        >
          <div className="section-container screen-frame">
            <MotionDiv variants={revealVariants}>
              <h2 className="section-title"><TiSocialAtCircular className="section-pin" /> Find me online</h2>
            </MotionDiv>

            <div className="socials-grid">
              {socialLinks.map((link, i) => {
                const { Icon } = link
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                    className="social-link"
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.06, y: -4 }}
                  >
                    <Icon className="social-icon" />
                    <span>{link.label}</span>
                  </motion.a>
                )
              })}
            </div>

            <MotionDiv className="contact-panel" variants={revealVariants}>
              <h3 className="contact-panel-title"><IoIosMail className="contact-panel-icon" /> Or send me a message</h3>
              <form onSubmit={handleSendEmail} className="contact-form">
                {[
                  { type: 'text', name: 'name', placeholder: 'Your name' },
                  { type: 'email', name: 'email', placeholder: 'Your email' },
                  { type: 'text', name: 'subject', placeholder: 'Subject' },
                ].map((field) => (
                  <div key={field.name} className="form-group">
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                ))}
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
          </div>
        </MotionSection>
      </main>
    </div>
  )
}

export default App
