// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';  // if you want global styles
import '../styles/theme.css';

const HomePage = () => {
  return (
    <div className="home-page container">
      <header className="home-header">
        <h1>ReturnIt</h1>
        <p>Your central place to report and recover lost items.</p>
      </header>

      <section className="home-actions">
        <Link to="/report-lost" className="btn btn-primary">
          Report Lost Item
        </Link>
        <Link to="/report-found" className="btn btn-secondary">
          Report Found Item
        </Link>
      </section>

      <section className="home-browse">
        <h2>Browse Items</h2>
        <div className="home-browse-links">
          <Link to="/lost-items" className="btn btn-link">
            View Lost Items
          </Link>
          <Link to="/found-items" className="btn btn-link">
            View Found Items
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
