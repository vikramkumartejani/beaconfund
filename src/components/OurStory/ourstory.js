import React from 'react'
import './ourstory.css'
import OurStoryImg from '../../assets/Images/OurStory.jpg'

const OurStory = () => {
    return (
        <div className='story-container'>
            <img src={OurStoryImg} alt='img' />
            <div className='ourstory-content'>
                <h3 className='title-ourstory'>Rather than changing women-led businesses to fit the system, we seek to change the system</h3>
                <p className=' desc-ourstory'>Our 10+ years of experience have helped us identify an overlooked opportunity amongst moderate growth companies. While some may be dismissive of these SMEs as ‘lifestyle’ or ‘micro-businesses’, our experience has revealed that many of these businesses are in fact profitable, cash-flow positive businesses growing at healthy rates.</p>
                <a href='/' className='btn-ourstory'>
                    <button>Our Story</button>
                </a>
            </div>
        </div>
    )
}

export default OurStory