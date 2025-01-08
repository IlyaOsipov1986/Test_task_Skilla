import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/style/index.css";
import { ParamsProvider } from "./context/ParamsContext.tsx";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ParamsProvider>
        <App />
     </ParamsProvider>
  </StrictMode>,
)
