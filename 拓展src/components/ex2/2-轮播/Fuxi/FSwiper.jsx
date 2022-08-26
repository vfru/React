import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function FSwiper() {
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
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
      style={{height:'1000px'}}
      >
        {
          pitutes.map((p) =>
          (
            <SwiperSlide key={p.filmId}><img src={p.poster} alt={p.name} style={{ width: '100%' }} /></SwiperSlide>
          )
          )
        }



      </Swiper>
    </div>
  )
}
