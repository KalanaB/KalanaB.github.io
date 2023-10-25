import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import {BsMedium} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaBehance} from 'react-icons/fa'
import {IoMdArrowRoundUp} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Kalana Bandaranayake</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#qualifications'>Qualifications</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#blogs'>Blogs</a></li>
        <li><a href='#paints'>Paints</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://web.facebook.com/kalana.bandaranayake'><FaFacebookF/></a>
        <a href='https://www.instagram.com/kalanab_414/'><AiFillInstagram/></a>
        <a href='https://twitter.com/kalanab414'><IoLogoTwitter/></a>
        <a href='https://medium.com/@kalanabandaranayake'><BsMedium/></a>
        <a href='https://github.com/KalanaB'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/kalana-bandaranayake-7a32291b1'><FaLinkedin/></a>
        <a href='https://www.behance.net/kalanabandara3'><FaBehance/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Kalana Bandaranayake. All rights reserved.</small>
      </div>

      <div className='scroll_top'>
        <a href='#'><IoMdArrowRoundUp/></a>
      </div>
      
      
    </footer>
  )
}

export default Footer