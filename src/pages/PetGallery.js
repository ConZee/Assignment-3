import React, { useContext, useState } from 'react';
import { PetContext } from '../context/Petcontext';
import { ClipLoader } from 'react-spinners';
import Description from '../components/Description';
import PetCard from '../components/PetCard';
import './PetGallery.css';

const PetGallery = () => {
  const { dogs, cats, loading, error } = useContext(PetContext);

  // Filter state
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  // Handle breed filter change
  const handleBreedChange = (e) => setSelectedBreed(e.target.value);

  // Handle age filter change
  const handleAgeChange = (e) => setSelectedAge(e.target.value);

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

  // Apply breed and age filters
  const filteredPets = pets.filter(pet => {
    const isBreedMatch = selectedBreed ? pet.breed === selectedBreed : true;
    
    let isAgeMatch = true;
    if (selectedAge === '<5') {
      isAgeMatch = pet.age < 5;
    } else if (selectedAge === '5-10') {
      isAgeMatch = pet.age >= 5 && pet.age <= 10;
    } else if (selectedAge === '>10') {
      isAgeMatch = pet.age > 10;
    }

    return isBreedMatch && isAgeMatch;
  });

  return (
    <div>
      <Description 
        title="Our Pets"
        description="Find your new best friend."
      />
      <div className="pet-gallery-container">
        {/* Filters */}
        <div className="filters">
          <label htmlFor="breed">Breed:</label>
          <select id="breed" value={selectedBreed} onChange={handleBreedChange}>
            <option value="">All Breeds</option>
            {[...new Set([...dogs.map(dog => dog.breed), ...cats.map(cat => cat.breed)])].map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>

          <label htmlFor="age">Age:</label>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="">All Ages</option>
            <option value="<5">&lt; 5 years</option>
            <option value="5-10">5 - 10 years</option>
            <option value=">10">&gt; 10 years</option>
          </select>
        </div>

        <div className="pet-gallery">
          {filteredPets.length === 0 ? (
            <div className="no-pets-message">No pets available at the moment.</div>
          ) : (
            filteredPets.map((pet, index) => (
              <PetCard key={index} pet={pet} />
            ))
          )}
        </div>
      </div>
  </div>
  );
};

export default PetGallery;
