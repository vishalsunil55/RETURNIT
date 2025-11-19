// src/components/items/ItemList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import './ItemList.css';  // optional CSS file for styling

const ItemList = ({ items, onItemSelect }) => {
  if (!items || items.length === 0) {
    return <p>No items to display.</p>;
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
  onItemSelect: PropTypes.func
};

ItemList.defaultProps = {
  items: [],
  onItemSelect: () => {}
};

export default ItemList;
