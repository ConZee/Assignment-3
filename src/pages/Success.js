import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Success.css';

const Success = () => {
  const location = useLocation();
  const { message } = location.state || {};  // Retrieve the success message from location state
  const [countdown, setCountdown] = useState(10); // Set the countdown to 10 seconds initially
  const navigate = useNavigate(); // To navigate back to the homepage after countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer); // Clear the timer when countdown reaches 0
          navigate('/'); // Redirect to homepage when countdown finishes
        }
        return prev - 1;
      });
    }, 1000); // Decrease countdown every second

    return () => clearInterval(timer); // Cleanup the interval when the component unmounts
  }, [navigate]);
  
  return (
    <div id="successPage">
      <div className="messageContainer">
        <h1>Success!</h1>
        {message && <p>{message}</p>}  {/* Display the success message */}
        <p>You will be redirected in <strong id="redirectCD">{countdown}</strong> seconds.</p>
        <p>Or click <a className="redirectLink" href="/">here</a> to be redirected immediately</p>
    </div>
  </div>
  );
};

export default Success;