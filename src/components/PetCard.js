import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.url} alt={pet.category} />
      <div className="pet-info">
        {pet.breeds && pet.breeds.length > 0 && (
          <span>Breed: {pet.breeds[0].name}</span>
        )}
        {pet.categories && pet.categories.length > 0 && (
          <span>Category: {pet.categories[0].name}</span>
        )}
      </div>
    </div>
  );
};

export default PetCard;