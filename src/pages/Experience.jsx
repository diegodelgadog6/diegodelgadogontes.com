import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <main className="simple-page">
      <h1>Experiencia</h1>
      <p>2023 - Actualidad: Estudiante de Ingenieria en Ciencias Computacionales y Tecnologias de la Informacion.</p>
      <p>Tecnologico de Monterrey, Campus Guadalajara (Zapopan, Jalisco, Mexico).</p>
      <p>Enfoque: estructuras de datos, requerimientos de software, SQL, desarrollo web y proyectos de IoT en tiempo real.</p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/resume">Ir a resume</Link>
      </div>
    </main>
  )
}

export default Experience
