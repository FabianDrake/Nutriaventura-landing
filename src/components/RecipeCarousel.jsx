import { useState, useEffect } from 'react';
import './RecipeCarousel.css';

const RecipeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recipes = [
    {
      id: 1,
      title: "Smoothie Verde Energizante",
      description: "Una mezcla perfecta de espinacas, plátano y mango para comenzar tu día con energía.",
      image: "🥬",
      time: "5 min"
    },
    {
      id: 2,
      title: "Bowl de Quinoa Mediterráneo",
      description: "Quinoa con verduras frescas, aceitunas y tomates cherry.",
      image: "🥗",
      time: "15 min"
    },
    {
      id: 3,
      title: "Salmón con Verduras",
      description: "Salmón fresco acompañado de verduras al vapor con hierbas aromáticas.",
      image: "🐟",
      time: "20 min"
    },
    {
      id: 4,
      title: "Ensalada de Frutas Tropicales",
      description: "Piña, mango, papaya y kiwi con un toque de menta fresca.",
      image: "🥭",
      time: "10 min"
    },
    {
      id: 5,
      title: "Wrap de Pollo y Aguacate",
      description: "Tortilla integral con pollo, aguacate y lechuga fresca.",
      image: "🌯",
      time: "12 min"
    },
    {
      id: 6,
      title: "Overnight Oats con Berries",
      description: "Avena remojada con arándanos y fresas naturales.",
      image: "🫐",
      time: "5 min"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recipes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Calcular las tarjetas visibles (3 tarjetas por vez)
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % recipes.length;
      visibleCards.push(recipes[index]);
    }
    return visibleCards;
  };

  return (
    <div className="simple-carousel-wrapper">
      <div className="carousel-container">
        <div className="cards-container">
          {getVisibleCards().map((recipe, index) => (
            <div key={`${recipe.id}-${currentSlide}-${index}`} className="recipe-card">
              <div className="recipe-image">{recipe.image}</div>
              <div className="recipe-info">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-time">
                  <span className="time-icon">⏱️</span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-nav prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="carousel-nav next" onClick={nextSlide}>
          <span>›</span>
        </button>
      </div>
      
      <div className="carousel-dots">
        {recipes.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeCarousel;
