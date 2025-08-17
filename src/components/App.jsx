import { useState } from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import RecipeCarousel from './RecipeCarousel'
import logo from '../assets/logoR.png'
import fondoInicio from '../assets/fondo_inicio.png'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section 
          id="inicio" 
          className="hero-section" 
          style={{ 
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 255, 0.8) 50%, rgba(250, 250, 250, 0.9) 100%), url(${fondoInicio})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="hero-content">
            <div className="hero-badge">
              🌟 
            <br />

            </div>
            
            <h1>
              <span className="hero-highlight">NutriAventura</span><br />
              Tu Compañero de Vida Saludable
            </h1>
            
            <p className="hero-description">
              Únete a más de <strong>10,000 usuarios</strong> que ya transformaron su estilo de vida. 
              Descubre recetas personalizadas, alcanza tus metas y convierte cada comida en una aventura.
            </p>
            
            <div className="hero-features">
              <div className="feature-pill">🎯 100% Personalizado</div>
              <div className="feature-pill">🎮 Gamificado</div>
              <div className="feature-pill">📱 Fácil de Usar  <br /></div>
            </div>
            
            <div className="hero-logo-container">
              <img src={logo} className="hero-logo" alt="NutriAventura Logo" />
            </div>
            
            <div className="scroll-indicator">
              <div className="scroll-text">Descubre más</div>
              <a href="#quienes-somos" className="scroll-arrow">
                <span className="arrow-bounce">↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* Quiénes Somos Section */}
        <section id="quienes-somos" className="section">
          <div className="container">
            <div className="section-badge">Sobre Nosotros</div>
            <h2>¿Quiénes Somos?</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p>Somos un equipo apasionado de nutricionistas, desarrolladores y diseñadores que creemos firmemente en el poder transformador de una alimentación consciente.</p>
              <p>NutriAventura nació de la visión de hacer que la nutrición saludable sea accesible, divertida y personalizada para cada persona, combinando ciencia nutricional avanzada con elementos de gamificación.</p>
              
              <div className="section-stats" style={{ marginTop: '3rem' }}>
                <div className="stat-item">
                  <div className="stat-number">🎯</div>
                  <h4>Personalizado</h4>
                  <p>Planes únicos para ti</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">🎮</div>
                  <h4>Gamificado</h4>
                  <p>Hacer dieta divertido</p>
                </div>
                <div className="stat-item">
                  <div className="stat-number">🔬</div>
                  <h4>Científico</h4>
                  <p>Basado en evidencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión Section */}
        <section id="mision-vision" className="section">
          <div className="container">
            <div className="section-badge">Nuestro Propósito</div>
            <h2>Misión y Visión</h2>
            <div className="grid grid-2" style={{ marginTop: '4rem' }}>
              <div className="mission-card">
                <div className="mission-icon">🚀</div>
                <h3>Nuestra Misión</h3>
                <p>Democratizar el acceso a una nutrición de calidad mediante tecnología innovadora que transforma los hábitos alimenticios en experiencias gamificadas y personalizadas.</p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🌟</div>
                <h3>Nuestra Visión</h3>
                <p>Ser la plataforma líder mundial en nutrición gamificada, creando una comunidad global donde millones de personas disfruten del proceso de comer saludable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recetas Section */}
        <section id="recetas" className="section">
          <div className="container">
            <div className="section-badge">Nutrición Deliciosa</div>
            <h2>Recetas Nutritivas</h2>
            <p>Descubre un mundo de sabores saludables con nuestras recetas cuidadosamente seleccionadas. Cada plato es una aventura culinaria que nutre tu cuerpo y deleita tu paladar.</p>
            
            <div className="recipe-features" style={{ marginTop: '2rem', marginBottom: '3rem' }}>
              <div className="feature-tag">⚡ Rápidas</div>
              <div className="feature-tag">🥗 Saludables</div>
              <div className="feature-tag">😋 Deliciosas</div>
              <div className="feature-tag">📱 Paso a paso</div>
            </div>
            
            <div style={{ marginTop: '4rem' }}>
              <RecipeCarousel />
            </div>
            
            <div className="recipe-cta" style={{ marginTop: '3rem' }}>
              <p>¿Te gustaron las recetas?</p>
              <a href="#descargas" className="btn btn-primary">Descarga la App para Más</a>
            </div>
          </div>
        </section>

        {/* Descargas Section */}
        <section id="descargas" className="section highlight-section">
          <div className="container text-center">
            <div className="section-badge">Comienza Ahora</div>
            <h2>Descarga Nuestra App</h2>
            <p>¡Lleva NutriAventura contigo! Descarga nuestra aplicación y comienza tu viaje hacia una vida más saludable.</p>
            
            <div className="download-benefits" style={{ margin: '3rem 0' }}>
              <div className="benefit-item">
                <div className="benefit-icon">📊</div>
                <h4>Seguimiento Personalizado</h4>
                <p>Monitorea tu progreso</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <h4>Metas Alcanzables</h4>
                <p>Objetivos adaptados a ti</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">👥</div>
                <h4>Comunidad Activa</h4>
                <p>Apoyo y motivación</p>
              </div>
            </div>
            
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
                <p><strong>🍎 Nutricionista Principal</strong></p>
                <p>Especialista en nutrición deportiva con más de 10 años de experiencia en la creación de planes alimenticios personalizados.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">Nutrición Deportiva</span>
                  <span className="expertise-tag">Planes Personalizados</span>
                </div>
              </div>
              
              <div className="creator-card">
                <div className="creator-image">👩‍💻</div>
                <h3>Axel Flores</h3>
                <p><strong>💻 Desarrollador Frontend</strong></p>
                <p>Experto en experiencia de usuario y diseño de interfaces que hacen que la tecnología sea accesible y atractiva.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">React Native</span>
                  <span className="expertise-tag">UX Design</span>
                </div>
              </div>
              
              <div className="creator-card">
                <div className="creator-image">👨‍🎨</div>
                <h3>Diego Soto</h3>
                <p><strong>🎨 Diseñador UX/UI</strong></p>
                <p>Creativo apasionado por diseñar experiencias digitales que conecten emocionalmente con los usuarios.</p>
                <div className="creator-expertise">
                  <span className="expertise-tag">UI Design</span>
                  <span className="expertise-tag">Gamificación</span>
                </div>
              </div>
            </div>
            
            <div className="team-cta" style={{ marginTop: '4rem' }}>
              <p>¿Quieres formar parte de nuestro equipo?</p>
              <a href="#footer" className="btn btn-secondary">Contáctanos</a>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section id="terminos" className="section">
          <div className="container">
            <div className="section-badge">Información Legal</div>
            <h2>Términos y Condiciones</h2>
            <p>Información importante sobre el uso de NutriAventura</p>
            
            <div className="terms-summary" style={{ margin: '3rem 0' }}>
              <div className="term-card">
                <div className="term-icon">✅</div>
                <h4>Uso Seguro</h4>
                <p>App diseñada para fines educativos e informativos</p>
              </div>
              <div className="term-card">
                <div className="term-icon">🔒</div>
                <h4>Privacidad</h4>
                <p>Tus datos están protegidos y seguros</p>
              </div>
              <div className="term-card">
                <div className="term-icon">⚖️</div>
                <h4>Responsabilidad</h4>
                <p>Consulta siempre con profesionales de la salud</p>
              </div>
            </div>
            
            <div className="terms-details" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', marginTop: '3rem' }}>
              <details className="term-section">
                <summary><strong>1. Aceptación de los Términos</strong></summary>
                <p>Al utilizar NutriAventura, aceptas estos términos y condiciones en su totalidad.</p>
              </details>
              
              <details className="term-section">
                <summary><strong>2. Uso de la Aplicación</strong></summary>
                <p>NutriAventura está diseñada para fines educativos e informativos. Siempre consulta con un profesional de la salud antes de realizar cambios significativos en tu dieta.</p>
              </details>
              
              <details className="term-section">
                <summary><strong>3. Privacidad de Datos</strong></summary>
                <p>Protegemos tu información personal según nuestra política de privacidad. No compartimos tus datos con terceros sin tu consentimiento.</p>
              </details>
              
              <details className="term-section">
                <summary><strong>4. Responsabilidad</strong></summary>
                <p>El usuario es responsable del uso apropiado de la información proporcionada por la aplicación.</p>
              </details>
              
              <details className="term-section">
                <summary><strong>5. Modificaciones</strong></summary>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios se notificarán a través de la aplicación.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <h3>NutriAventura</h3>
          <p>Transformando vidas a través de la nutrición consciente y la gamificación.</p>
          <p>Únete a nuestra comunidad y descubre una nueva forma de relacionarte con la comida.</p>
          
          <div className="footer-navigation" style={{ margin: '2rem 0' }}>
            <a href="#inicio" className="footer-nav-link">Inicio</a>
            <a href="#quienes-somos" className="footer-nav-link">Nosotros</a>
            <a href="#recetas" className="footer-nav-link">Recetas</a>
            <a href="#descargas" className="footer-nav-link">Descargar</a>
            <a href="#creadores" className="footer-nav-link">Equipo</a>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos en Redes Sociales</h4>
            <div className="social-links">
              <a href="#" className="social-link">📘 Facebook</a>
              <a href="#" className="social-link">📷 Instagram</a>
              <a href="#" className="social-link">🐦 Twitter</a>
              <a href="#" className="social-link">💼 LinkedIn</a>
            </div>
          </div>
          
          <div className="footer-contact" style={{ margin: '2rem 0' }}>
            <h4>¿Tienes preguntas?</h4>
            <p>📧 contacto@nutriaventura.com</p>
            <p>📱 +1 (555) 123-4567</p>
          </div>
          
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            &copy; 2025 NutriAventura. Todos los derechos reservados.
          </p>
        </div>
      </footer>
      
      <BottomNav />
    </>
  )
}

export default App
