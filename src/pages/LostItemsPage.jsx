// src/pages/LostItemsPage.jsx
import React, { useEffect } from 'react';
import ItemList from '../components/items/ItemList';
import { useItems } from '../hooks/useItems';

const LostItemsPage = () => {
  const { items, fetchItems, loading, error } = useItems('lost');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="lost-items-page">
      <h2>Lost Items</h2>
      { loading && <p>Loading…</p> }
      { error && <p>Error: {error}</p> }
      { items && <ItemList items={items} /> }
    </div>
  );
};

export default LostItemsPage;
