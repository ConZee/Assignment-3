import React from 'react';
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img 
        src={pet.image} 
        alt={pet.name} 
        className="pet-image" 
      />
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>Age: {pet.age || 'Not Available'}</p>
        <p>Breed: {pet.breed}</p>
        <p>Temperament: {pet.temperament || 'Unknown'}</p>
      </div>
      <button className="adopt-btn">Adopt Me</button>
    </div>
  );
};

export default PetCard;