// src/pages/Admin/AllItemsPage.jsx
import React, { useEffect, useState } from 'react';
// import { itemService } from '../../services/itemService';
import '../styles/global.css';
import '../styles/theme.css';

const AllItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // const data = await itemService.getAllItems();
        // setItems(data);
        setItems([]); // stub data
      } catch (err) {
        setError(err.message || 'Failed to load items.');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <div className="all-items-page container">
      <h3>All Item Posts</h3>
      { loading && <p>Loading…</p> }
      { error && <p className="error-text">{error}</p> }
      { !loading && items.length === 0 && <p>No posts found.</p> }
      {/* When ready: map items into a list/table with edit/delete controls */}
    </div>
  );
};

export default AllItemsPage;
