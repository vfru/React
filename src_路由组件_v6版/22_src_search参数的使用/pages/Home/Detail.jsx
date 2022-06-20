import React from 'react'
// params参数
// import {useParams} from 'react-router-dom'
// search参数
import {useSearchParams} from 'react-router-dom'


export default function Detail() {
    //params参数
    // const{id,title,content} = useParams()
    //search参数
    const[search,setSearch] = useSearchParams()
    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');
    return (
        <ul>
            <li>
                <button onClick={()=>setSearch('id=008&title=消息8&content=你好8')} >点我更新search参数</button>
            </li>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{content}</li>
        </ul>
    )
}
