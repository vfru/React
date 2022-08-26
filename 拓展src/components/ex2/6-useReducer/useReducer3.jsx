import axios from 'axios'
import React, { useEffect, useContext, useReducer } from 'react'
import './index.css'
const context = React.createContext()    //创建context对象

const initalState = {
    list: [],
    info: "",
}
const reducer = (prestate, actions) => {
    const newstate = { ...prestate }
    switch (actions.type) {
        case 'list':
            newstate.list = actions.value
            return newstate
        case 'info':
            newstate.info = actions.value
            return newstate
        default:
            return prestate
    }
}

export default function UseContext() {

    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(() => {
        
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8664044",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1656902687362959096250369","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then(
            response => {
                console.log(response.data.data)
                dispatch({
                    type: 'list',
                    value: response.data.data.films
                })
                
            },
            reason => {
                console.log(reason)
            }
        )
    }, [])

    return (
        <context.Provider value={{       //生产者发送状态及方法
            state, dispatch
        }}>
            <div>
                {/* {this.state.info} */}
                {
                    state.list.map(item =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <Detail></Detail>
            </div>
        </context.Provider>
    );
}

function FilmItem(props) {
    const { name, poster, grade, synopsis } = props;
    const { dispatch } = useContext(context)    //消费者声明需要数据
    return <div className="filmitem" onClick={() => {
        dispatch({
            type: 'info',
            value: synopsis
        })
    }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
    </div>

}
function Detail() {
    const {state} = useContext(context)    //消费者声明需要数据
    return <div className="filmdetail">
        {state.info}
    </div>
}