// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { persistor, store } from './store/store.js'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// )

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { persistor, store } from './store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

/* ===============================
   SYSTEM DARK MODE DETECTION
   =============================== */

const media = window.matchMedia('(prefers-color-scheme: dark)')

const applyTheme = () => {
  document.documentElement.classList.toggle('dark', media.matches)
}

// Apply on first load
applyTheme()

// Listen for system theme changes
media.addEventListener('change', applyTheme)

/* =============================== */

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

