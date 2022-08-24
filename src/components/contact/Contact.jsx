import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from'react-icons/md';
import {RiMessengerLine} from"react-icons/ri";
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fp4jb8h', 'template_yjxjc8l', form.current, 'zDThgLeIeTb997byk')
      .then((result) => {
          console.log(result.text);
          alert("Email send to Santhosh")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact' className='container'>
      <h5 id='h5tag'>Get In Touch</h5>
      <h2 className='conact_name' >Contact Me</h2>
      <div className=" contact__container">
        <div className="contact__options">
          {/* START OPTION */}
          <article className='contact__option'>
            <MdOutlineEmail className='icon'/>
            <h4>Email</h4>
            <h5>skvj153@gmail.com</h5>
            <a href='mailto:skvj153@gmail.com' target="_black">Send a Message</a>
          </article>
           {/* END OF A OPTION */}
           <article className='contact__option'>
            <RiMessengerLine className='icon'/>
            <h4>Messanger</h4>
            <h5>santhosh</h5>
            <a href='https://m.me/122820672443499' target="_black">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='icon'/>
            <h4>Whatsapp</h4>
            <h5>8870551916</h5>
            <a href='https://api.whatsapp.com/esnt?phone+918870551916' target="_black">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email Id' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='btn2'><button className='btn btn-primary btn2 ' type='submit'>Sent Message</button></div>

        </form>
       
        
        
      </div>
    </section>
  )
}

export default Contact