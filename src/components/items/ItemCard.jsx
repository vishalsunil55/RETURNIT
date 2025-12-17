// src/components/items/ItemCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ItemCard.css';

const ItemCard = ({ item, onClick }) => {
  const date = item.dateLost || item.dateFound;

  return (
    <div
      className="item-card"
      onClick={() => onClick(item.id)}
      role="button"
      tabIndex={0}
    >
      <div className="item-card__image-wrapper">
        {item.images && item.images.length > 0 ? (
          <img
            src={item.images[0]}
            alt={item.title}
            className="item-card__image"
          />
        ) : (
          <div className="item-card__placeholder">
            No Image
          </div>
        )}
      </div>

      <div className="item-card__body">
        <h3 className="item-card__title">{item.title}</h3>

        <p className="item-card__description">
          {item.description?.length > 90
            ? item.description.substring(0, 90) + '…'
            : item.description}
        </p>

        <div className="item-card__meta">
          <span>📍 {item.location || 'Unknown'}</span>
          <span>📅 {date || 'N/A'}</span>
        </div>
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
