import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import LoginModal from './Auth/LoginModal';
import logo from '../img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true); // Show login modal when the login button is clicked
  };

  const handleLogoutClick = () => {
    logout(); // Log out the user
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">
        <img src={logo} alt="Pet Heaven Logo" className="logo-img" />
        </Link>
      </div>
      <ul className='navbar-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/gallery">Our Pets</Link></li>
        <li><Link to="/release">Release</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
      <div className="navbar-auth">
        {user ? (
            <div className="auth-container">
              <div className="auth-texts">
                <span className="welcome-message">Welcome, {user.username}!</span>
                <Link to="/change-password" className="navbar-links-a">Change Password</Link>
              </div>
              <div className="logout-container">
                <button onClick={handleLogoutClick}>Logout</button>
              </div>
            </div>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
      </div>
      {showLoginModal && (
        <LoginModal setShowLoginModal={setShowLoginModal} />
      )}
    </nav>
  );
};

export default Navbar;