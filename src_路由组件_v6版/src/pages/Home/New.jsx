import React from 'react'
import {useNavigationType,useResolvedPath} from 'react-router-dom'

export default function New() {

    console.log(useNavigationType())
    console.log('@',useResolvedPath('/user?id=001&name=tom#qwe'))

    return (
        <div>
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        </div>
    )
}
