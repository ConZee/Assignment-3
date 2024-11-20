import React, { useEffect, useState } from 'react';
import Description from '../components/Description';
import PetPreview from '../components/PetPreview';  // Corrected the import path
import Hero from '../components/Hero';
import axios from 'axios';

const Home = () => {
  // State to store the fetched pets data
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://portal.thatapicompany.com/api/pets')  // Replace with correct endpoint
      .then((response) => {
        setPets(response.data); // Assuming the data is in 'response.data'
      })
      .catch((error) => {
        console.error('Error fetching pet data:', error);
      });
  }, []);

  return (
    <div>
      <Description 
        title="Welcome to Pet Adoption"
        description="Find your perfect pet companion today!"
      />
      {/* Hero Section */}
      <Hero />

      {/* Pet Preview Section (Smaller Showcase of Pets) */}
      <PetPreview pets={pets} />
    </div>
  );
};

export default Home;