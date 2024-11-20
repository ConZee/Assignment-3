import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = () => {
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a backend
    console.log('Volunteer submitted:', { volunteerName, volunteerEmail, volunteerRole, availability });
  };

  return (
    <div className="volunteer-page">
      <h1>Volunteer with Us</h1>
      <p>
        If you're passionate about animals and want to make a real difference,
        consider volunteering with Pet Heaven. We are always looking for loving,
        dedicated volunteers to help with rescue efforts, adoption events, and more!
      </p>

      <form onSubmit={handleFormSubmit} className="volunteer-form">
        <div className="form-group">
          <label htmlFor="volunteer-name">Name:</label>
          <input
            type="text"
            id="volunteer-name"
            value={volunteerName}
            onChange={(e) => setVolunteerName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="volunteer-email">Email:</label>
          <input
            type="email"
            id="volunteer-email"
            value={volunteerEmail}
            onChange={(e) => setVolunteerEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="volunteer-role">Preferred Role:</label>
          <select
            id="volunteer-role"
            value={volunteerRole}
            onChange={(e) => setVolunteerRole(e.target.value)}
            required
          >
            <option value="animal-caretaker">Animal Caretaker</option>
            <option value="event-coordinator">Event Coordinator</option>
            <option value="adoption-counselor">Adoption Counselor</option>
            <option value="fundraising-assistant">Fundraising Assistant</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="availability">Availability (Days/Times):</label>
          <textarea
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="volunteer-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Volunteer;
