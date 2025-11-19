// src/pages/ReportFoundPage.jsx
import React, { useState } from 'react';
import UploadImage from '../components/items/UploadImage';
import { itemService } from '../services/itemService';

const ReportFoundPage = () => {
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

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageUpload = images => {
    setFormData({ ...formData, images });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await itemService.createItem({ ...formData, type: 'found' });
      // handle success (redirect, clear form, etc.)
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="report-found-page">
      <h2>Report Found Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Date Found:
          <input type="date" name="dateFound" value={formData.dateFound} onChange={handleChange} required />
        </label>
        <label>
          Location:
          <input name="location" value={formData.location} onChange={handleChange} required />
        </label>
        <label>
          Contact Info:
          <input name="contactInfo" value={formData.contactInfo} onChange={handleChange} required />
        </label>
        <UploadImage onUpload={handleImageUpload} />
        { error && <p className="error">{error}</p> }
        <button type="submit" disabled={submitting}>{ submitting ? 'Submitting…' : 'Submit' }</button>
      </form>
    </div>
  );
};

export default ReportFoundPage;
