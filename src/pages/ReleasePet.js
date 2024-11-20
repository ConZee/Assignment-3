import React, { useState } from 'react'; // Import useState
import Description from '../components/Description';

const ReleasePet = () => {
  const [petName, setPetName] = useState(''); // Initial state set to empty string
  const [petType, setPetType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setMessage(`Request to release pet ${petName} (${petType}) submitted!`);
  };

  return (
    <div>
      <Description 
        title="Release a Pet"
        description="Ensure Your Pet's Future Happiness"
      />
      <h2>Release Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pet Type:</label>
          <input
            type="text"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReleasePet;