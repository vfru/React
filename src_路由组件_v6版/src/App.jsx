import React from 'react'
import { NavLink,useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './component/Header'


export default function App() {

  const element = useRoutes(routes)

  function activeName({isActive}){
      return isActive ? 'list-group-item Yeah' : 'list-group-item'
  }



  return (
    <div>
      <div className="row">
        <Header />
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
          {element}

          </div>
        </div>
      </div>
    </div>
  )
}
