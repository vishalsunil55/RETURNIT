// src/pages/ItemDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { itemService } from '../services/itemservice';

const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const result = await itemService.getItemById(id);
        setItem(result);
      } catch (err) {
        setError(err.message || 'Failed to load item');
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading item details…
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Item not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-6"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Images */}
          <div>
            {item.images && item.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {item.images.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Item ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                No images available
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>

            <p className="text-gray-700 mb-6">
              {item.description}
            </p>

            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Location:</strong> {item.location}
              </p>
              <p>
                <strong>Date:</strong> {item.dateLost || item.dateFound}
              </p>
              {item.status && (
                <p>
                  <strong>Status:</strong> {item.status}
                </p>
              )}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Contact Information</strong>
              </p>
              <p className="text-gray-800 mt-1">
                {item.contactInfo}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Please contact responsibly.
              </p>
            </div>

            {/* Future action */}
            {/* <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
              Claim this item
            </button> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
