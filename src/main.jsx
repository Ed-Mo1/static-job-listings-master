import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import JobProvidor from './context/JobProvidor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <JobProvidor>
    <App />
  </JobProvidor>,
)
