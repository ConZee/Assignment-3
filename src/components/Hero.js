import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Pet Heaven!</h1>
        <p>Your one-stop destination to find and adopt your perfect furry friend.</p>
        <button>View Pets</button>
      </div>
    </section>
  );
};

export default Hero;