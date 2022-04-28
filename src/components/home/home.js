import './home.css';
import img from '../props/img5.webp';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='main-img active'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span>
        <br />
        <p>
          I am a developer focused on the web. I like to craft solid and
          scalable frontend products with great user experiences.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

// let toggle = document.querySelector('.main-img');
// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active');
// });

export default Home;
