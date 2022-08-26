import React, { useEffect } from 'react'
import Swiper, { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PituteSwiper(props) {



  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination'
      },
    })

  }, [])



  return (
    <div>
      <div className="swiper" style={{height:'200px',background:'gray'}} >
        <div className='swiper-wrapper'>
        {props.children}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}
