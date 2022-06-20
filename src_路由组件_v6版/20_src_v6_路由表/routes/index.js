import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'




 const route = [
  {
    path:'/about',element:<About/>
  },
  {
    path:'/home',element:<Home/>
  },
  {
    path:'/',element:<Navigate to='/about' />
  },

];

  export default route