import React from 'react'
import "./service.css"
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id="service" className='container'>
      <h5 id='h1name'>What i offers</h5>
      <h2>service</h2>
      <div className='service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>Todo List</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>Simple Point game</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>TMdb(The movie Lister)</p>
            </li>
          
              
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>Asura Vegies web Hosting</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>Raspberry pi live cam server</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>jellyfin mediaserver</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creat</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>face recogation ip cam</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>Pointer Game</p>
            </li>
            <li>
              <BiCheck className='service__cheacker'/>
              <p>HomeAutomation</p>
            </li>
              
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service