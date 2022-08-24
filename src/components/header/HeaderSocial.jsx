import React from 'react'
import './header.css'
import {AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'
const HeaderSocial = () => {
  return (
    <div className='hearder__social' >
        <a href='https://linkedin.com' target="_blank"><AiFillLinkedin/></a>
        <a href='https://github.com' target="_blank"><AiFillGithub/></a>
        <a href='https://facebook.com' target="_blank"><AiFillFacebook/></a>
    </div>
  )
}

export default HeaderSocial;