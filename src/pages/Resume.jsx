import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <main className="simple-page">
      <h1>Resume</h1>
      <p>Placeholder para tu CV. Luego aqui puedes incrustar PDF o descargar archivo.</p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/experience">Ir a experiencia</Link>
      </div>
    </main>
  )
}

export default Resume
