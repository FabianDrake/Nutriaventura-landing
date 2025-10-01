import { useState, useEffect } from 'react';
import logo from '../assets/logoR.png';
import './Navbar.css';

const Navbar = ({ navigateToTerms, navigateToHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Detectar sección activa en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'mision-vision', 'recetas', 'descargas'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection('terminos-condiciones');
    if (navigateToTerms) {
      navigateToTerms();
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection('inicio');
    if (navigateToHome) {
      navigateToHome();
    } else {
      // Si no hay función de navegación, hacer scroll al inicio
      document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#inicio" className="navbar-logo" onClick={handleHomeClick}>
          <img src={logo} alt="NutriAventura Logo" className="logo-image" />
          <h2>NutriAventura</h2>
        </a>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a 
              href="#inicio" 
              className={`navbar-link ${activeSection === 'inicio' ? 'active' : ''}`} 
              onClick={handleHomeClick}
            >
              Inicio
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#quienes-somos" 
              className={`navbar-link ${activeSection === 'quienes-somos' ? 'active' : ''}`} 
              onClick={() => handleSectionClick('quienes-somos')}
            >
              Quiénes Somos
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#mision-vision" 
              className={`navbar-link ${activeSection === 'mision-vision' ? 'active' : ''}`} 
              onClick={() => handleSectionClick('mision-vision')}
            >
              Misión y Visión
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#recetas" 
              className={`navbar-link ${activeSection === 'recetas' ? 'active' : ''}`} 
              onClick={() => handleSectionClick('recetas')}
            >
              Recetas
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#descargas" 
              className={`navbar-link ${activeSection === 'descargas' ? 'active' : ''}`} 
              onClick={() => handleSectionClick('descargas')}
            >
              Descargas
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#terminos-condiciones" 
              className={`navbar-link ${activeSection === 'terminos-condiciones' ? 'active' : ''}`} 
              onClick={handleTermsClick}
            >
              Términos y Privacidad
            </a>
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
