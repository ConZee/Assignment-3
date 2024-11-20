import React, { useState } from 'react';
import Description from '../components/Description';
import './Donation.css';

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a backend or payment processor
    console.log('Donation submitted:', { donationAmount, donationType });
  };

  return (
    <div>
      <Description 
        title="Make a Difference: Donate to Pet Heaven"
        description="Your donations help us rescue more pets, provide medical care, and ensure that every animal has a second chance at life.
          Any contribution, no matter how small, makes a huge impact."
      />
      <div className="donation-page">
        <form onSubmit={handleFormSubmit} className="donation-form">
          <div className="form-group">
            <label htmlFor="donation-amount">Donation Amount ($):</label>
            <input
              type="number"
              id="donation-amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="donation-type">Donation Type:</label>
            <select
              id="donation-type"
              value={donationType}
              onChange={(e) => setDonationType(e.target.value)}
            >
              <option value="one-time">One-time Donation</option>
              <option value="monthly">Monthly Giving</option>
            </select>
          </div>

          <button type="submit" className="donate-btn">Donate Now</button>
        </form>
      </div>
    </div>
  );
};

export default Donation;