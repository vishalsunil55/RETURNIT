// src/pages/Admin/AdminDashboard.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.includes(path)
      ? 'bg-blue-100 text-blue-700'
      : 'text-gray-700 hover:bg-gray-100';

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            Admin Panel
          </h2>
          <p className="text-sm text-gray-500">
            ReturnIt Management
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="all-items"
            className={`block px-4 py-2 rounded-md font-medium transition ${isActive('all-items')}`}
          >
            📦 All Item Posts
          </Link>

          <Link
            to="users"
            className={`block px-4 py-2 rounded-md font-medium transition ${isActive('users')}`}
          >
            👥 User Management
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-md p-6 min-h-full">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminDashboard;
