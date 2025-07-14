import { useState } from 'react';
import logo from '../assets/logoR.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#inicio" className="navbar-logo">
          <img src={logo} alt="NutriAventura Logo" className="logo-image" />
          <h2>NutriAventura</h2>
        </a>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#inicio" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a href="#servicios" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li className="navbar-item">
            <a href="#sobre-nosotros" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Sobre Nosotros
            </a>
          </li>
          <li className="navbar-item">
            <a href="#recetas" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Recetas
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contacto" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
          <li className="navbar-item">
            <button className="navbar-cta">
              Comenzar Aventura
            </button>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
