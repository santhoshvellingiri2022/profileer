import React, { useEffect, useState } from 'react'
import {AiOutlineHome,AiOutlineUser,} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import "./nav.css"
const Nav = () => {

    const [activeNav,setActiveNav] = useState('#');

    console.log(")))))))))))))))))))))))))))))");
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    
  }, []);
  console.log(window.pageYOffset)
  if(scrollPosition > 3000){
    return (<></>)
  }else{
    return (
      <nav>
          <a href='#' className={activeNav === "#" ? 'active' : ''} onClick={()=>setActiveNav("#")}><AiOutlineHome/></a>
          <a href='#about'className={activeNav === "about" ? 'active' : ''} onClick={()=>setActiveNav("about")}><AiOutlineUser/></a>
          <a href='#experience'className={activeNav === "experience" ? 'active' : ''} onClick={()=>setActiveNav("experience")}><BiBook/></a>
          <a href='#service'className={activeNav === "service" ? 'active' : ''} onClick={()=>setActiveNav("service")}><RiServiceLine/></a>
          <a href='#contact'className={activeNav === "contact" ? 'active' : ''} onClick={()=>setActiveNav("contact")}><BiMessageSquareDetail/></a>
      </nav>
    )
  }
  
}

export default Nav