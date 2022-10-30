import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MutantList from './pages/MutantList'
import InsertMutant from './pages/InsertMutant'
import MutantDetails from './pages/MutantDetails'

const router = createBrowserRouter([
  { path: '/', element: <MutantList />  },

  {path:'/form', element: <InsertMutant />, children:[
    {path:':mutantID', element:<InsertMutant />},
  ]},

  {path:':mutantID', element: <MutantDetails />},


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
