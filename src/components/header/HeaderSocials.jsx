import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {PiMediumLogoBold} from 'react-icons/pi'
import {RiBehanceLine} from 'react-icons/ri'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/kalana-bandaranayake-7a32291b1' target='_blank'><FiLinkedin /></a>
        <a href='https://github.com/KalanaB' target='_blank'><FiGithub /></a>
        <a href='https://web.facebook.com/kalana.bandaranayake' target='_blank'><FiFacebook /></a>
        <a href='https://www.instagram.com/kalanab_414/' target='_blank'><FiInstagram /></a>
        <a href='https://twitter.com/kalanab414' target='_blank'><FiTwitter /></a>
        <a href='https://medium.com/@kalanabandaranayake' target='_blank'><PiMediumLogoBold /></a>
        <a href='https://www.behance.net/kalanabandara3' target='_blank'><RiBehanceLine /></a>
    </div>
  )
}

export default HeaderSocials