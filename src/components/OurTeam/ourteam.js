import React from 'react'
import './ourteam.css'
import OurTeamImg1 from '../../assets/Images/OurTeam.jpg'
import OurTeamImg2 from '../../assets/Images/OurTeam2.jpg'

const OurTeam = () => {
    return (
        <div className='ourteam-container'>
            <img src={OurTeamImg1} alt='img' />
            <div className='content-container'>
                <img src={OurTeamImg2} alt='img' />
                <h3 className=' team-title'>Diverse perspectives, common values</h3>
                <p className='team-desc'>Our team shares a desire to achieve gender equality.</p>
                <a href='/' className='btn-ourteam'>
                    <button>Our Team</button>
                </a>
            </div>
        </div>
    )
}

export default OurTeam