// src/components/items/ItemCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';  // you may create a CSS file if you like

const ItemCard = ({ item, onClick }) => {
  return (
    <div className="item-card" onClick={() => onClick(item.id)}>
      {item.images && item.images.length > 0 && (
        <img
          src={item.images[0]}
          alt={item.title}
          className="item-card__image"
        />
      )}
      <div className="item-card__body">
        <h3 className="item-card__title">{item.title}</h3>
        <p className="item-card__description">
          {item.description.length > 100
            ? item.description.substring(0, 100) + '…'
            : item.description}
        </p>
        <p className="item-card__meta">
          <small>Location: {item.location}</small><br/>
          <small>Date: {item.dateLost || item.dateFound}</small>
        </p>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    location: PropTypes.string,
    dateLost: PropTypes.string,
    dateFound: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onClick: PropTypes.func
};

ItemCard.defaultProps = {
  onClick: () => {}
};

export default ItemCard;
