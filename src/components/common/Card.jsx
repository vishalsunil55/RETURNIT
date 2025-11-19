import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, children, footer, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      { title && <div className="card__header"><h3>{title}</h3></div> }
      <div className="card__body">
        {children}
      </div>
      { footer && <div className="card__footer">{footer}</div> }
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  className: PropTypes.string
};

Card.defaultProps = {
  title: '',
  footer: null,
  className: ''
};

export default Card;
