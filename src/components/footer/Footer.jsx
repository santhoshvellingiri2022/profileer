import React from 'react'
import "./footer.css"
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoLinkedin} from "react-icons/io"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Thanking You.</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a herf="#about">About</a></li>
        <li><a herf="#experiance">Experiance</a></li>
        <li><a herf="#service">Service</a></li>
        <li><a herf="#contact">Contact</a></li>
      </ul>

      <div className='footer__social'>

        <a herf="https://facebook.com"><FaFacebook/></a>
        <a herf="https://instagram.com"><FiInstagram/></a>
        <a herf="https://linkedin.com"><IoLogoLinkedin/></a>

      </div>
      <div className="footer_copy">
        <small>
          &copy; All Rights Not reaserver 2022
        </small>
      </div>
    </footer>
  )
}

export default Footer