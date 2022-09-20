import React, { useRef }  from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
 
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbba81h', 'template_jz1hwnm', form.current, 'QGLMARO_RMPdaPxOW')
      
    e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Get Free Consultation Today</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Drop a note</h5>
            <a href='mailto:ohunyancharles@gmail.com' target='_blank' rel="oopener noreferrer">Send a message</a>

          </article>

          <article className="contact__option">
            <AiFillTwitterSquare className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Join the conversation</h5>
            <a href='https://twitter.com/systmsnova' target='_blank' rel="oopener noreferrer">@systmsnova</a>

          </article>

          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>One text away</h5>
            <a href='https://wa.me/message/DWV6UU7H64B4A1' target='_blank' rel="oopener noreferrer">+234 818 (702) 6909</a>

          </article>
        </div>
        {/*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      
        </form>
      </div>
    </section>
  )
}

export default Contact