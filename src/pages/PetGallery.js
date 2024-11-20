import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';
import './PetGallery.css';

const PetGallery = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const apiKey = 'live_Dg12qUvKvnBSdtVq2lFCNeWeSSG3Li2LdhkW4FZfFvMboAIaSTE2UOxHwXph0I1L';
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1', {
          headers: { 'x-api-key': apiKey },
        });

        const petsData = response.data.map((item, index) => ({
          id: item.id,
          name: `Pet ${index + 1}`, // Placeholder name
          age: `${2 + index} years`, // Example age
          breed: item.breeds?.[0]?.name || 'Unknown',
          temperament: item.breeds?.[0]?.temperament || 'Unknown',
          url: item.url,
        }));

        setPets(petsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pets. Please try again later.');
        setLoading(false);
      }
    };

    fetchPets();
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