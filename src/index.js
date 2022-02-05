import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { OnChangeView } from "./stateViewEnum";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(OnChangeView)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("react-root")
);