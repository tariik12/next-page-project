import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Form, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Book from './components/Books/Books'
import BookDEtails from './components/BookDetails/BookDEtails'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ErrorPage from './components/ErrorPage/ErrorPage'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement:<ErrorPage />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/book',
      element: <Book />,
      loader: () => fetch('https://api.itbook.store/1.0/new')
    },
    {
      path: 'book/:id',
      element: <BookDEtails />,
      loader: ({params}) =>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path:'loader',
      element:<LoadingSpinner />
    }
  ]
},
{
  path: 'about',
  element: <h1>hello about page</h1>,
},
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}  />)
