import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Form, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Book from './components/Book/Book'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/book',
      element: <Book />
    },
    {
      path: 'about',
      element: <About />
    }
  ]
},
{
  path: 'about',
  element: <h1>hello about page</h1>,
},
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}  />)
