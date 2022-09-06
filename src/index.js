import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';



const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

setInterval(function () {
  root.render(Page());
}, 1000);
