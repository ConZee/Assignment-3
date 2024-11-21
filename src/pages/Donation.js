import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../components/Description';
import './Donation.css';

const Donation = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('');


  const handleFormSubmit = (e) => {
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
        title="Donate to Pet Heaven"
        description="Your donations help us rescue more pets, provide medical care, and ensure that every animal has a second chance at life.
          Any contribution, no matter how small, makes a huge impact."
      />
       <div className="donation-container">
        <form className="donation-form" onSubmit={handleFormSubmit}>
          <h2>Make a Donation</h2>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">Donation Amount:</label>
            <input
              type="number"
              id="amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter amount in USD"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Donation Type:</label>
            <select
              id="type"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
              required
            >
              <option value="">Select Type</option>
              <option value="one-time">One-Time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <button type="submit" className="donate-btn">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donation;