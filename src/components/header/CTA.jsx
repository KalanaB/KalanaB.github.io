import React from 'react'
import CV from '../../assets/cv.pdf'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {FiMessageSquare} from 'react-icons/fi'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV<span className='download-icon'><HiOutlineDocumentText /></span></a>
        <a href='#contact' className='btn btn-primary'>Let's Talk<span className='download-icon'><FiMessageSquare /></span></a>
    
    </div>
  )
}

export default CTA