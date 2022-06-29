import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <HashRouter>
    <App tab="home" />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
