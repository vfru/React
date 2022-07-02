import React, { Component } from 'react'

export default class Demo extends Component {

    state = {count:0}


    jiaone=()=>{
        //对象式setState
        // this.setState({count:this.state.count+1})

        //函数式setState
        this.setState(state=>({count:state.count+1}))
    }


  render() {
    return (
      <div>
        <h1>当前总和为{this.state.count}</h1>    
        <button onClick={this.jiaone}>点我加1</button>
      </div>
    )
  }
}
