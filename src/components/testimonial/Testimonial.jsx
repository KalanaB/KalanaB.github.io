import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from my clients</h5>
      <h2>Testimonial</h2>

      <Swiper className='container testimonials_container' 
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR1} alt='avatar' />
          </div>
          <h5 className='client_name'>Name</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vero perspiciatis qui similique. Commodi, recusandae debitis fugiat quas ad cupiditate laudantium cum reiciendis inventore ipsam ratione nihil laborum expedita consectetur.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR2} alt='avatar' />
          </div>
          <h5 className='client_name'>Name</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vero perspiciatis qui similique. Commodi, recusandae debitis fugiat quas ad cupiditate laudantium cum reiciendis inventore ipsam ratione nihil laborum expedita consectetur.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR3} alt='avatar' />
          </div>
          <h5 className='client_name'>Name</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vero perspiciatis qui similique. Commodi, recusandae debitis fugiat quas ad cupiditate laudantium cum reiciendis inventore ipsam ratione nihil laborum expedita consectetur.</small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client_avatar'>
            <img src={AVTR4} alt='avatar' />
          </div>
          <h5 className='client_name'>Name</h5>
            <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vero perspiciatis qui similique. Commodi, recusandae debitis fugiat quas ad cupiditate laudantium cum reiciendis inventore ipsam ratione nihil laborum expedita consectetur.</small>
        </SwiperSlide>

        
      </Swiper>
    </section>
  )
}

export default testimonial