import React from 'react';
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img 
        src={pet.url} 
        alt={pet.name} 
        className="pet-image" 
      />
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>Age: {pet.age}</p>
        <p>Breed: {pet.breed}</p>
        <p>Temperament: {pet.temperament}</p>
      </div>
      <button className="adopt-btn">Adopt Me</button>
    </div>
  );
};

export default PetCard;