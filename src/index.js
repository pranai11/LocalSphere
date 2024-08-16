import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/login.css';
import './css/header.css';
import './css/homepage.css';
import './css/signup.css';
import './css/footer.css';
import './css/Indiitem.css';
import './css/body.css';
import './css/products.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
