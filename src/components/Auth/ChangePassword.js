import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Description from '../Description';
import './ChangePassword.css';

const ChangePassword = () => {
  const { isLoggedIn, changePassword } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setError('You must be logged in to change the password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    if (changePassword(oldPassword, newPassword)) {
      setError('');
      alert('Password changed successfully');
    } else {
      setError('Old password is incorrect');
    }
  };
  return (
    <div>
      <Description 
          title="Change Password"
          description=""
        />
      <div className="change-password-container">
        <form className="change-password-form" onSubmit={handleChangePassword}>
          <div className="form-group">
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type="password"
              id="oldPassword"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="change-password-btn">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
