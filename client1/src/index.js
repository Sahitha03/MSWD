import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './components/reducer';

const store=createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
const reload= () => root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);
reload();
store.subscribe(reload);

reportWebVitals();
