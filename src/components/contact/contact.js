/* eslint-disable jsx-a11y/anchor-is-valid */
import './contact.css';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

function Contact() {
  return (
    <div id='contact' className='container contact-container'>
      <h1>Contact Me</h1>
      <div className='contact-links'>
        <a
          href='https://www.linkedin.com/in/benito-ishimwe-ab902620b/'
          className='contact youtube'
        >
          <AiOutlineLinkedin className='icon' />
          <h2>
            LinkedIn <span>Benito Ishimwe</span>
          </h2>
        </a>
        <a href='' className='contact youtube'>
          <AiOutlineWhatsApp className='icon' />
          <h2>
            WhatsApp <span>+48 577 516 494</span>
          </h2>
        </a>
        <a
          href='https://www.instagram.com/benitoish/'
          className='contact youtube'
        >
          <AiOutlineInstagram className='icon' />
          <h2>
            Instagram <span>benitoish</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
