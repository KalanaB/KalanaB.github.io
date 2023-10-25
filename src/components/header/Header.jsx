import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {TfiMouse} from 'react-icons/tfi'



const header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1 >Kalana Bandaranayake</h1>
        <h5 className="text-light-header">Undergraduate</h5>
        <CTA />
        <HeaderSocials />
        {/* <div className='me-background'> */}
          <div className='me'>
            <img src={ME} alt='me' />
          </div>
        {/* </div> */}
        
        <div className='scroll'>
          <a href='#contact' className='scroll_down'>Scroll Down</a>
          <div className='scroll-icon'><TfiMouse/></div>
        </div>
        
      </div>
    </header>
  )
}

export default header