// src/pages/Admin/UserManagementPage.jsx
import React, { useEffect, useState } from 'react';
// import { userService } from '../../services/userService';

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError('');

        // When backend is ready:
        // const data = await userService.getAllUsers();
        // setUsers(data);

        setUsers([]); // stub data
      } catch (err) {
        setError(err.message || 'Failed to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          User Management
        </h3>
        <p className="text-gray-600">
          Manage registered users and their access.
        </p>
      </div>

      {/* States */}
      {loading && (
        <p className="text-gray-500">Loading users…</p>
      )}

      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-100 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {!loading && users.length === 0 && (
        <div className="text-gray-600 bg-gray-50 border rounded-lg p-6 text-center">
          <p>No users found.</p>
          <p className="text-sm text-gray-500 mt-1">
            Registered users will appear here.
          </p>
        </div>
      )}

      {/* Table */}
      {!loading && users.length > 0 && (
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Role
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
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm">
                    {user.name}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {user.email}
                  </td>
                  <td className="px-4 py-3 text-sm capitalize">
                    {user.role || 'user'}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right space-x-3">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                    <button className="text-red-600 hover:underline">
                      Block
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

export default UserManagementPage;
