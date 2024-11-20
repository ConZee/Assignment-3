import React from 'react';
import Description from '../components/Description';
import PetPreview from '../components/PetPreview';  // Import the PetPreview carousel
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Description 
        title="Welcome to Pet Adoption"
        description="Find your perfect pet companion today!"
      />

      <Hero />
      <PetPreview />
    </div>
  );
};

export default Home;