import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <main className="simple-page">
      <h1>CV y Enlaces</h1>
      <p>Puedes revisar mi CV y perfiles publicos en los siguientes enlaces.</p>
      <p>
        <a
          href="https://drive.google.com/file/d/14KJrOJlYpKMyzHbg9HglPNPas9sGh_0Q/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          Ver CV
        </a>
      </p>
      <p>
        <a href="https://github.com/diegodelgadog6" target="_blank" rel="noreferrer">GitHub</a> |{' '}
        <a href="https://www.linkedin.com/in/diegodelgadog6" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
        <a href="https://x.com/diegodelgadog6" target="_blank" rel="noreferrer">X</a>
      </p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/experience">Ir a experiencia</Link>
      </div>
    </main>
  )
}

export default Resume
