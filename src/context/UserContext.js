import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Store the logged-in user (null means not logged in)
  const [password, setPassword] = useState('password123');  // Hardcoded password for validation

  // Login function
  const login = (username, passwordInput) => {
    // Simulate authentication
    if (username === 'johnd' && passwordInput === password) {
      setIsLoggedIn(true);
      setUser({ username, name: 'John Doe' });
      localStorage.setItem('user', JSON.stringify({ username, name: 'John Doe' }));
    } else {
      alert('Invalid login credentials');
    }
  };

  // Logout function
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Optionally, check for existing session data (from localStorage or API)
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  // Change password function
  const changePassword = (oldPassword, newPassword) => {
    if (oldPassword === password) {
      setPassword(newPassword);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, user, login, logout, changePassword }}>
      {children}
    </UserContext.Provider>
  );
};