import React, { Component } from 'react'
import {nanoid} from 'nanoid'

export default class Header extends Component {
  createTdo=(event)=>{
    const todo = {id:nanoid(),name:event.target.value,done:false}
    this.props.getInputText(todo)
  }




  render() {
    return (
        <div className="todo-header">
            <input type="text" onKeyUp={this.createTdo}  placeholder="请输入你的任务名称，按回车键确认"/>


        </div>
    )
  }
}
