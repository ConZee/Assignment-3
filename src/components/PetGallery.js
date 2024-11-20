import React from 'react';
import PetCard from './PetCard';  // Reusable card component
import './PetGallery.css';

const PetGallery = ({ pets }) => {
  return (
    <section>
      <h2>Available Pets for Adoption</h2>
      <div className="pet-gallery">
        {pets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </section>
  );
};

export default PetGallery;