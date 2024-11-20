import React, { useContext } from 'react';
import { PetContext } from '../context/context';
import PetCard from '../components/PetCard';
import { ClipLoader } from 'react-spinners';
import './PetGallery.css';

const PetGallery = () => {
  const { dogs, cats, loading, error } = useContext(PetContext);

  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader color="#3498db" size={50} />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Combine dogs and cats into a single array
  const pets = [...dogs, ...cats];

  if (pets.length === 0) {
    return <div>No pets available at the moment.</div>;
  }

  return (
    <div className="pet-gallery">
      {pets.map((pet, index) => (
        <PetCard key={index} pet={pet} />
      ))}
    </div>
  );
};

export default PetGallery;