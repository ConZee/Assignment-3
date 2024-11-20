// PetPreview.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from './PetCard';  // Assuming PetCard is reusable

const PetPreview = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://portal.thatapicompany.com/api/pets')  // Modify URL based on actual endpoint
      .then(response => {
        setPets(response.data.slice(0, 6));  // Show only 6 pets as a preview
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch pets');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pet-preview">
      {pets.map(pet => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetPreview;