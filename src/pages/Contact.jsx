
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <main className="simple-page">
            <h1>Contact</h1>
            <p>Esta pantalla se puede conectar luego a un formulario o WhatsApp.</p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/about">Ir a perfil</Link>
            </div>
        </main>
    );
};

export default Contact;