import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PetContext = createContext(); 

export const PetProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DogDetails = [
    { name: "Buddy", age: 3 },
    { name: "Charlie", age: 2 },
    { name: "Max", age: 4 },
    { name: "Bella", age: 1 },
    { name: "Lucy", age: 5 },
    { name: "Rocky", age: 2 },
    { name: "Luna", age: 3 },
    { name: "Milo", age: 6 },
    { name: "Coco", age: 1 },
    { name: "Daisy", age: 2 }
  ];

  const catDetails = [
    { name: "Fluffy", age: 3 },
    { name: "Milo", age: 2 },
    { name: "Bella", age: 4 },
    { name: "Lucy", age: 1 },
    { name: "Max", age: 5 },
    { name: "Charlie", age: 3 },
    { name: "Luna", age: 2 },
    { name: "Simba", age: 6 },
    { name: "Cleo", age: 1 },
    { name: "Oscar", age: 2 }
  ];

  const fetchPets = (type) => {
    let url, apiKey, details;

    if (type === 'dogs') {
      url = 'https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1';
      apiKey = 'live_63wXe0hjfffdKWbMWTGcUzH1BtGcMVDU2jZkk88I0PlWmeat4PcjRKD3jQoSunE8';
      details = DogDetails;
    } else if (type === 'cats') {
      url = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1';
      apiKey = 'live_Dg12qUvKvnBSdtVq2lFCNeWeSSG3Li2LdhkW4FZfFvMboAIaSTE2UOxHwXph0I1L';
      details = catDetails;
    }

    axios.get(url, { headers: { 'x-api-key': apiKey } })
      .then(response => {
        const petsData = response.data.map((pet, index) => ({
          image: pet.url,
          breed: pet.breeds[0]?.name,
          temperament: pet.breeds[0]?.temperament,
          name: details[index]?.name || 'Unknown',
          age: details[index]?.age || 0,
        }));

        if (type === 'dogs') {
          setDogs(petsData);
        } else {
          setCats(petsData);
        }
      })
      .catch(err => {
        setError(`Failed to fetch ${type}. Please try again later.`);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchPets('dogs');
    fetchPets('cats');
    setLoading(false);
  }, []);

  return (
    <PetContext.Provider value={{ dogs, cats, loading, error }}>
      {children}
    </PetContext.Provider>
  );
};