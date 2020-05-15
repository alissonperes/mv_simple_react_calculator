import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const {
    name, className, color, wide, clickHandler,
  } = props;

  const elementWidth = wide ? '50%' : '25%';
  const elementStyle = {
    backgroundColor: color,
    width: elementWidth,
  };

  return (
    <button
      style={elementStyle}
      type="button"
      className={className}
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  className: 'button',
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
