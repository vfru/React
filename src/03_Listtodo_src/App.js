import React, { Component } from 'react'
import './App.css'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'

export default class App extends Component {
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'玩游戏',done:true},
  ]}

  //打勾让done变成true
  changeDone=(id,done)=>{
    //获取状态
    const {todos} =this.state;
    //创建新todo
    const newtodos = todos.map((todo)=>{
        if(todo.id === id){
          return {...todo,done}
        }
        else{
          return todo
        }
      }
    )
      this.setState({todos : newtodos})


  }

  deleteTodo =(id)=>{
    const {todos}=this.state
    const newtodos = todos.filter((todo)=>{
      return(todo.id !== id)

    })
    this.setState({todos : newtodos})
  }

  getInputText=()=>{
    
  }

  render() {
    const {todos} =this.state;

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header todos= {todos} getInputText={this.getInputText} />
          <List todos= {todos}  changeDone={this.changeDone} deleteTodo={this.deleteTodo} />
          <Footer/>
        </div>
      </div>
    )
  }
}
