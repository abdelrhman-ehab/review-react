import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import MyContextProvider from './Context/context.jsx'

createRoot(document.getElementById('root')).render(
  <HeroUIProvider>
    <MyContextProvider>

      <App />
   
    </MyContextProvider>
  </HeroUIProvider>
)
