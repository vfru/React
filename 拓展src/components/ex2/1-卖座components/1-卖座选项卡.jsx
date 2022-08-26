import React, { useState } from 'react'
import './卖座.css'
import Center from './Center'
import Cinema from './Cinema'
import Film from './Film'

export default function Demo() {
  const [list] = useState([
    { id: '1', text: '电影' },
    { id: '2', text: '影院' },
    { id: '3', text: '我的' },

  ])
  const [clickId, setid] = useState('1')

  function switchComponent() {
    switch (clickId) {
      case '1':
        return <Film />;
      case '2':
        return <Cinema />;
      case '3':
        return <Center />;
      default:
        return <Film />;
    }
  }

  return (
    <div>
      {
        switchComponent()
      }

      <ul>
        {
          list.map(l =>

            <li key={l.id} className={l.id === clickId ? 'active' : ''} onClick={() => setid(l.id)} >{l.text}</li>

          )
        }
      </ul>
    </div>

  )
}
