import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Get Free Consultation Today</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yescharly@outlook.com</h5>
            <a href='mailto:yescharly@outlook.com' target='_blank' rel="oopener noreferrer">Send a message</a>

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
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
      
        </form>
      </div>
    </section>
  )
}

export default contact