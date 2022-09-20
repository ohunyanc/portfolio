import React from 'react'
import './footer.css'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {GiBookshelf} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>WildCrux</a>

      <ul className='permalinks'>
        <li><a href='#'>home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#testimonials'>home</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul> 

      <div className="footer__socials">
        <a href='https://twitter.com'><AiOutlineTwitter/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://cyberaudit.info'><GiBookshelf/></a>
      </div>

    <div className="footer__copyright">
      <small>&copy; WildCrux...</small>
    </div>
    </footer>
  )
}

export default Footer