
import React,{ useState,useEffect,useRef } from 'react'

import{root} from '../../index'
export default function Demo() {

    const[count,setCount] = useState(0)

    const myref = useRef()

   function add(){
        // setCount(count+1)
        setCount(count=>count+1)
    }

    function uncomponent() {
      console.log(root)
      root.unmount(<Demo/>)
    }

    function showinput() {
      alert(myref.current.value)
    }

    useEffect(()=>{
        setInterval(() => {
          setCount(count=>count+1)
        }, 1000);
        // return ()=>{
        //   clearInterval(timer)
        // }
    },[])


  return (
    <div>
      <h2>当前求和为{count}</h2>
      <input type="text" ref={myref} />
      <br />
      <button onClick={add} >点我加1</button>
      <button onClick={uncomponent} >卸载组件</button>
      <button onClick={showinput} >点我提示数据</button>
    </div>
  )
}
