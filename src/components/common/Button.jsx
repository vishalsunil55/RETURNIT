import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, onClick, className = '' }) => {
  const btnClass = `btn btn--${variant} btn--${size} ${className}`;
  return (
    <button
      className={btnClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary','secondary','danger','link']),
  size: PropTypes.oneOf(['small','medium','large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: () => {},
  className: ''
};

export default Button;
