import React from 'react';
import Description from '../components/Description';
import AdoptionForm from '../components/AdoptionForm';  // Make sure the AdoptionForm component exists

const AdoptPet = () => {
  return (
    <div>
      <Description 
        title="Adopt A Pet"
        description="Become their Forever HOME!"
      />
      <h1>Adopt a Pet</h1>
      <AdoptionForm />
    </div>
  );
};

export default AdoptPet;