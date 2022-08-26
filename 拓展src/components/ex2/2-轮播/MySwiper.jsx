import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PituteSwiper from './轮播'


export default function MySwiper() {

    const [pitutes, setpitutes] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8664044",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1656902687362959096250369","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
        }).then(
            response => {
                setpitutes(response.data.data.films)
                
            },
            reason => {
                console.log(reason)
            }
        )
    }, [])



    return (
        <div>
            <PituteSwiper>
                {
                    pitutes.map((p)=>{
                        return(
                        <SwiperItem key={p.filmId}><img src={p.poster} alt={p.name} style={{width:'100%'}} /></SwiperItem>
                        )
                    })
                }
                
                
            </PituteSwiper>
        </div>
    )
}



function SwiperItem(props) {
    return (

        <div className="swiper-slide">
            {props.children}
        </div>

    )
}
