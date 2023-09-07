import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import SignIn from './pages/SignIn.tsx'
import AdminDashboard from './pages/AdminDashboard.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      // {
      //   path: "/adminDashboard",
      //   element: <AdminDashboard />
      // }
    ]
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard />
  }
  // {
  //   path: "/about",
  //   element: <About />
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
