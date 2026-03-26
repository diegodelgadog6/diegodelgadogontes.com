
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className="simple-page">
            <h1>Profile</h1>
            <p>Esta sección será tu perfil profesional.</p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/projects">Ir a proyectos</Link>
            </div>
        </main>
    );
};

export default About;