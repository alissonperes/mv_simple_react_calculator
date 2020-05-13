import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, className } = props;
  return (
    <button type="button" className={className}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  className: 'button',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
