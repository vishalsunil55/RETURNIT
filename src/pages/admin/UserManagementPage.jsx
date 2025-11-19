// src/pages/Admin/UserManagementPage.jsx
import React, { useEffect, useState } from 'react';
// import { userService } from '../../services/userService';
import "../../styles/global.css";
import "../../styles/theme.css";


const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // const data = await userService.getAllUsers();
        // setUsers(data);
        setUsers([]); // stub data
      } catch (err) {
        setError(err.message || 'Failed to load users.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-management-page container">
      <h3>User Management</h3>
      { loading && <p>Loading…</p> }
      { error && <p className="error-text">{error}</p> }
      { !loading && users.length === 0 && <p>No users found.</p> }
      {/* When ready: list users with roles / status / actions (block/unblock) */}
    </div>
  );
};

export default UserManagementPage;
