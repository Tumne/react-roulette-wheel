import React, { Component } from 'react';
import logo from './logo.svg';
import './Roulette.css';

class Roulette extends Component {
  render() {
    return (
      <div className="roulette">
        <div className="roulette-container">
          <canvas id="canvas" width="600" height="600" className="roulette-canvas"></canvas>
        </div>
        <div className="roulette-container">
          <input type="button" value="spin" className="button" id="spin" />
        </div>
      </div>
    );
  }
}

export default Roulette;
