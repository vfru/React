import React, { Component } from 'react'

export default class Count extends Component {

  state = {count:0}
  
  selectNumber = React.createRef()

  chooseNumber=(type)=>{
    const {count} = this.state;
    let getnumber = this.selectNumber.current.value;
    if(type==='+'){
      this.setState({count:count + getnumber*1})
    }
    if(type==='-'){
      this.setState({count:count - getnumber-0})
    }
    if(type==='+J'){
      if(count % 2 !==0){
        this.setState({count:count + getnumber*1})
      }
    }
    if(type==='Y+'){
      setTimeout(()=>{
        this.setState({count:count + getnumber*1})
      },500)
    }
     
  }

  render() {
     

    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={this.selectNumber}>
          <option value=""> </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={()=>this.chooseNumber('+')}>+</button>&nbsp;
        <button onClick={()=>this.chooseNumber('-')}>-</button>&nbsp;
        <button onClick={()=>this.chooseNumber('+J')}>当前求和为奇数再加</button>&nbsp;
        <button onClick={()=>this.chooseNumber('Y+')}>异步加</button>&nbsp;
      </div>
    )
  }
}
