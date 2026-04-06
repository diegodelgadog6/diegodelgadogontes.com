
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <main className="simple-page">
            <h1>Proyectos Destacados</h1>
            <p>Seleccion de proyectos publicados en mi GitHub.</p>
            <ul>
                <li>
                    MQTT Real-Time Viewer (Python, Flask, IoT) -
                    <a href="https://github.com/diegodelgadog6/mqtt-viewer" target="_blank" rel="noreferrer"> GitHub</a>
                </li>
                <li>
                    Chat Message Memory Management (C++, punteros, compactacion) -
                    <a href="https://github.com/diegodelgadog6/manejo-memoria-app-mensajeria-whatsapp" target="_blank" rel="noreferrer"> GitHub</a>
                </li>
                <li>
                    The Naval Battle (C++, logica de juego) -
                    <a href="https://github.com/diegodelgadog6/The-Naval-battle" target="_blank" rel="noreferrer"> GitHub</a>
                </li>
                <li>
                    Car Sales and Inventory Tracker (Python, reportes) -
                    <a href="https://github.com/diegodelgadog6/Car-Sales-and-Inventory-Tracker" target="_blank" rel="noreferrer"> GitHub</a>
                </li>
                <li>
                    Linked List Implementation (C++, estructuras de datos) -
                    <a href="https://github.com/diegodelgadog6/lista-ligada-cpp-desde-cero" target="_blank" rel="noreferrer"> GitHub</a>
                </li>
            </ul>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/contact">Ir a contacto</Link>
            </div>
        </main>
    );
};

export default Projects;