import React, { useEffect, useState } from 'react';
import './navbar.css';
import Logo from '../../assets/Beacon-Logo.png';
import {PiEqualsLight} from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai'; // Import another icon for when links are displayed


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showLinks, setShowLinks] = useState(false); 


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainContainerStyle = {
    padding: scrolling ? '1.8vw 4vw' : '3vw 4vw',
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`main-container ${scrolling ? 'scrolling' : ''}`} style={mainContainerStyle}>
      <img src={Logo} alt='logo' />
      <div className={`links-container ${showLinks ? 'visible' : ''}`} style={{ display: showLinks ? 'block' : '' }}>
        <ul>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Team</a></li>
          <li><a href='/'>Investments</a></li>
          <li><a href='/'>Updates</a></li>
          <li><a href='/'>Resources</a></li>
          <li><a href='/'>Apply</a></li>
        </ul>
      </div>
        <div className={`menu ${showLinks ? 'active' : ''}`} onClick={toggleLinks}>
          {showLinks ? <AiOutlineClose className='menu-icon' /> : <PiEqualsLight className='menu-icon'/>}
        </div>
    </div>
  );
};

export default Navbar;
