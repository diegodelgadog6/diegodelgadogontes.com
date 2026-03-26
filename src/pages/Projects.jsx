
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <main className="simple-page">
            <h1>Projects</h1>
            <p>Aquí irán tus proyectos y casos de estudio.</p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/contact">Ir a contacto</Link>
            </div>
        </main>
    );
};

export default Projects;