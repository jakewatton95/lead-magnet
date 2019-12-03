import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
const title = 'React with Webpack and Babel';
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
module.hot.accept();
