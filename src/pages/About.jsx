
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className="simple-page">
            <h1>Sobre Mi</h1>
            <p>
                Soy Diego Alejandro Delgado Gontes, estudiante de Ingenieria en Ciencias Computacionales y Tecnologias de la Informacion.
            </p>
            <p>
                Actualmente estudio en Tecnologico de Monterrey, Campus Guadalajara, y me enfoco en crear soluciones practicas
                en software, datos e IoT.
            </p>
            <p>
                Trabajo con Python, C++, MATLAB, SQL, HTML/CSS, Git y Linux. Me gusta documentar procesos y convertir ideas complejas
                en implementaciones claras.
            </p>
            <p>
                Sitio personal: <a href="https://diegodelgadogontes.com" target="_blank" rel="noreferrer">diegodelgadogontes.com</a>
            </p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/projects">Ir a proyectos</Link>
            </div>
        </main>
    );
};

export default About;