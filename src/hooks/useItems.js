// src/hooks/useItems.js
import { useState, useEffect, useCallback } from 'react';

// Stubbed hook for fetching items
export const useItems = (type) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      // TODO: call service to get items by type (lost/found/my)
      // Example: const data = await itemService.getAllItems({ type });
      setItems([]); // stub data
    } catch (err) {
      setError(err.message || 'Failed to load items.');
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, loading, error, fetchItems };
};
