// src/pages/LostItemsPage.jsx
import React, { useEffect, useState } from 'react';
import { itemService } from '../services/itemService';
import { Link } from 'react-router-dom';

const LostItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLostItems = async () => {
    try {
      setLoading(true);
      setError('');
      // Use filter type: 'lost'
      const lostItems = await itemService.getAllItems({ type: 'lost' });
      setItems(lostItems);
    } catch (err) {
      setError(err.message || 'Failed to load items.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLostItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Lost Items Reported
        </h2>

        {loading && <p className="text-center text-gray-500">Loading items…</p>}
        {error && (
          <div className="mb-6 text-sm text-red-600 bg-red-100 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!loading && items.length === 0 && (
          <p className="text-center text-gray-600">
            No lost items found.{' '}
            <Link to="/report-lost" className="text-blue-600 hover:underline">
              Report one now
            </Link>.
          </p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow p-6 flex flex-col">
              {item.images && item.images.length > 0 ? (
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  No image
                </div>
              )}
              <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Date Lost: </strong>
                {item.dateLost}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Location: </strong>
                {item.location}
              </p>
              <Link
                to={`/lost-items/${item.id}`}
                className="mt-4 text-blue-600 hover:underline self-start"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LostItemsPage;
