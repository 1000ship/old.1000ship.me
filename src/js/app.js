// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Framework7 from './framework7-custom.js';
import Framework7React from 'framework7-react';
import '../css/framework7-custom.less';
import '../css/app.less';

import App from '../components/app.jsx';
Framework7.use(Framework7React)

import Header from '../components/Header.js';

// For Header, custom made by 1000ship
ReactDOM.render(
  React.createElement(Header),
  document.getElementById('header'),
)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);

