import React from 'react'
import './contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import {BiMailSend} from 'react-icons/bi'
import {BsArrowRightShort} from 'react-icons/bs'
import {RiSendPlaneLine} from 'react-icons/ri'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s3c935u', 'template_r3y6u4q', form.current, 'yXStRvuuxmum6F9GL') 
    e.target.reset() 
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <BiMailSend className='contact_option-icon'/>
            <h4>E-mail</h4>
            <h5>kalanabandaranayake@gmail.com</h5>
            <a className='contact_btn>' href='mailto:kalanabandaranayake@gmail.com' target='_blank'>Write me
              <div className='contact_btn-icon'>
                <BsArrowRightShort/>
              </div>
            </a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Kalana Bandaranayake</h5>
            <a href='https://m.me/kalana.bandaranayake.com' target='_blank'>Write me<div className='contact_btn-icon'>
                <BsArrowRightShort/>
              </div></a>
          </article>

          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+94-772-223-703</h5>
            <a href='https://api.whatsapp.com/send?phone+94772223703' target='_blank'>Write me<div className='contact_btn-icon'>
                <BsArrowRightShort/>
              </div></a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='contact_form-div'>
            <label className='contact_form-label'>Name</label>
            <input type='text' name='name'  required />
          </div>
          <div className='contact_form-div'>
            <label className='contact_form-label'>E-Mail</label>
            <input type='email' name='email'  required />
          </div>
          <div className='contact_form-div'>
            <label className='contact_form-label'>Message</label>
            <textarea name='message' rows='10'  required></textarea>
          </div>
          <div className='send_btn'>
            <button type='submit' className='btn btn-primary'>Send Message<span className='download-icon'><RiSendPlaneLine /></span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact