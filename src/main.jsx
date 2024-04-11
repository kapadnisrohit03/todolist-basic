import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, BrowserRouter } from 'react-router-dom'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Todoapp from './Components/Todoapp.jsx';
import Navbar from './Components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/> <Home/></>
  },
  {
    path: '/todo',
    element: <><Navbar/><Todoapp/></>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
