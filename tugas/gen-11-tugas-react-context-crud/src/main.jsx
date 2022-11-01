import React from 'react'
import ReactDOM from 'react-dom/client'
import ListandForm from './ListandForm'
import Provider from './Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <ListandForm/>
  </Provider>
)
