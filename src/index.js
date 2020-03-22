import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './store/configureStore';

import axios from 'axios';

import { APIErrorHandlerFunc } from './utils/APIsErrorHandling';

// Enable hot reloading
if (module.hot) {
  module.hot.accept();
}

/* Handle APIs error using Axios interceptors */

axios.interceptors.response.use(null, APIErrorHandlerFunc(store));

// You can add a theme prop to ThemeProvider and pass it any theme of your choosing
ReactDOM.render(
   <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
