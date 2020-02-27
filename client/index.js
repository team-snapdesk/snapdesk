/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

//multiples styles for now
import styles1 from './styles/app.css';
import styles2 from './styles/profile.scss';
const styles = {...styles1, ...styles2};
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  // wrap the App in the Provider and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);
