import React,{Component} from 'react'
import Child from './Child'

export default class Parent extends Component {

  state = {hasError: false,error:''}

  //当Parent子组件出现报错，会触发调用
  static getDerivedStateFromError(error){

    console.log('@@',error)
    return{hasError: true,error}
  }

  componentDidCatch(){
    console.log('统计错误次数，发送后台')
  }

  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {
         this.state.hasError ? <h2>当前网络不稳定</h2> : <Child />
        }
      </div>
    )
}

}