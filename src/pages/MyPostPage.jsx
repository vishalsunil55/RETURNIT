// src/pages/MyPostPage.jsx
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useItems } from '../hooks/useItems';
import ItemList from '../components/items/ItemList';

const MyPostPage = () => {
  const navigate = useNavigate();
  const { items, fetchItems, loading, error } = useItems('my');

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleItemSelect = (id) => {
    navigate(`/my-posts/${id}`);
    // later you can route this to edit / detail
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            My Posts
          </h2>
          <p className="text-gray-600">
            Items you have reported as lost or found.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 text-sm text-red-700 bg-red-100 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Empty State */}
        {!loading && items.length === 0 && (
          <div className="text-center text-gray-600 py-20">
            <p className="mb-4">
              You haven’t posted any items yet.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/report-lost"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Report Lost Item
              </Link>
              <Link
                to="/report-found"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Report Found Item
              </Link>
            </div>
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

export default MyPostPage;
