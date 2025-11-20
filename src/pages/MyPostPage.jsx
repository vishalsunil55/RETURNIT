// src/pages/MyPostPage.jsx
import React, { useEffect } from 'react';
import { useItems } from '../hooks/useItems';
import ItemList from '../components/items/ItemList';


const MyPostPage = () => {
  const { items, fetchItems, loading, error } = useItems('my');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className="my-posts-page container">
      <h2>My Posts</h2>

      {loading && <p>Loading…</p>}
      {error && <p className="error-text">Error: {error}</p>}

      {items && items.length > 0 ? (
        <ItemList items={items} onItemSelect={(id) => {/* navigate to detail or edit page */}} />
      ) : (
        !loading && <p>You haven’t posted any items yet.</p>
      )}
    </div>
  );
};

export default MyPostPage;
