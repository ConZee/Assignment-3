import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Description from '../components/Description';
import './PetForms.css';

const AdoptPet = () => {
  const { petName } = useParams(); // Retrieve the petName from URL params
  const navigate = useNavigate();  // Initialize the navigate function

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [adoptionReason, setAdoptionReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Redirect to the success page with success message
    navigate('/success', {
      state: {
        message: 'Your application has been submitted successfully. We will review it and get back to you soon!'
      }
    });
  };

  return (
    <div>
      <Description 
        title="Adopt A Pet"
        description="Become their Forever HOME!"
      />
      <div className="adopt-pet-form">
        <h1>Adopt {petName}</h1> {/* Display the pet's name dynamically */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="petName">Pet Name:</label>
            <input
              id="petName"
              type="text"
              value={petName}  // Prefill with petName from URL
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              id="contactNumber"
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your residential address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="adoptionReason">Why do you want to adopt {petName}?</label>
            <textarea
              id="adoptionReason"
              value={adoptionReason}
              onChange={(e) => setAdoptionReason(e.target.value)}
              placeholder="Enter your reason for adopting"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdoptPet;
