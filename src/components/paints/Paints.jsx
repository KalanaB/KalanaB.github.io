import React from 'react'
import './paints.css'
import AVTR1 from '../../assets/Art1.png'
import AVTR2 from '../../assets/Art2.png'
import AVTR3 from '../../assets/Art3.png'
import AVTR4 from '../../assets/Art4.png'
import AVTR5 from '../../assets/Art5.png'
import AVTR6 from '../../assets/Art6.png'
import AVTR7 from '../../assets/Art7.png'
import AVTR8 from '../../assets/Art8.png'
import AVTR9 from '../../assets/Art9.png'
import AVTR10 from '../../assets/Art10.png'
import AVTR11 from '../../assets/Art11.png'
import AVTR12 from '../../assets/Art12.png'
import AVTR13 from '../../assets/Art13.png'
import AVTR14 from '../../assets/Art14.png'
import AVTR15 from '../../assets/Art15.png'
import AVTR16 from '../../assets/Art16.png'
import AVTR17 from '../../assets/Art17.png'
import AVTR18 from '../../assets/Art18.png'
import AVTR19 from '../../assets/Art19.png'
import AVTR20 from '../../assets/Art20.png'
import AVTR21 from '../../assets/Art21.png'
import AVTR22 from '../../assets/Art22.png'
import AVTR23 from '../../assets/Art23.png'
import AVTR24 from '../../assets/Art24.png'
import AVTR25 from '../../assets/Art25.png'
import AVTR26 from '../../assets/Art26.png'
import AVTR27 from '../../assets/Art27.png'
import AVTR28 from '../../assets/Art28.png'
import AVTR29 from '../../assets/Art29.png'
import AVTR31 from '../../assets/Art31.png'
import AVTR32 from '../../assets/Art32.png'
import AVTR33 from '../../assets/Art33.png'
import AVTR34 from '../../assets/Art34.png'
import AVTR35 from '../../assets/Art35.png'
import AVTR36 from '../../assets/Art36.png'
import AVTR37 from '../../assets/Art37.png'
import AVTR38 from '../../assets/Art38.png'


import {BsArrowRightShort} from 'react-icons/bs'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Color } from 'three'


const paints = () => {
  return (
    <section id='paints'>
      <h5>My artworks</h5>
      <h2>Art Works</h2>

      <Swiper className='container paints_container' 
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      pagination={{ clickable: true }}>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR1} alt='avatar' />
          </div>
          <h5 className='art_name'>Captivating Beauty</h5>
          <a  href='https://www.behance.net/gallery/170382501/Captivating-Beauty' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>
            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR2} alt='avatar' />
          </div>
          <h5 className='art_name'>Soulful Eyes</h5>
          <a  href='https://www.behance.net/gallery/170382949/Soulful-Eyes' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>
            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR3} alt='avatar' />
          </div>
          <h5 className='art_name'>Canine Compendium</h5>
          <a  href='https://www.behance.net/gallery/169989411/Canine-Compendium' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>
            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR4} alt='avatar' />
          </div>
          <h5 className='art_name'>The Radiance of Youth</h5>
          <a  href='https://www.behance.net/gallery/170382895/The-Radiance-of-Youth' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>
            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR5} alt='avatar' />
          </div>
          <h5 className='art_name'>Tusked Tar</h5>
          <a  href='https://www.behance.net/gallery/169930627/Tusked-Tar' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR6} alt='avatar' />
          </div>
          <h5 className='art_name'>The Cat's Meow</h5>
          <a  href='https://www.behance.net/gallery/170382357/The-Cats-Meow' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR7} alt='avatar' />
          </div>
          <h5 className='art_name'>Majestic Mane</h5>
          <a  href='https://www.behance.net/gallery/169932525/Majestic-Mane' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR8} alt='avatar' />
          </div>
          <h5 className='art_name'>Shadow Stallion</h5>
          <a  href='https://www.behance.net/gallery/169932603/Shadow-Stallion' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR9} alt='avatar' />
          </div>
          <h5 className='art_name'>A Glimpsw in to the Soul</h5>
          <a  href='https://www.behance.net/gallery/170382571/A-Glimpse-into-the-Soul' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR10} alt='avatar' />
          </div>
          <h5 className='art_name'>Doodle cats</h5>
          <a  href='https://www.behance.net/gallery/170384715/Doodle' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR11} alt='avatar' />
          </div>
          <h5 className='art_name'>Arboreal Impressions</h5>
          <a  href='https://www.behance.net/gallery/169932717/Arboreal-Impressions' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR12} alt='avatar' />
          </div>
          <h5 className='art_name'>A Moment in Time</h5>
          <a  href='https://www.behance.net/gallery/170383383/A-Moment-in-Time' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR13} alt='avatar' />
          </div>
          <h5 className='art_name'>Eagle Euphoria</h5>
          <a  href='https://www.behance.net/gallery/169931115/Eagle-Euphoria' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR14} alt='avatar' />
          </div>
          <h5 className='art_name'>Charm an Elegance</h5>
          <a  href='https://www.behance.net/gallery/170383411/Charm-and-Elegance' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR15} alt='avatar' />
          </div>
          <h5 className='art_name'>Symmetry in Play</h5>
          <a  href='https://www.behance.net/gallery/170381863/Symmetry-in-Play' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR16} alt='avatar' />
          </div>
          <h5 className='art_name'>Evergreen Serinity</h5>
          <a  href='https://www.behance.net/gallery/170382087/Evergreen-Serenity' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR17} alt='avatar' />
          </div>
          <h5 className='art_name'>Grace</h5>
          <a  href='https://www.behance.net/gallery/170382661/Grace-and-Serenity' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR18} alt='avatar' />
          </div>
          <h5 className='art_name'>The Freedom Of Movement</h5>
          <a  href='https://www.behance.net/gallery/170383599/The-Freedom-of-Movement' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR19} alt='avatar' />
          </div>
          <h5 className='art_name'>The Gentleman's Cigarette</h5>
          <a  href='https://www.behance.net/gallery/169932391/The-Gentlemans-Cigarette' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR20} alt='avatar' />
          </div>
          <h5 className='art_name'>The Sparcle of Life</h5>
          <a  href='https://www.behance.net/gallery/170383539/The-Sparkle-of-Life' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR21} alt='avatar' />
          </div>
          <h5 className='art_name'>Avian Serenade</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR22} alt='avatar' />
          </div>
          <h5 className='art_name'>Roman Architecture</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR23} alt='avatar' />
          </div>
          <h5 className='art_name'>Archi</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR24} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR25} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR26} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR27} alt='avatar' />
          </div>
          <h5 className='art_name'>Aves</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR28} alt='avatar' />
          </div>
          <h5 className='art_name'>Blue Jacket</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR29} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR31} alt='avatar' />
          </div>
          <h5 className='art_name'>Doodle</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide>

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR32} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR33} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR34} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR35} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR36} alt='avatar' />
          </div>
          <h5 className='art_name'>Name</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR37} alt='avatar' />
          </div>
          <h5 className='art_name'>Mandala</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        {/* <SwiperSlide className='paints'>
          <div className='art_avatar'>
            <img src={AVTR38} alt='avatar' />
          </div>
          <h5 className='art_name'>Enchanting Euphony</h5>
          <a  href='https://www.behance.net/kalanabandara3' target='_blank'>
                <div className='goto_link'>
                    <div className='art_btn-goto'>Go to</div>
                    <div className='art_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>            
        </SwiperSlide> */}

        
      </Swiper>
    </section>
  )
}

export default paints