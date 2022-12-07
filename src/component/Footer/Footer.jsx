import React from 'react'
import './footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'


export const Footer = () => {
  return (
    <div className='footer-container'>
    <hr />
    <div className='footer'>
      <div className='social-links'>
        <img src={Github} alt="GitHub logo" />
        <img src={Instagram} alt="Instagram logo" />
        <img src={LinkedIn} alt="LinkedIn logo" />
      </div>
    <div className='logo-f'>
        <img src={Logo} alt="logo" />
        </div>
       </div>
       <div className="blur blur-f-1"></div>
       <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer