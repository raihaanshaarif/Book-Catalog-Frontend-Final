import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Routes.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
