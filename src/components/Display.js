import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div id="calculator-display" className="visor">
      <span>{result}</span>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
