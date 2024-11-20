import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import './PetGallery.css';

const PetGallery = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'live_Dg12qUvKvnBSdtVq2lFCNeWeSSG3Li2LdhkW4FZfFvMboAIaSTE2UOxHwXph0I1L'; 

    // Fetch data from The Cat API
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1', {
      headers: {
        'x-api-key': apiKey  // Set the API key in the request headers
      }
    })
      .then(response => {
        // Transform the response data to the format we need
        const petsData = response.data.map(pet => ({
          id: pet.id,
          url: pet.url,
          category: pet.categories && pet.categories.length ? pet.categories[0].name : 'Uncategorized', // Fallback category
          width: pet.width,
          height: pet.height
        }));

        setPets(petsData);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setError('Failed to fetch pets. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (pets.length === 0) {
    return <div>No pets available at the moment.</div>;
  }

  return (
    <div className="pet-gallery">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} /> 
      ))}
    </div>
  );
};

export default PetGallery;