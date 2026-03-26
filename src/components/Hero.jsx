
import "./Hero.css"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div>
        <p className="main-text">
          Architecting <span className="secondary-text">Digital Artifacts</span>
        </p>

        <p>
            Full-stack developer specializing in building high-performance, visually
            stunning web experiences that live at the intersection of design and data.
        </p>

        <div className="btn-container">
          <button className="btn" onClick={() => navigate('/projects')}>View Projects</button>
          <button className="btn" onClick={() => navigate('/contact')}>Contact Me</button>
        </div>


    </div>
    

  );
};

export default Hero;