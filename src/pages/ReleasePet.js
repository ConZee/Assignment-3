import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../components/Description'; // Assuming you have a description component
import './PetForms.css';

const ReleasePet = () => {
  const navigate = useNavigate();  // Initialize the navigate function
  
  const [petName, setPetName] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petImage, setPetImage] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPetImage(URL.createObjectURL(file)); // Display the image preview (optional)
    }
  };

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
        title="Release a Pet"
        description="Help Us Find a New Home for Your Pet"
      />
      <div className="release-pet-form">
        <form onSubmit={handleSubmit}>
          {/* Pet Information Section */}
          <div className="form-group">
            <label htmlFor="petName">Pet Name:</label>
            <input
              type="text"
              id="petName"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              required
            />
          </div>

          <div className="form-group pet-type-breed">
            <div className="pet-type">
              <label htmlFor="petType">Pet Type:</label>
              <input
                type="text"
                id="petType"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                required
              />
            </div>
            <div className="pet-breed">
              <label htmlFor="petBreed">Breed:</label>
              <input
                type="text"
                id="petBreed"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="petImage">Pet Image (optional):</label>
            <input
              type="file"
              id="petImage"
              onChange={handleImageChange}
              accept="image/*"
            />
            {petImage && <img src={petImage} alt="Pet Preview" className="pet-image-preview" />}
          </div>

          {/* User Information Section */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you want to release {petName}?</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReleasePet;