import React from 'react'
import ME from "../../assets/deadpool.jpg"
import "./about.css"

import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className='container'>
      <h1 >About</h1>
        <div className='main_about'>
            
            <div className='about__img'>
                <img src = {ME}></img>
            </div>
            <div className="about_awards">
              <div className='row_award'>
                <article className='award_card'>
                  <FaAward/>
                  <h3>Expireance</h3>
                  <h5>1+Month</h5>

                </article>
                <article className='award_card'>
                  <FiUser/>
                  <h3>Clients</h3>
                  <h5> 1 and only</h5>

                </article>
                <article className='award_card'>
                  <VscFolderLibrary/>
                  <h3>Projects</h3>
                  <h5>10+</h5>

                </article>
                

              </div>
              <a href='#contact' className='btn_talk'>Lets Talk</a>
              <p>I find it a challenge to cooperate in a society where it's considered moral to critique a résumé yet immoral to critique morality</p>
              
            </div>
        </div>
    </section>
  )
}

export default About