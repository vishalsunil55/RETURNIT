// src/hooks/useItems.js
import { useState, useEffect, useCallback } from 'react';
import { itemService } from '../services/itemservice';

export const useItems = (type) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let data;

      if (type === 'my') {
        data = await itemService.getMyItems();
      } else {
        data = await itemService.getAllItems({ type });
      }

      setItems(data || []);
    } catch (err) {
      setError(err.message || 'Failed to load items.');
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    items,
    loading,
    error,
    fetchItems
  };
};
