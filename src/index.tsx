import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import SvgSprite from './components/sprite/SvgSprite';

import '../src/i18n/config';

ReactDOM.createRoot(
  document.getElementById('sprite')!
).render(
  <SvgSprite />
);

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.warn);
