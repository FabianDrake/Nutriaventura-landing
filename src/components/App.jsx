import { useState } from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
import logo from '../assets/logoR.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <h1>Bienvenido a NutriAventura</h1>
            <p>Descubre una nueva forma de vivir saludablemente con nuestras aventuras nutricionales</p>
            <div className="hero-logo-container">
              <img src={logo} className="hero-logo" alt="NutriAventura Logo" />
            </div>
            
            <div className="download-section">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="google-play-button">
                <div className="google-play-content">
                  <div className="google-play-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <span className="download-text">Descargar en</span>
                    <span className="store-name">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                Aventuras completadas: {count}
              </button>
            </div>
          </div>
        </section>

        <section id="servicios" className="section">
          <h2>Nuestros Servicios</h2>
          <p>Contenido de servicios aquí...</p>
        </section>

        <section id="sobre-nosotros" className="section">
          <h2>Sobre Nosotros</h2>
          <p>Información sobre la empresa...</p>
        </section>

        <section id="recetas" className="section">
          <h2>Recetas Saludables</h2>
          <p>Deliciosas recetas nutritivas...</p>
        </section>

        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <p>Información de contacto...</p>
        </section>
      </main>
      <BottomNav />
    </>
  )
}

export default App
