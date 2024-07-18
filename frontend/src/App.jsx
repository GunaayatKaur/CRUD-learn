import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Problem from './components/problems/Problem.jsx'
import AddP from './components/addProbs/AddProb.jsx'
import Edit from './components/update/Edit.jsx'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Problem/>,
    },
    {
      path: "/add",
      element: <AddP/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>
    }
  ])

  return (
    <div>
      <RouterProvider router = {route}>

      </RouterProvider>
    </div>
  )
}

export default App