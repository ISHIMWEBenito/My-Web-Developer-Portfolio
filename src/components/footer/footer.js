/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css';
import { BsMouse } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialDribbble } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialGithub } from 'react-icons/ti';

function Footer() {
  return (
    <div id='footer' className='container footer-container'>
      <h1>
        That's all
        <a href='#home'>
          <h2>
            <BsMouse />- scroll up-
          </h2>
        </a>
      </h1>
      <div className='social-links'>
        <a href='https://www.instagram.com/benitoish/'>
          <BsInstagram className='social' />
        </a>
        <a href='https://www.facebook.com/ben.ish.186'>
          <FaFacebookF className='social' />
        </a>
        <a href='#'>
          <TiSocialDribbble className='social' />
        </a>
        <a href='#'>
          <TiSocialYoutube className='social' />
        </a>
        <a href='https://github.com/ISHIMWEBenito'>
          <TiSocialGithub className='social' />
        </a>
      </div>
    </div>
  );
}

export default Footer;
