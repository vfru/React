import React, { Component } from 'react'

export default class Item extends Component {

  state = {mouse:false}

  mouseState=(flag)=>{
    return()=>{
     this.setState({mouse:flag})
      
    }
  }

  changCheck=(id)=>{
    return(event)=>{
      this.props.changeDone(id,event.target.checked);
    } 
  }
  clickButton=(id)=>{
    return()=>{
      this.props.deleteTodo(id);
    }
  }



  render() {
      const {name,done,id} = this.props
      const {mouse} = this.state
    return (
        <li onMouseEnter={this.mouseState(true)}  onMouseLeave={this.mouseState(false)} style={{backgroundColor:mouse ? '#ddd':'white'}} >
           
            <label> 
                <input type="checkbox" checked={done} onChange={this.changCheck(id)} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={this.clickButton(id)} style={{display:mouse? 'block':'none'}}>删除</button>
        </li>

    )
  }
}
