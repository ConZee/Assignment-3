import React from 'react';
import Description from '../components/Description';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Description 
        title="About Us"
        description="Dedicated to giving pets a second chance at happiness."
      />
      <div className="about-us">
        <div className='about-section1'>
          <div className="about-section mission">
            <h2 className="section-title">Our Mission</h2>
            <p>
              At Pet Heaven, we are committed to rescuing abandoned pets and finding them loving, permanent homes. 
              Our mission is to ensure every animal in our care receives the love, medical attention, and opportunity 
              they deserve to thrive in a new home. We believe every pet deserves a second chance, and we strive to make that 
              happen every day through our efforts, partnerships, and community outreach.
            </p>
          </div>

          <div className="about-section story">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2010, Pet Heaven began with a small team of passionate animal lovers determined to make a difference. 
              What started as a local initiative to rescue abandoned pets quickly grew into a thriving community with the vision 
              of creating a better future for animals everywhere. Over the years, we’ve grown in size, but our commitment to 
              rescuing and rehoming pets remains the same.
            </p>
            <p>
              Through countless success stories, we’ve transformed the lives of hundreds of animals, providing them with the 
              love and care they need to find new families. Every pet we help brings us closer to our goal of ending pet 
              abandonment and creating a world where every animal has a safe place to call home.
            </p>
          </div>
        </div>

        <div className="about-section impact">
          <h2 className="section-title">Our Impact</h2>
          <p>
            Since our inception, Pet Heaven has had a profound impact on the lives of thousands of abandoned pets. 
            Through our adoption programs, we’ve successfully rehomed over 1,000 animals, giving them the chance to live 
            in loving, safe environments. Additionally, we have partnered with over 100 local shelters to improve animal 
            welfare and raise awareness about pet adoption. Our outreach programs have educated more than 10,000 
            individuals on responsible pet ownership, reducing pet abandonment rates in our community.
          </p>
          <p>
            We are proud to have seen our rescued pets go on to lead fulfilling lives with families that truly care for 
            them. Each success story reinforces our dedication to ensuring that every animal gets the care and respect 
            they deserve.
          </p>
        </div>

        <div className="about-section team">
          <h2 className="section-title">Meet the Team</h2>
          <div className="team-container">
            <div className="team-member">
              <div className="team-photo">
              </div>
              <h3>Jane Doe</h3>
              <p>Founder & Executive Director</p>
              <p>
                Jane is the founder of Pet Heaven and has dedicated her life to rescuing animals. With over 15 years of experience 
                in animal care, Jane leads the organization with passion, ensuring every pet in our care gets the best possible 
                chance for a happy life.
              </p>
            </div>
            
            <div className="team-member">
              <div className="team-photo">
              </div>
              <h3>John Smith</h3>
              <p>Operations Manager</p>
              <p>
                John oversees day-to-day operations at Pet Heaven, from organizing rescue efforts to managing adoptions. His 
                experience in logistics and his love for animals help streamline our processes and ensure that every pet is 
                matched with the right family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;