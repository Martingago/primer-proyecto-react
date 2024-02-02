import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import WebNav from './components/global/WebNav.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <WebNav/>
  </React.StrictMode>,
)
