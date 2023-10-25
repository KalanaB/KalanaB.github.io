import React from 'react'
import './nav.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{BiMessageSquareDetail} from 'react-icons/bi'
import{BiCertification} from 'react-icons/bi'
import{BiFolder} from 'react-icons/bi'
import{BsPen} from 'react-icons/bs'
import{BsBrush} from 'react-icons/bs'
import{useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div ></div>
      <div class="nav-links">
        <p class="signature">Kalana B.</p>
        
        <a href='#home' onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        {/* <a href='#qualifications' onClick={()=> setActiveNav('#qualifications')} className={activeNav === '#qualifications' ? 'active' : ''}><BiCertification /></a> */}
        <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiFolder /></a>
        {/* <a href='#testimonial' onClick={()=> setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><RiServiceLine /></a> */}
        {/* <a href='#blogs' onClick={()=> setActiveNav('#blogs')} className={activeNav === '#blogs' ? 'active' : ''}><BsPen /></a> */}
        {/* <a href='#paints' onClick={()=> setActiveNav('#paints')} className={activeNav === '#paints' ? 'active' : ''}><BsBrush /></a> */}
        <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        
      </div>
      
      {/* <div class="indicator"></div> */}
    </nav>

  )
}

export default Nav