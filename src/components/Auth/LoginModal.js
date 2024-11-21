import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import './LoginModal.css';

const LoginModal = ({ setShowLoginModal }) => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Reference to the modal content
  const modalRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowLoginModal(false); // Close modal if click is outside
      }
    };
    
    // Listen for clicks outside the modal
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowLoginModal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password); // Call login from context
  

    // Close the modal after login
    setShowLoginModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;