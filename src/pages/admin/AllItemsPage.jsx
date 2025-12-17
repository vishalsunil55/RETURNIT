// src/pages/Admin/AllItemsPage.jsx
import React, { useEffect, useState } from 'react';
// import { itemService } from '../../services/itemService';

const AllItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        setError('');

        // When backend is ready:
        // const data = await itemService.getAllItems();
        // setItems(data);

        setItems([]); // stub data for now
      } catch (err) {
        setError(err.message || 'Failed to load items.');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          All Item Posts
        </h3>
        <p className="text-gray-600">
          Review and manage all reported lost and found items.
        </p>
      </div>

      {/* States */}
      {loading && (
        <p className="text-gray-500">Loading items…</p>
      )}

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-100 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!loading && items.length === 0 && (
        <div className="text-gray-600 bg-gray-50 border rounded-lg p-6 text-center">
          <p>No item posts found.</p>
          <p className="text-sm text-gray-500 mt-1">
            Once users start reporting items, they will appear here.
          </p>
        </div>
      )}

      {/* Table */}
      {!loading && items.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Location
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {items.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-sm capitalize">
                    {item.type}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {item.location}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {item.dateLost || item.dateFound}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                      {item.status || 'Open'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right space-x-3">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default AllItemsPage;
