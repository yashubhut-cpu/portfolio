import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './components/GlobalStyles.jsx';
import Keyframes from './components/Keyframes.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Keyframes />
    <App />
  </StrictMode>,
)
