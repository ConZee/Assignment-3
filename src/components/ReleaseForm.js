import React, { useState } from 'react';

const ReleaseForm = () => {
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending the data to an API or updating state
    setMessage(`Request to release pet ${petName} (${petType}) submitted!`);
  };

  return (
    <div>
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

export default ReleaseForm;