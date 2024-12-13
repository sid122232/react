import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/contactus/contact.jsx'
import Github from './components/github/github.jsx'
const  router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
     
      { path:"",
        element:<Home/>,},
        {
          path:'/about',
          element:<About/>,
        },
        {
path:'/contact',
element:<Contact/>
        },
        {
path:'/github',
element:<Github/>
        }
]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
