import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// const rootElement = document.querySelector('#root');
// const root = ReactDOM.createRoot(rootElement)
// root.render(<App />)