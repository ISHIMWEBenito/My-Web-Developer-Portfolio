import './members.css';

const Members = () => {
  return (
    <div id='members' className='container members-container'>
      <h1 className='member-txt'>My Projects</h1>
      <div className='member member-4'>
        <div className='member-img4'></div>
        <div className='member-info'>
          <h1 className='name'>Adventurous World</h1>
          <h3 className='position'>React Native</h3>
          <h4 className='about'>Learn more about my project</h4>
          <a
            href='https://adventurousworld.netlify.app/'
            className='contact-member'
          >
            <span>Learn More...</span>
          </a>
        </div>
      </div>

      <div className='member member-2'>
        <div className='member-img2'></div>
        <div className='member-info'>
          <h1 className='name'>Restaurant Website</h1>
          <h3 className='position'>React</h3>
          <h4 className='about'>Learn more about my project</h4>
          <a
            href='https://benitoinhiskitchen.netlify.app/'
            className='contact-member'
          >
            <span>Learn More...</span>
          </a>
        </div>
      </div>

      <div className='member member-5'>
        <div className='member-img5'></div>
        <div className='member-info'>
          <h1 className='name'>Product Add App</h1>
          <h3 className='position'>PHP MYSQL</h3>
          <h4 className='about'>Learn more about my project</h4>
          <a
            href='https://benitojuniordeveloper.herokuapp.com/'
            className='contact-member'
          >
            <span>Learn More...</span>
          </a>
        </div>
      </div>

      <div className='member member-1'>
        <div className='member-img1'></div>
        <div className='member-info'>
          <h1 className='name'>Full Stack MERN TO DO lIST APP</h1>
          <h3 className='position'>React NodeJs MongoDB</h3>
          <h4 className='about'>Learn more about my project</h4>
          <a href='#contact' className='contact-member'>
            <span>Learn More...</span>
          </a>
        </div>
      </div>

      <div className='member member-3'>
        <div className='member-img3'></div>
        <div className='member-info'>
          <h1 className='name'>MEAN STACK TO-DO lIST APP</h1>
          <h3 className='position'>Angular NodeJs MongoDB</h3>
          <h4 className='about'>Learn more about my project</h4>
          <a href='#contact' className='contact-member'>
            <span>Learn More...</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
