// src/pages/FoundItemsPage.jsx
import React, { useEffect } from 'react';
import ItemList from '../components/items/ItemList';
import { useItems } from '../hooks/useItems';

const FoundItemsPage = () => {
  const { items, fetchItems, loading, error } = useItems('found');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="found-items-page">
      <h2>Found Items</h2>
      { loading && <p>Loading…</p> }
      { error && <p>Error: {error}</p> }
      { items && <ItemList items={items} /> }
    </div>
  );
};

export default FoundItemsPage;
