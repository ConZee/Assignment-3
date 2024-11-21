import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './LoginModal.css';

const LoginModal = ({ setShowLoginModal }) => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password); // Call login from context
  

    // Close the modal after login
    setShowLoginModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
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