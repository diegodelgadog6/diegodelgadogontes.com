
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main className="simple-page">
            <h1>Welcome</h1>
            <p>Hi, I am Diego Delgado. This site showcases my projects, experience, and contact details.</p>
            <div className="simple-page-actions">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </main>
    );
};

export default Home;