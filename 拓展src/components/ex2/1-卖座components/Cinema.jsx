import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Cinema() {

    const [cinemas, setcinemas] = useState([])
    const [backgroundlist, setbackgroundlist] = useState([])

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5267084',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16454231757924214661121","bc":"442000"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((response) => {
            // setcinemas(response.data.data.cinemas)
            setbackgroundlist(response.data.data.cinemas)
            setcinemas(backgroundlist)
        }, (reason) => {
            console.log(reason.message)
        })

    }, [backgroundlist])

    function getinput(event) {
        const newcinemas = backgroundlist.filter(c => {
            return (c.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
                c.address.toUpperCase().includes(event.target.value.toUpperCase()))
        })
        setcinemas(newcinemas)
    }

    return (
        <div>
            {/* {console.log(cinemas)} */}
            <input placeholder='输入想要查看的影院' onChange={getinput} />
            {
                cinemas.map((c) => 
                    
                        <dl key={c.cinemaId}>
                            <dt  >{c.name}</dt>
                            <dd>地址:{c.address}</dd>
                        </dl>
                    
                )
            }
        </div>
    )
}
