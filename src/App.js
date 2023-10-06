import './App.css';
import Banner from './components/Banner/banner';
import Paragraph from './components/BottomParagraph';
import ConnectUs from './components/ContactUs/connectus';
import Hero from './components/Hero/hero';
import Navbar from './components/Navbar/navbar';
import OurProduct from './components/OurProducts/ourProduct';
import OurStory from './components/OurStory/ourstory';
import OurTeam from './components/OurTeam/ourteam';
import Subscribe from './components/Subscribe/subscribe';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurStory/>
      <OurProduct/>
      <OurTeam/>
      <Banner/>
      <ConnectUs/>
      <Subscribe/>
      <Paragraph/>
    </div>
  );
}

export default App;
