import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export default function Memo() {
  const [text, settext] = useState('')
  const [backgroundlist, setbackgroundlist] = useState([])
  const getCinemasList = useMemo(() => backgroundlist.filter(c => (c.name.toUpperCase().includes(text.toUpperCase()) ||
    c.address.toUpperCase().includes(text.toUpperCase()))
  )
    , [backgroundlist, text])

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5267084',
      method: 'GET',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16454231757924214661121","bc":"442000"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then((response) => {
      setbackgroundlist(response.data.data.cinemas)
    }, (reason) => {
      console.log(reason.message)
    })
  }, [backgroundlist])

  function getinput(event) {
    settext(event.target.value)
  }

  return (
    <div>
      {/* {console.log(cinemas)} */}
      <input placeholder='输入想要查看的影院' onChange={getinput} />
      {
        getCinemasList.map((c) => {
          return (
            <dl key={c.cinemaId}>
              <dt  >{c.name}</dt>
              <dd>地址:{c.address}</dd>
            </dl>
          )
        })
      }
    </div>
  )
}
