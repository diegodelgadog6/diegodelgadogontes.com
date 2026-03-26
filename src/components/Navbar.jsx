import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <>
      <div className="container-navbar">
        <div className="links">
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/about">About Me</Link>
          </p>
          <p>
            <Link to="/projects">Projects</Link>
          </p>
          <p>
            <Link to="/contact">Contact Me</Link>
          </p>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;