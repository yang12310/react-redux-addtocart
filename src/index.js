import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; //교재에 없는데 추가해야함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* //'BrowserRouter'교재에 없는데 추가해야함 */}

 </React.StrictMode>
);