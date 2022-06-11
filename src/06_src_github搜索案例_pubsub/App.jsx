import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
import './App.css'
export default class App extends Component {

  render() {
    
    return (
      <div className="container">
        <Search/>
        <List />
      
      </div>
    )
  }
}
