import React from 'react';
import './Description.css';

const Description = ({ title, description }) => {
  return (
    <section className="description">
      <div className="description-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Description;