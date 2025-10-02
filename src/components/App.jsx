import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import RecipeCarousel from './RecipeCarousel'
import TermsAndPrivacy from './TermsAndPrivacy'
import logo from '../assets/logoR.png'
import fondoInicio from '../assets/fondo_inicio.png'
import facebookIcon from '../assets/facebook_icon.png'
import instagramIcon from '../assets/Instagram_icon.png'
import tiktokIcon from '../assets/Tiktok_icon.png'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')

  // Detectar cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) // Quitar el #
      if (hash === 'terminos-condiciones') {
        setCurrentView('terms')
      } else {
        setCurrentView('home')
      }
    }

    // Ejecutar al cargar la página
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  // Función para navegar
  const navigateToTerms = () => {
    window.location.hash = 'terminos-condiciones'
    setCurrentView('terms')
  }

  const navigateToHome = () => {
    window.location.hash = ''
    setCurrentView('home')
  }

  // Función para ir al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Si estamos en la vista de términos, mostrar solo esa vista
  if (currentView === 'terms') {
    return (
      <>
        <Navbar navigateToHome={navigateToHome} />
        <TermsAndPrivacy navigateToHome={navigateToHome} />
      </>
    )
  }

  // Vista principal (home)
  return (
    <>
      <Navbar navigateToTerms={navigateToTerms} navigateToHome={navigateToHome} />
      <main>
        {/* Hero Section - Mejorado */}
        <section 
          id="inicio" 
          className="hero-section" 
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 255, 0.9) 50%, rgba(250, 250, 250, 0.95) 100%), url(${fondoInicio})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">🌟 Nueva Experiencia Culinaria</span>
            </div>
            
            <div className="hero-titles">
              <h1 className="hero-main-title">
                <span className="hero-highlight">NutriAventura</span>
              </h1>
              <h2 className="hero-subtitle">
                Mejorando las comidas familiares con 
                <span className="highlight-text"> inteligencia artificial</span>
              </h2>
            </div>
            
            <p className="hero-description">
              Únete a crear <strong className="stats-highlight">mejores comidas familiares</strong> con nuestra nueva plataforma de ideas culinarias.
            </p>
            
            <div className="disclaimer-box" style={{
              background: 'rgba(255, 243, 205, 0.9)',
              border: '2px solid #FFA726',
              borderRadius: '12px',
              padding: '1rem',
              margin: '1.5rem 0',
              fontSize: '0.9rem',
              textAlign: 'center',
              color: '#F57F17'
            }}>
              <p style={{ margin: 0, fontWeight: '600' }}>
                ⚠️ <strong>Importante:</strong> Esta app es solo para ayudar a los papás a mejorar sus comidas familiares. 
                NO es para diagnósticos médicos ni pretende ser la verdad absoluta. 
                Siempre consulta con profesionales de la salud para decisiones importantes sobre alimentación.
              </p>
            </div>
            
            <div className="hero-cta-buttons">
              <a href="#descargas" className="btn-primary-hero">
                <span>📱</span>
                Descargar App
              </a>
              <a href="#quienes-somos" className="btn-secondary-hero">
                <span>🎯</span>
                Conocer Más
              </a>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">🎮</span>
                <span className="feature-text">Entretenido</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🤖</span>
                <span className="feature-text">IA Personalizada</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Análisis de Comidas</span>
              </div>
            </div>
            
            <div className="hero-logo-container">
              <img 
                src={logo} 
                className="hero-logo animate-float clickable-logo" 
                alt="NutriAventura Logo" 
                onClick={scrollToTop}
                style={{ cursor: 'pointer' }}
              />
            </div>
            
            <div className="scroll-indicator">
              <div className="scroll-text">Descubre más</div>
              <a href="#quienes-somos" className="scroll-arrow">
                <span className="arrow-bounce">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* Quiénes Somos Section - Rediseñada */}
        <section id="quienes-somos" className="section-modern about-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <span className="badge-icon">👥</span>
                Sobre Nosotros
              </div>
              <h2 className="section-title">¿Quiénes Somos?</h2>
              <p className="section-subtitle">
                Un equipo apasionado que ayuda a las familias a cocinar mejor
              </p>
            </div>
            
            <div className="about-content">
              <div className="about-text">
                <div className="about-card">
                  <div className="card-icon">🎯</div>
                  <h3>Nuestra Historia</h3>
                  <p>
                    Somos un equipo apasionado de desarrolladores y diseñadores de software que creemos 
                    firmemente en el poder de crear mejores momentos familiares alrededor de la comida.
                  </p>
                </div>
                
                <div className="about-card">
                  <div className="card-icon">🚀</div>
                  <h3>Nuestra Innovación</h3>
                  <p>
                    NutriAventura nació de la visión de hacer que cocinar en familia sea más fácil 
                    y divertido para cada hogar, combinando ideas culinarias con tecnología 
                    innovadora de Inteligencia Artificial.
                  </p>
                </div>
              </div>

              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-icon">🎯</div>
                  <div className="stat-content">
                    <h4>Personalizado</h4>
                    <p>Planes únicos para cada niño</p>
                    <span className="stat-number">100%</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">🥬</div>
                  <div className="stat-content">
                    <h4>Accesible</h4>
                    <p>Versión gratuita disponible</p>
                    <span className="stat-number">Free</span>
                  </div>
                </div>
                
                <div className="stat-card">
                  <div className="stat-icon">🔬</div>
                  <div className="stat-content">
                    <h4>Analizado</h4>
                    <p>Basado en tus preferencias</p>
                    <span className="stat-number">100%</span>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión Section - Rediseñada */}
        <section id="mision-vision" className="section-modern mission-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <span className="badge-icon">🎯</span>
                Nuestro Propósito
              </div>
              <h2 className="section-title">Misión y Visión</h2>
              <p className="section-subtitle">
                Transformando el futuro de las comidas familiares
              </p>
            </div>
            
            <div className="mission-vision-grid">
              <div className="mission-vision-card mission-card">
                <div className="card-header">
                  <div className="card-icon-large">🚀</div>
                  <h3>Nuestra Misión</h3>
                </div>
                <div className="card-content">
                  <p>
                    Democratizar el acceso a mejores ideas culinarias mediante tecnología 
                    innovadora que transforma el momento de cocinar en experiencias 
                    gamificadas y personalizadas para toda la familia.
                  </p>
                  <div className="mission-features">
                    
                    <div className="feature-tag">🤖 IA Personalizada</div>
                    <div className="feature-tag">�‍👩‍👧‍👦 Comida Familiar</div>
                  </div>
                </div>
              </div>
              
              <div className="mission-vision-card vision-card">
                <div className="card-header">
                  <div className="card-icon-large">🌟</div>
                  <h3>Nuestra Visión</h3>
                </div>
                <div className="card-content">
                  <p>
                    Ser la plataforma líder mundial en ideas culinarias gamificadas, creando una 
                    comunidad global donde millones de familias disfruten del proceso 
                    de cocinar y comer juntas.
                  </p>
                  <div className="vision-goals">
                    <div className="goal-item">
                      <span className="goal-icon">🌍</span>
                      <span>Impacto Social</span>
                    </div>
                    <div className="goal-item">
                      <span className="goal-icon">👨‍👩‍👧‍👦</span>
                      <span>Millones de Familias</span>
                    </div>
                    <div className="goal-item">
                      <span className="goal-icon">🍽️</span>
                      <span>Comidas Memorables</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recetas Section */}
        <section id="recetas" className="section">
          <div className="container">
            <div className="section-badge">Cocina Deliciosa</div>
            <h2>Recetas Familiares</h2>
            <p>Descubre un mundo de sabores deliciosos con nuestras recetas cuidadosamente seleccionadas. Cada plato es una aventura culinaria que une a tu familia y deleita el paladar de todos.</p>
            
            
            
            {/* <div style={{ marginTop: '4rem' }}>
              <RecipeCarousel />
            </div> */}
          </div>
        </section>

        {/* Descargas Section */}
        <section id="descargas" className="section highlight-section">
          <div className="container text-center">
            <div className="section-badge">Comienza Ahora</div>
            <h2>Descarga Nuestra App</h2>
            <p>¡Lleva NutriAventura contigo! Descarga nuestra aplicación y comienza tu viaje hacia mejores comidas familiares.</p>
            
            
            
            <div className="qr-section" style={{ marginTop: '4rem' }}>
              <div className="qr-container">
                <div className="qr-code">
                  📱
                </div>
                <p><strong>Escanea el código QR</strong></p>
                <p>O descarga directamente desde:</p>
                
                <div className="download-section">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="google-play-button">
                    <div className="google-play-content">
                      <div className="google-play-icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.609 1.814L13.792 12L3.609 22.186C3.538 22.257 3.5 22.353 3.5 22.453V1.547C3.5 1.647 3.538 1.743 3.609 1.814Z" fill="url(#paint0_linear)"/>
                          <path d="M20.683 10.748L16.726 8.498L13.792 12L16.726 15.502L20.683 13.252C21.439 12.808 21.439 11.192 20.683 10.748Z" fill="url(#paint1_linear)"/>
                          <path d="M13.792 12L3.609 1.814C4.362 1.061 5.638 1.262 6.753 1.978L13.792 12Z" fill="url(#paint2_linear)"/>
                          <path d="M13.792 12L6.753 22.022C5.638 22.738 4.362 22.939 3.609 22.186L13.792 12Z" fill="url(#paint3_linear)"/>
                          <defs>
                            <linearGradient id="paint0_linear" x1="3.5" y1="1.547" x2="3.5" y2="22.453" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#00D4FF"/>
                              <stop offset="1" stopColor="#007DFF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear" x1="13.792" y1="8.498" x2="20.683" y2="13.252" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FFB300"/>
                              <stop offset="1" stopColor="#FF8F00"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear" x1="3.609" y1="1.814" x2="13.792" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#00E676"/>
                              <stop offset="1" stopColor="#00C853"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear" x1="3.609" y1="22.186" x2="13.792" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#FF1744"/>
                              <stop offset="1" stopColor="#D50000"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="google-play-text">
                        <span className="download-text">Disponible en</span>
                        <span className="store-name">Google Play</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="download-footer" style={{ marginTop: '2rem' }}>
                <p className="small-text">✅ Gratis para descargar • ✅ Sin anuncios • ✅ Seguro y privado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Creators Section */}
        <section id="creadores" className="section">
          <div className="container">
            <div className="section-badge">Nuestro Equipo</div>
            <h2>Los Creadores de NutriAventura</h2>
            <p>Conoce a los profesionales apasionados que hacen posible tu aventura nutricional</p>
            
            <div className="grid grid-3" style={{ marginTop: '4rem' }}>
              <div className="creator-card">
                <div className="creator-image">👨‍💻</div>
                <h3>Fabian Talavera</h3>
                <p><strong>💻 Proyect Manager</strong></p>
                <p>Apasionado desarrollador Frontend, constructor de interfaces creativas y experiencia de usuario</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">Desarrollador FrontEnd</span>
                  <span className="expertise-tag">Diseño de Aplicacion y UX Design</span>
                  <span className="expertise-tag">Creador del proyecto</span>
                </div>
              </div>
              
              <div className="creator-card">
                <div className="creator-image">👨‍💻</div>
                <h3>Axel Flores</h3>
                <p><strong>💻 Desarrollador Frontend</strong></p>
                <p>Experto en desarrollo de aplicaciones móviles con React Native.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">React Native</span>
                  <span className="expertise-tag">UX Design</span>
                </div>
              </div>
              
              <div className="creator-card">
                <div className="creator-image">👨‍💻</div>
                <h3>Diego Soto</h3>
                <p><strong>💻 Desarrollador Backend</strong></p>
                <p>Apasionado por crear soluciones innovadoras que mejoren la experiencia del usuario.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">UI Design</span>
                  <span className="expertise-tag">Database Management</span>
                </div>
              </div>
              <div className="creator-card">
                <div className="creator-image">👨‍💻</div>
                <h3>Manuel Rios</h3>
                <p><strong>💻 Desarrollador Backend</strong></p>
                <p>Creativo apasionado por el tema de la Inteligencia artificial.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">IA Design</span>
                  <span className="expertise-tag">Gamificación</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-background"></div>
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                <img src={logo} alt="NutriAventura Logo" className="footer-logo-img" />
                <h3>NutriAventura</h3>
              </div>
    
            </div>
            
            <div className="footer-sections">
              
              
              <div className="footer-contact">
                <h4>Contacto</h4>
                <div className="contact-info">
                  <p><span className="contact-icon">📧</span> nutriaventura.app@gmail.com</p>
                  <p><span className="contact-icon">📱</span> +52 (33) 123-4567</p>
                  <p><span className="contact-icon">📍</span> Guadalajara, México</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos en Redes Sociales</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1MsTKxxaxL/" className="social-link facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/nutriaventura_app?igsh=bmdmYzFxZnBtNTVs" className="social-link instagram">
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@nutriaventura_app?_t=ZS-8zF8QvEE8bl&_r=1" className="social-link tiktok">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>&copy; 2025 NutriAventura. Todos los derechos reservados.</p>
              <div className="footer-legal">
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToTerms(); }}>Términos y Condiciones</a>
                <span>•</span>
                <a href="#" onClick={(e) => { e.preventDefault(); navigateToTerms(); }}>Política de Privacidad</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <BottomNav />
    </>
  )
}

export default App
