import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App'; // Импорт компонента App
import reportWebVitals from './reportWebVitals';
import React from 'react'; // Добавь эту строку


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>       
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
