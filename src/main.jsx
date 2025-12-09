// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // <--- Импортируем сюда
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* <--- Оборачиваем App здесь */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)