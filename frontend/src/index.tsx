import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './app/App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(

  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

