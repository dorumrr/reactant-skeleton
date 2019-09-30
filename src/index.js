import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalState } from './app/utils'
import './index.css';
import 'typeface-open-sans';
import 'typeface-raleway';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <GlobalState.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState.Provider>
, document.getElementById('root'));
serviceWorker.unregister();
