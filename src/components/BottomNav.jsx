import './BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        <a href="#inicio" className="bottom-nav-item">
          <div className="bottom-nav-icon">🏠</div>
          <span>Inicio</span>
        </a>
        <a href="#quienes-somos" className="bottom-nav-item">
          <div className="bottom-nav-icon">👥</div>
          <span>Nosotros</span>
        </a>
        <a href="#recetas" className="bottom-nav-item">
          <div className="bottom-nav-icon">🥗</div>
          <span>Recetas</span>
        </a>
        <a href="#descargas" className="bottom-nav-item">
          <div className="bottom-nav-icon">�</div>
          <span>App</span>
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
