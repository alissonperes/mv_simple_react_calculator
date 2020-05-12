import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="visor">0</div>
      <div className="calculator">
        <div className="keypad-row">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>÷</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button className="double-space">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
