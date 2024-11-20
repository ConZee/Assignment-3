import React from 'react';
import PetGallery from '../components/PetGallery';
import Hero from '../components/Hero';

const Home = () => {
  const pets = [
    {
      name: 'Bella',
      breed: 'Labrador',
      age: '2 years',
      description: 'Friendly and energetic',
      imageUrl: 'https://placekitten.com/200/300',
    },
    {
      name: 'Max',
      breed: 'Bulldog',
      age: '3 years',
      description: 'Calm and loving',
      imageUrl: 'https://placekitten.com/201/300',
    },
    {
      name: 'Oliver',
      breed: 'Beagle',
      age: '1 year',
      description: 'Playful and curious',
      imageUrl: 'https://placekitten.com/202/300',
    },
    {
      name: 'Luna',
      breed: 'Golden Retriever',
      age: '3 years',
      description: 'Friendly and loves to play',
      imageUrl: 'https://placekitten.com/203/300',
    },
    {
      name: 'Charlie',
      breed: 'Poodle',
      age: '2 years',
      description: 'Smart and hypoallergenic',
      imageUrl: 'https://placekitten.com/204/300',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Pet Gallery */}
      <PetGallery pets={pets} />
    </div>
  );
};

export default Home;