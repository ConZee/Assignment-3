import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h1>Welcome to Pet Heaven!</h1>
        <p>Your one-stop destination to find and adopt your perfect furry friend.</p>
        <Link to="/gallery">
          <button className="hero-button">View Pets</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;