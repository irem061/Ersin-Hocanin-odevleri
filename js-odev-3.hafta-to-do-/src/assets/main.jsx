import React from 'react'; // Bu satırın olduğundan emin ol!
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Eğer bu dosya yoksa bu satırı silebilirsin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);