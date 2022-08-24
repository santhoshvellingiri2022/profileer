import React from 'react'
import "./experiance.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experience' className='container'>
     <h5 id='fth'>What Skill i Have</h5>
     <h2>My Experiance</h2>
     <div className="experience__container">
      <div className="experiance__frountend">
        <h3>Frontend Development</h3>
        <div className='experiance__content'>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>HTML</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>CSS</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>JS</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>FLUTTER</h4>
            <small>InterMidiate</small>
            </div>
          </article>
        </div>

      </div>
      <div className="experiance__backend">
        <h3>Backend Devlopement</h3>
        <div className='experiance__content'>
        <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>PYTHON</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>DART</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>SQLITE</h4>
            <small>InterMidiate</small>
            </div>
          </article>
          <article className='experiance__details'>
            <BsPatchCheckFill className='tick'/>
            <div>
            <h4>JAVA</h4>
            <small>Noobie</small>
            </div>
          </article>
        </div>

      </div>
     </div>
    </section>
  )
}

export default Experiance