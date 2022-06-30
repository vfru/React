import React, { Component } from 'react'
//引入store,用于获取里面的数据
import store from '../../redux/store'
export default class Count extends Component {

  // componentDidMount(){
  //   //每次store的状态发生变化都会调用
  //   store.subscribe(()=>{
  //     this.setState({})
  //   })
  // }
  
  selectNumber = React.createRef()

  chooseNumber=(type)=>{
    
    let getnumber = this.selectNumber.current.value;
    if(type==='+'){
      store.dispatch({type:'increment',data:getnumber*1})
    }
    if(type==='-'){
      store.dispatch({type:'decrement',data:getnumber*1})
    }
    if(type==='+J'){
      if( store.getState() % 2 !==0){
        store.dispatch({type:'increment',data:getnumber*1})
      }
    }
    if(type==='Y+'){
      setTimeout(()=>{
        store.dispatch({type:'increment',data:getnumber*1})
      },500)
    }
     
  }

  render() {
     

    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
