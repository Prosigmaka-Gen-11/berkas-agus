import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from './Home'
import About from './About'
import Login from './Login'
import ProtectedLayout from './ProtectedLayout'

import { Provider } from 'react-redux'

import store from './store'

const router = createBrowserRouter([
  { path: '', element: <ProtectedLayout />, children: [
    { path: '/', element: <Home /> },
    { path: '/ToDos', element: <About /> },
  ]},

  { path: '/login', element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)