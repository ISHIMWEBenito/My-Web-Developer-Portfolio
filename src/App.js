import Header from './components/header/header';

import Navbar from './components/nav/nav';

import Home from './components/home/home';

import About from './components/about/about';

import Projects from './components/projects/projects';

import Contact from './components/contact/contact';

import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className='bg-circle1'> </div>
      <div className='bg-circle1'></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
