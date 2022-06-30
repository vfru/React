import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { personAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.getname.value
        const age = this.getage.value
        const data = { id: nanoid(), name, age }
        this.props.personAction(data)
    }



    render() {
        return (
            <div>
                <h2>我是person组件,共有{this.props.person.length}人</h2>
                <input ref={c => this.getname = c} type="text" placeholder='输入姓名' />&nbsp;
                <input ref={c => this.getage = c} type="text" placeholder='输入年龄' />&nbsp;
                <button onClick={this.addPerson} >添加</button>&nbsp;
                <br />
                <br />
                <ul>
                    {
                        this.props.person.map((p) => {
                            return (
                                <li key={p.id} >{p.name}————{p.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            person: state.personreducer
        }
    ),
    {
        personAction,
    }
)(Person)