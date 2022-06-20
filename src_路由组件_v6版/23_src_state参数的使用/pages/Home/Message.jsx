import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '01', title: '消息1', content: '你好1' },
        { id: '02', title: '消息2', content: '你好2' },
        { id: '03', title: '消息3', content: '你好3' },
        { id: '04', title: '消息4', content: '你好4' },
    ])



    return (
        <div>
            <ul>

                {messages.map((m) => {
                    return (
                        <li key={m.id} >
                            {/* params参数 */}
                            {/* <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>&nbsp;&nbsp; */}
                            {/* search参数 */}
                            {/* <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>&nbsp;&nbsp; */}
                            {/* state参数 */}
                            <Link
                                to={`detail`}
                                state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content,
                                }}
                            >{m.title}</Link>&nbsp;&nbsp;
                        </li>
                    )

                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
