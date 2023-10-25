import React from 'react'
import './portfolio.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import {BiSolidChevronDown} from 'react-icons/bi'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <Swiper className='container portfolio_container' 
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      pagination={{ clickable: true }}>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR1} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR4} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR3} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR2} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR4} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='portfolio'>
          <div className='portfolio_avatar'>
            <img src={AVTR3} alt='avatar' />
          </div>
          <h5 className='portfolio_name'>Project title</h5>
          <p className='portfolio_discription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, quos ducimus maxime non velit nobis.</p>
          <a  href='#' target='_blank'>
                <div className='goto_link-p'>
                    <div className='portfolio_btn-goto'>More about</div>
                    <div className='portfolio_btn-icon'>
                        <BiSolidChevronDown/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default portfolio