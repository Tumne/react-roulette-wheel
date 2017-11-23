import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';
import registerServiceWorker from './registerServiceWorker';

const handleOnComplete = (value) => {
  console.log(value);
};

const options = [
  "war",
  "pain",
  "words",
  "love",
  "life",
];

ReactDOM.render(<Roulette options={options} baseSize={300} onComplete={handleOnComplete}/>, document.getElementById('root'));
registerServiceWorker();
