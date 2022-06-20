import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    function toForward() {
        navigate(1);
    }

    function toGoback() {
        navigate(-1);
    }



    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
            <button onClick={toForward} >前进</button>
            <button onClick={toGoback} >后退</button>


        </div>
    )
}
