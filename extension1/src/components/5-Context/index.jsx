import React, { Component, createContext } from 'react'
import './index.css'

//创建Context对象
const MyContext = createContext()

export default class A extends Component {
    state = { username: 'tom', age: '18' }
    render() {
        return (
            <div className='Fa' >
                <h3>我是A</h3>
                <h4>用户名是：{this.state.username},年龄：{this.state.age}</h4>
                <MyContext.Provider value={this.state} >
                    <B />
                </MyContext.Provider>

            </div>
        )
    }
}

class B extends Component {
    render() {

        

        return (
            <div className='Ch' >
                <h4>我是B</h4>
                <C />
            </div>
        )
    }
}

// class C extends Component {
//     static contextType = MyContext;
//     render() {

//         return (
//             <div className='Gr' >
//                 <h5>我是C</h5>
//                 <h4>A组件的用户名是：{this.context.username},年龄：{this.context.age}</h4>
//             </div>
//         )
//     }
// }


function C() {
    return (
        <div>
            <div className='Gr' >
                <h5>我是C</h5>
                <h4>A组件的用户名是:
                    <MyContext.Consumer>
                        {
                            value=>{
                                // console.log(value)
                                return `${value.username},年龄是:${value.age}`
                            }
                        }
                    </MyContext.Consumer>
                </h4>
            </div>
        </div>
    )
}


