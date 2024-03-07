import Hero from './Components/Hero/hero';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/contact/Contact';
import Cursor from './Components/cursor/Cursor';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';

import './app.scss'

const App = () => {
  return <div>
    <Cursor/>
    <section id='HomePage'>
      <Navbar/>
      <Hero/>
    </section>
    <section><Parallax type="services"/></section>
    <section id='Services'><Services/></section>
    <section><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'>
      <Contact/>
    </section>


  </div>;
};

export default App;
