// src/components/items/ItemList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './ItemList.css';

const ItemList = ({ items, onItemSelect, loading }) => {
  if (loading) {
    return (
      <div className="item-list__state">
        <p>Loading items...</p>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="item-list__state">
        <h3>No items found</h3>
        <p>Try adjusting your search or be the first to report an item.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onClick={onItemSelect}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      location: PropTypes.string,
      dateLost: PropTypes.string,
      dateFound: PropTypes.string,
      images: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  onItemSelect: PropTypes.func,
  loading: PropTypes.bool
};

ItemList.defaultProps = {
  items: [],
  onItemSelect: () => {},
  loading: false
};

export default ItemList;
