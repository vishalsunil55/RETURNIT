// src/components/NavBar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-wide"
        >
          Return<span className="text-gray-900">It</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/found"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            Found Items
          </NavLink>

          <NavLink
            to="/lost"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            Lost Items
          </NavLink>

          {user ? (
            <>
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                {user.name}
              </span>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
