import { Link } from 'react-router-dom'

const Experience = () => {
  return (
    <main className="simple-page">
      <h1>Experience</h1>
      <p>2023 - Present: Computer Science and Technology student at Tecnologico de Monterrey.</p>
      <p>Project focus: data structures, software requirements, SQL, and practical application building.</p>
      <p>Technical practice: Python, C++, MATLAB, HTML, CSS, Git/GitHub, Linux, Arduino, and IoT.</p>
      <div className="simple-page-actions">
        <Link to="/">Volver al inicio</Link>
        <Link to="/resume">Ir a resume</Link>
      </div>
    </main>
  )
}

export default Experience
