import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <main className="simple-page">
      <h1>Experience</h1>
      <p>Aqui podras mostrar tu timeline profesional cuando quieras.</p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/resume">Ir a resume</Link>
      </div>
    </main>
  )
}

export default Experience
