
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className="simple-page">
            <h1>About Me</h1>
            <p>
                Hi! I am Diego Delgado, a Computer Science and Technology student at Tecnologico de Monterrey.
            </p>
            <p>
                I focus on building practical solutions with clear logic, from software development in Python and C++ to data,
                SQL, and front-end projects.
            </p>
            <p>
                I also enjoy documenting processes, mentoring colleagues, and turning complex ideas into simple, useful systems.
            </p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/projects">Ir a proyectos</Link>
            </div>
        </main>
    );
};

export default About;