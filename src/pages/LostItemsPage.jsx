// src/pages/LostItemsPage.jsx
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ItemList from '../components/items/ItemList';
import { useItems } from '../hooks/useItems';

const LostItemsPage = () => {
  const navigate = useNavigate();
  const { items, fetchItems, loading, error } = useItems('lost');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleItemSelect = (id) => {
    navigate(`/lost-items/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Lost Items
          </h2>
          <p className="text-gray-600">
            Browse items that have been reported lost.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 text-sm text-red-700 bg-red-100 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Empty state */}
        {!loading && items.length === 0 && (
          <div className="text-center text-gray-600 py-16">
            <p className="mb-4">No lost items reported yet.</p>
            <Link
              to="/report-lost"
              className="text-blue-600 hover:underline font-medium"
            >
              Report a lost item
            </Link>
          </div>
        )}

        {/* List */}
        <ItemList
          items={items}
          loading={loading}
          onItemSelect={handleItemSelect}
        />

      </div>
    </div>
  );
};

export default LostItemsPage;
