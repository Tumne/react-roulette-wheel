import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Roulette.css';

class Roulette extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    this.drawRouletteWheel();
  }

  paint() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0, 100, 100);
  }

  byte2Hex(n) {
    var nybHexString = '0123456789ABCDEF';
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }

  RGB2Color(r,g,b) {
  	return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);
  }

  getColor(item, maxitem) {
    var phase = 0;
    var center = 128;
    var width = 128;
    var frequency = Math.PI*2/maxitem;

    var red   = Math.sin(frequency*item+2+phase) * width + center;
    var green = Math.sin(frequency*item+0+phase) * width + center;
    var blue  = Math.sin(frequency*item+4+phase) * width + center;

    return this.RGB2Color(red,green,blue);
  }

  drawRouletteWheel() {
    var options = ['War', 'Love', 'Trees', 'Sadness', 'Beauty'];

    var startAngle = 0;
    var arc = Math.PI / (options.length / 2);

    var spinTimeout = null;
    var spinArcStart = 10;
    var spinTime = 0;
    var spinTimeTotal = 0;

    var baseSize = 275;
    var ctx;

    var canvas = this.refs.canvas;
    if (canvas.getContext) {
      var outsideRadius = baseSize - 25;
      var textRadius = baseSize - 45;
      var insideRadius = baseSize - 55;

      ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,600,600);

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      ctx.font = '14px Helvetica, Arial';

      for(var i = 0; i < options.length; i++) {
        var angle = startAngle + i * arc;

        ctx.fillStyle = this.getColor(i, options.length);

        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
                      baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        var text = options[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      //Arrow
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }

  handleOnClick() {
    console.log('here');
  }

  render() {
    return (
      <div className="roulette">
        <div className="roulette-container">
          <canvas ref="canvas" width="550" height="550" className="roulette-canvas"></canvas>
        </div>
        <div className="roulette-container">
          <input type="button" value="spin" onClick={this.handleOnClick} className="button" id="spin" />
        </div>
      </div>
    );
  }
}

export default Roulette;
