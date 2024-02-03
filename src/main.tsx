import { AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AnimatePresence mode="wait" initial={false}>
    <App />
  </AnimatePresence>
)
