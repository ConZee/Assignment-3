import React, { useContext, useState, useEffect } from 'react';
import { PetContext } from '../context/context';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import PetCard from './PetCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PetPreview.css';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: '-40px', zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowLeft size={30} color="#333" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: '-40px', zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowRight size={30} color="#333" />
    </div>
  );
};

const PetPreview = () => {
  const { dogs, cats, error } = useContext(PetContext);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Combine dogs and cats, shuffle, and slice for preview
    const allPets = [...dogs, ...cats];
    const shuffledPets = allPets.sort(() => Math.random() - 0.5); // Shuffle the pets
    setPets(shuffledPets.slice(0, 6));  // Show only 6 pets
  }, [dogs, cats]);

  if (error) {
    return <div>{error}</div>;
  }

  // Settings for the slick carousel
  const settings = {
    infinite: true, // Loop slides
    slidesToShow: 3, // Display 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card per arrow click
    arrows: true, // Show navigation arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dots: true, // Add navigation dots below the slider
    centerMode: true, // Highlight the center card
    centerPadding: '0', // No extra padding around cards
  };

  return (
    <div className="pet-preview-container">
      {/* Slogan Section (left 1/3) */}
      <div className="slogan">
        <h2>Find Your Furry Friend Today!</h2>
        <p>Browse our selection of lovable pets waiting for a new home.</p>
      </div>

      {/* Pet Cards Section (right 2/3) */}
      <div className="carousel">
        <Slider {...settings}>
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PetPreview;