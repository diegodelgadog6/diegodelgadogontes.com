
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className="simple-page">
            <h1>About Me</h1>
            <p>
                Hi, I'm Diego — a Computer Science & Technology student at Tecnológico de Monterrey (Campus Guadalajara) with a passion for turning ideas into real, working software.
            </p>
            <p>
                On the web side, I enjoy the full stack: from designing interfaces with React and Tailwind CSS to wiring up backends with Node.js and Flask, adding real-time features with Socket.IO, or connecting everything to a MySQL database. Most of my recent projects live on GitHub and are deployed on Vercel.
            </p>
            <p>
                I also have a thing for hardware. One of my favorite projects, AmpelIntelligence, combines an ESP32, a Raspberry Pi, MQTT, and Flask to monitor urban traffic and air quality in real time — the kind of work where physical and digital meet.
            </p>
            <p>
                When I'm not writing code, I might be designing a game level in Godot or tinkering with a new idea that probably sounds weird until it works.
            </p>
            <p>
                Open to internships, collaborations, and interesting problems. Let's build something.
            </p>
            <div className="simple-page-actions">
                <Link to="/">Volver al inicio</Link>
                <Link to="/projects">Ir a proyectos</Link>
            </div>
        </main>
    );
};

export default About;