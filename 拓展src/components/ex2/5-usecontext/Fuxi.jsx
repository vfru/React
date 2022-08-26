import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import './index.css'
import { createContext } from 'react'

const Mycontext = createContext()

export default function Demo() {

    const [list, setlist] = useState([])
    const [info, setinfo] = useState("")

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8664044",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1656902687362959096250369","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            },

        }).then(
            response => {
                console.log(response)
                setlist(response.data.data.films)
            },
            reason => {
                console.log(reason)
            }
        )
    }, [])

    return (

        <Mycontext.Provider value={{
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }} >
            <div>
                {/* {this.state.info} */}
                {
                    list.map(item =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <Detail></Detail>
            </div>
        </Mycontext.Provider>

    )
}

function FilmItem(props) {
    const { name, poster, grade, synopsis } = props;
    const value = useContext(Mycontext)    //消费者声明需要数据
    return <div className="filmitem" onClick={() => {
        value.changeInfo(synopsis)
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
    </div>

}
function Detail() {
    const value = useContext(Mycontext)    //消费者声明需要数据
    return <div className="filmdetail">
        {value.info}
    </div>
}