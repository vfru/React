import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
import './App.css'
export default class App extends Component {

  state ={users:[]}
  getUsersData=()=>{

  }




  render() {
    return (
      <div className="container">
        <Search users={this.state.users} getUsersData={this.getUsersData} />
        <List/>
      
      </div>
    )
  }
}
