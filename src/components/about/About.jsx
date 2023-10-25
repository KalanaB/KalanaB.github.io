import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import{FaAward} from 'react-icons/fa'
import{FaUsers} from 'react-icons/fa'
import{FaFolder} from 'react-icons/fa'
import{TbMessages} from 'react-icons/tb'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div> 

        <div className='about_content'>
          <div className="about_cards">
            
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Looking forward to</small>
            </article>

            <article className='about_card'>
              <FaUsers className='about_icon' />
              <h5>Clients</h5>
              <small>Looking forward to</small>
            </article>

            <article className='about_card'>
              <FaFolder className='about_icon' />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>I am a dedicated undergraduate, actively pursuing an intern position. Currently enrolled in the Faculty of Science at the University of Colombo, undertaking a BSc (Hons) in Science and Management, industrial specialized degree, alongside the Bachelor of Information Technology (external) degree at the University of Colombo School of Computing. </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk<span className='download-icon'><TbMessages /></span></a>
        </div>
      </div>
    </section>
  )
}

export default about