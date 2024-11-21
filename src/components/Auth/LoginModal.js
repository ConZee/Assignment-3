import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './LoginModal.css';

const LoginModal = ({ setShowLoginModal }) => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      setShowLoginModal(false); // Close modal on successful login
    } else {
      setError('Invalid credentials');
    }
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
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;