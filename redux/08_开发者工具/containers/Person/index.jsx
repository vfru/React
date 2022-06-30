import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {AddPersonAcion} from '../../redux/actions/person'
import { connect } from 'react-redux'

class Person extends Component {


    getPersonData=()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.addrens(personObj)
    }




  render() {
    return (
      <div>
        <h3>我是Person组件,上方总和为：{this.props.qiuhe}</h3>
        <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字' /> &nbsp;
        <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄'/> &nbsp;
        <button onClick={this.getPersonData} >添加</button>&nbsp;
        <ul>
          {this.props.rens.map((ren)=>{
            return <li key={ren.id} >{ren.name}--{ren.age}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
    state=>(
      {
        rens:state.rens,
        qiuhe:state.he
      }
      ),
    {
        addrens:AddPersonAcion
    }
)(Person)