// src/pages/ReportFoundPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadImage from '../components/items/UploadImage';
import { itemService } from '../services/itemservice';

const ReportFoundPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dateFound: '',
    location: '',
    contactInfo: '',
    images: []
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (images) => {
    setFormData(prev => ({ ...prev, images }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await itemService.createItem({ ...formData, type: 'found' });
      navigate('/found-items', { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Report Found Item
          </h2>
          <p className="text-gray-600">
            Help return a found item to its rightful owner.
          </p>
        </div>

        {error && (
          <div className="mb-6 text-sm text-red-700 bg-red-100 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Item Details */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Item Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Title</label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Blue Backpack"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Describe identifying features"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          {/* When & Where */}
          <section>
            <h3 className="text-lg font-semibold mb-4">When & Where</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Date Found</label>
                <input
                  name="dateFound"
                  type="date"
                  value={formData.dateFound}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="City, station, landmark"
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

            <input
              name="contactInfo"
              type="text"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              placeholder="Phone number or email"
              className="w-full border rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <p className="text-xs text-gray-500 mt-1">
              This will only be shared with genuine claimants.
            </p>
          </section>

          {/* Images */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Images (Optional)</h3>
            <UploadImage onUpload={handleImageUpload} multiple />
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className={`flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Submitting…' : 'Submit Report'}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-md transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ReportFoundPage;
