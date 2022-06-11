import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'
import './App.css'
export default class App extends Component {

  state ={
    users:[],//users初始为数组
    isFrist:true,
    isLoading:false,
    err:'',//存储请求相关错误信息
  }
  getstateObj=(stateObj)=>{
    this.setState(stateObj)
  }




  render() {
    
    return (
      <div className="container">
        <Search  getstateObj={this.getstateObj} />
        <List {...this.state}  />
      
      </div>
    )
  }
}
