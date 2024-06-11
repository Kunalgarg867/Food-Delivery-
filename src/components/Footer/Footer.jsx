import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'> 
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Our food delivery company offers a seamless and reliable way to enjoy your favorite meals from local restaurants right to your doorstep. With a diverse selection of cuisines, real-time tracking, and a user-friendly app, we ensure a delightful dining experience, no matter where you are. Enjoy quick, convenient, and delicious food delivery with us!

        </p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delievery</li>
            <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
