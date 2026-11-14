import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// The production build ships prerendered HTML, so attach to it instead of re-rendering.
if (container.hasChildNodes()) ReactDOM.hydrateRoot(container, app)
else ReactDOM.createRoot(container).render(app)
