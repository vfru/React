import React,{useRef} from 'react'

export default function Demo() {
    const mytext = useRef()

     function handadd(){
        
        console.log(mytext.current.value)
    }

    

  return (
    <div>
      <input type="text" ref={mytext} />
      <button onClick={handadd} >add</button>
      
    </div>
  )
}
