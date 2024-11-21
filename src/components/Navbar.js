import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);  // Use UserContext to access user and logout function

  // Handle logout action
  const handleLogout = () => {
    logout(); // Call logout function from context
  };

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to="/">Pet Heaven</Link>
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
          // If user is logged in, show Logout button
          <button onClick={handleLogout}>Logout</button>
        ) : (
          // If no user is logged in, show Login button
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;