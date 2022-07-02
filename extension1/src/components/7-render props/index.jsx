import React, { useState } from 'react'
import './index.css'
export default function Parent() {

    const [name] = useState('parent组件的电脑')

    return (
        <div className='parent'>
            <h3>我是Parent组件</h3>
            <h4>Parent组件的state内容:{name}</h4>
            {/* <A >
                    <B name={name}  />
                </A> */}

            <A render={(keyboard) => <B name={name} keyboard={keyboard}/>} />
        </div>
    )
}
function A(props) {

    const [keyboard] = useState('A组件的键盘')
    return (
        <div className='a' >
            <h3>我是A组件</h3>
            <h4>A组件的state内容:{keyboard}</h4>
            {props.render(keyboard)}
            {/* {props.children} */}
        </div>
    )
}
function B(props) {
    return (
        <div className='b' >
            <h3>我是B组件</h3>
            <h4>B组件里面有:{props.name},{props.keyboard}</h4>
            {/* {console.log(props.keyboard)}s
        {console.log(props.name)} */}
        </div>
    )
}