import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from"../../assets/me.png"
import HeaderSocial from './HeaderSocial'



const Header = () => {
  return (
    <header>
        
        <div className='container header__container'>
        
            <h5>hello I'm</h5>
            <h1>Santhosh Vellingiri</h1>
            <h5>Full-Stack Devloper</h5>
            <CTA></CTA>
            <div className="img">
                <img src={ME} alt='me'></img>
            </div>
            <a href='#contact' className='scrool__down'>Scrool Down</a>
            <HeaderSocial/>
            
        </div>
    </header>
  )
}

export default Header