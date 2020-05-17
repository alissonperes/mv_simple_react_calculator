import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

const ButtonPanel = props => {
  const { clickHandler } = props;

  return (
    <div id="calculator">
      <div className="keypad-row">
        <Button color="#e0e0e0" name="AC" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="+/-" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="%" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className="keypad-row">
        <Button color="#e0e0e0" name="7" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="8" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="9" clickHandler={clickHandler} />
        <Button name="x" clickHandler={clickHandler} />
      </div>
      <div className="keypad-row">
        <Button color="#e0e0e0" name="4" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="5" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="6" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="keypad-row">
        <Button color="#e0e0e0" name="1" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="2" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="3" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="keypad-row">
        <Button wide color="#e0e0e0" name="0" clickHandler={clickHandler} />
        <Button color="#e0e0e0" name="." clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
