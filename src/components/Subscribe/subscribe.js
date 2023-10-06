import React from 'react'
import './subscribe.css'
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'

const Subscribe = () => {
  return (
    <div className='subscribe-container'>
      <h3 className='title-subscribe'>An investment firm that works for women</h3>
      <div className=' icon-social-media'>
        <AiOutlineMail className=' icon-socialmedia' />
        <BiLogoLinkedin className=' icon-socialmedia' />
        <FaFacebookF className=' icon-socialmedia' />
        <AiOutlineInstagram className=' icon-socialmedia' />
      </div>
      <h2 className='title-subscribe'>Subscribe</h2>
      <p className='subscribe-content'>Sign up with your email address to receive news and updates.</p>
      <div className='signup-container'>
        <div className='signup-input'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='email' placeholder='Email Address' />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </div>

      <p className='subscribe-content'>We respect your privacy.</p>
    </div>
  )
}

export default Subscribe