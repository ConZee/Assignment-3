import React from 'react';
import Description from '../components/Description';
import ReleaseForm from '../components/ReleaseForm';  // Make sure the ReleaseForm component exists

const ReleasePet = () => {
  return (
    <div>
      <Description 
        title="Release a Pet"
        description="Ensure Your Pet's Future Happiness"
      />
      <h1>Release a Pet</h1>
      <ReleaseForm />
    </div>
  );
};

export default ReleasePet;