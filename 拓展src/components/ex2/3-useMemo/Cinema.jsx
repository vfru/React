import React, { useState, useEffect,useMemo } from 'react'
import axios from 'axios'

export default  function UseMemo()
{
    const [text,settext] = useState("")
    const [list,setlist] = useState([])
    useEffect(() =>
        {
            axios({
                url:'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5267084',
                method:'GET',
                headers:{'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.0","e":"16454231757924214661121","bc":"442000"}',
                        'X-Host': 'mall.film-ticket.cinema.list'}
            }).then((response)=> {
                setlist(response.data.data.cinemas)
            },(reason) => {
                console.log(reason.message)
            })
        },[]
    )
    const getlist = useMemo(() =>               //useMemo返回过滤后的数据，下方渲染直接使用即可，逻辑清晰
         list.filter(item => {
            return  item.name.toUpperCase().includes(text.toUpperCase())
                || item.address.toUpperCase().includes(text.toUpperCase())
        }),[list,text]                          //监控list与text，对象发生改变重新声明方法，减少无意义的性能消耗
    )
    return (
        <div>
            <div>
                <input type="text" onChange={(event)=>{
                  return settext(event.target.value)
                }}/>
                {
                    getlist.map(item=>{
                        return <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>
                    })
                }
            </div>
        </div>
    );
}