// src/pages/ItemDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemService } from '../services/itemService';

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await itemService.getItemById(id);
        setItem(result);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div className="item-detail-page">
      <h2>{item.title}</h2>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Date:</strong> {item.dateLost || item.dateFound}</p>
      <p><strong>Contact Info:</strong> {item.contactInfo}</p>
      { item.images && item.images.map((url, idx) => (
        <img key={idx} src={url} alt={`item image ${idx}`} className="item-image"/>
      )) }
      { item.status && <p><strong>Status:</strong> {item.status}</p> }
      {/* You might add a “Claim this item” button if type=found and user logged in */}
    </div>
  );
};

export default ItemDetailPage;
