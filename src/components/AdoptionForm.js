import React, { useState } from 'react';
import './AdoptionForm.css';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Adoption application submitted for ${formData.petName}`);
  };

  return (
    <form className="adoption-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Pet Name:
        <input type="text" name="petName" value={formData.petName} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Submit Adoption</button>
    </form>
  );
};

export default AdoptionForm;