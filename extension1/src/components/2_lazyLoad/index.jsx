import React, { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Loading from './Loading'




export default function Demo() {
  const Home = lazy(() => import('./Home'))
  const About = lazy(() => import('./About'))

  function activeName({ isActive }) {
    return isActive ? 'list-group-item Yeah' : 'list-group-item'
  }



  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={activeName} to="/about">About</NavLink>
            <NavLink className={activeName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            {/* 注册路由 */}
            <Suspense fallback={<Loading/>} >
              <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/home' element={<Home />} />
              </Routes>
            </Suspense>


          </div>
        </div>
      </div>
    </div>
  )
}
