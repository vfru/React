import React, { useState, useEffect,useRef } from 'react'
import { root } from '../../../index'

export default function Fuxi() {

    const [count, setCount] = useState(0)

    const myRef = useRef()

    function add() {
        setCount(count + 1)
    }

    function unmount(){
        root.unmount('root');
    }

    function show() {
        alert(myRef.current.value)
    }

    useEffect(() => {
       let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return()=>{
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <input type="text" ref={myRef} />
            <h1>当前和为:{count}</h1>
            <button onClick={add} >点我加1</button>
            <button onClick={unmount} >点击卸载</button>
            <button onClick={show} >点我展示数据</button>
        </div>
    )
}
