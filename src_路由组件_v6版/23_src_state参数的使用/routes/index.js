import React from 'react'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About'
import New from '../pages/Home/New'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Detail'



const route = [
  {
    path: '/about', element: <About />
  },
  {
    path: '/home', element: <Home />,
    children: [
        { path: 'news', element: <New /> },
        {
          path: 'Message', element: <Message />,
          children: [
            { path: 'detail', element: <Detail /> }
          ]

        },
    ]
  },
  {
    path: '/', element: <Navigate to='/about' />
  },

];

export default route