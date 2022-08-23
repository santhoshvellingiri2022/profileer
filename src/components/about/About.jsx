import React from 'react'
import ME from "../../assets/deadpool.jpg"
import "./about.css"

import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h1>About</h1>
        <div className='main_about'>
            
            <div className='about__img'>
                <img src = {ME}></img>
            </div>
            <div className="about_awards">
              <div className='row_award'>
                <div className='award_card'>
                  <FaAward/>
                  <h5>Expireance</h5>
                  <small>1+Month</small>

                </div>
                <div className='award_card'>
                  <FiUser/>
                  <h5>Clients</h5>
                  <small> 1 and only</small>

                </div>
                <div className='award_card'>
                  <VscFolderLibrary/>
                  <h5>Projects</h5>
                  <small>10+</small>

                </div>
                

              </div>
              <a href='#contact' className='btn_talk'>Lets Talk</a>
              
            </div>
        </div>
    </section>
  )
}

export default About