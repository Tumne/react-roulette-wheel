import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Roulette />, document.getElementById('root'));
registerServiceWorker();
