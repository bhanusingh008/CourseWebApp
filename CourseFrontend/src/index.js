import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/style.css';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
    <div className='body'>
        <App />
    </div>
);

reportWebVitals()
