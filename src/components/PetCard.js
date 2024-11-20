import React from 'react';
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>{pet.breed}</p>
      <button>Adopt Now</button>
    </div>
  );
};

export default PetCard;