import React, { Component } from 'react'
import Item from '../Item'
export default class List extends Component {
  render() {
      const {todos,changeDone,deleteTodo} = this.props
      



    return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                    return(<Item key={todo.id} {...todo} changeDone={changeDone} deleteTodo={deleteTodo} />)
                           


                    })
                }
            </ul>
        )
    }
}
