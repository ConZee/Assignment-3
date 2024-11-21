import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../components/Description';
import './Volunteer.css';

const Volunteer = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [interestArea, setInterestArea] = useState('');
  const [availability, setAvailability] = useState('');

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
          title="Make a Difference"
          description="If you're passionate about animals and want to make a real difference,
          consider volunteering with Pet Heaven. We are always looking for loving,
          dedicated volunteers to help with rescue efforts, adoption events, and more!"
        />
      <div className="volunteer-container">
        <form className="volunteer-form" onSubmit={handleFormSubmit}>
          <h2>Volunteer With Us</h2>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={volunteerName}
              onChange={(e) => setVolunteerName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={volunteerEmail}
              onChange={(e) => setVolunteerEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="availability">Availability:</label>
            <input
              type="text"
              id="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="Enter your availability (e.g., weekends, weekdays)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="interestArea">Area of Interest:</label>
            <select
              id="interestArea"
              value={interestArea}
              onChange={(e) => setInterestArea(e.target.value)}
              required
            >
              <option value="">Select Area</option>
              <option value="animal care">Animal Care</option>
              <option value="events">Events</option>
              <option value="administration">Administration</option>
              <option value="fundraising">Fundraising</option>
            </select>
          </div>

          <button type="submit" className="volunteer-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
