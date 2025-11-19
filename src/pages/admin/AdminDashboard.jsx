// src/pages/Admin/AdminDashboard.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../../styles/global.css";
import "../../styles/theme.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard container">
      <h2>Admin Panel</h2>
      <nav className="admin-nav">
        <ul>
          <li><Link to="all-items">All Item Posts</Link></li>
          <li><Link to="users">User Management</Link></li>
        </ul>
      </nav>
      <section className="admin-content">
        <Outlet />
      </section>
    </div>
  );
};

export default AdminDashboard;
