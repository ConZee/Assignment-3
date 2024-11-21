import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ChangePassword = () => {
  const { changePassword } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
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
      <h3>Change Password</h3>
      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p>{error}</p>}
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
