import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FAQ from './FAQ'
import Authentication from './pages/Authentication'
import SellerDash from './components/Dashboard/sellerDash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
  {
    path: '/sellerDash',
    element: <SellerDash />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
