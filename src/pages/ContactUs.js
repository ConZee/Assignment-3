import React from 'react';
import Description from '../components/Description';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <Description 
        title="Contact US"
        description="Need Help? Get in touch with us here!"
      />
      <div className="contact-us-container">
        <div className="contact-location">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> enquiries@petheaven.com</p>
            <p><strong>Phone:</strong> +65 6123 9876</p>
            <p><strong>Address:</strong> 60 Paya Lebar Road, Singapore 409051</p>
          </div>

          {/* Google Map Section */}
          <div className="google-map">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.811854935249!2d103.89032751533896!3d1.3175062990372368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a1c4b769e7%3A0xf37027ae8ed4afdb!2s60%20Paya%20Lebar%20Rd%2C%20Singapore%20409051!5e0!3m2!1sen!2ssg!4v1699970163083!5m2!1sen!2ssg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing location of Pet Heaven"
            ></iframe>
          </div>
        </div>
        
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>What services does Pet Heaven provide?</summary>
            <p>We provide adoption, volunteering, pet grooming, and more.</p>
          </details>
          <details>
            <summary>How do I adopt a pet?</summary>
            <p>Visit our adoption page and follow the steps to apply for adoption.</p>
          </details>
          <details>
            <summary>Can I donate to help the animals?</summary>
            <p>Yes, visit our donation page to learn how to support our mission.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
