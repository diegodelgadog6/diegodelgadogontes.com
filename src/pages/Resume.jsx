import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <main className="simple-page">
      <h1>Resume</h1>
      <p>You can view my resume at the following link:</p>
      <p>
        <a
          href="https://drive.google.com/file/d/14KJrOJlYpKMyzHbg9HglPNPas9sGh_0Q/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          View Resume Document
        </a>
      </p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/experience">Ir a experiencia</Link>
      </div>
    </main>
  )
}

export default Resume
