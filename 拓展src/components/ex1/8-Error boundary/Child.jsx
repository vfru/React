import React, { useState } from 'react'
import './index.css'
export default function Child() {


    // const [persons] = useState([
    //     { id: '001', name: 'Tom', age: '18' },
    //     { id: '002', name: 'Jeff', age: '19' },
    //     { id: '003', name: 'Jhon', age: '20' },
    // ])
    const [persons] = useState('abc')


    return (
        <div>
            <h3>我是child组件</h3>
            {persons.map((p)=>{
                return <h4 key={p.id} > 姓名：{p.name},年龄：{p.age} </h4>
            })}
        </div>
    )
}
