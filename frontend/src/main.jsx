import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
//import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
 
const About= lazy(()=>import('./components/About.jsx'));

const createRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading......!!!!!</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant-list/:resId",
        element:<RestaurantMenu/>
      }
    ]
  },
])



createRoot(document.getElementById('root')).render(
  <RouterProvider router={createRouter}></RouterProvider>
)
