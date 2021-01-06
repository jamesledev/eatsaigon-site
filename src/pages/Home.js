import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

import Navbar from '../components/Nav';
import Carousel from '../components/Carousel';
import Logo from '../images/logo.png';

function Home() {
  return (
    <>
      <div className="backgroundPicHome">
        <Navbar />
        <div className="homeContainer">
          <div className="homeText">
            <h1>Eat Saigon Restaurant</h1>
            <h2>Authentic Vietnamese Food</h2>
          </div>
        </div>
      </div>
      <ScrollableAnchor id={'ourStory'}>
        <div className="storyContainer background">
          <img className="storyLogo" src={Logo} alt="Eat Saigon logo" />
          <h1>Our Story</h1>
          <p className="textBox">
            What started off as a dream soon became reality as our head chef
            Binh Dinh decided to open Saigon Vietnamese restaurant. A small
            family run restaurant in Northampton with recipes passed down from
            multiple generations. Combining these recipes with fresh and vibrant
            ingredients provies a diverse menu worthy of being an authentic
            Vietnamese Restaurant.
            <br />
            <br />
            Not only is there traditional food but also a wide array of
            Vietnamese inspired drinks as well as bubble tea options too.
            <br />
            <br />
            With multiple certicates of excellence awarded to us from
            Tripadvisor we strive to give you the best experience of Vietnamese
            food in the country.
            <br />
          </p>
          <p>Click to see our menu below:</p>
          <ul className="navButtonHome">
            <Link to="/menu">Menu</Link>
          </ul>
        </div>
      </ScrollableAnchor>
      <div className="pictureCarousel background">
        <Carousel />
      </div>
      <ScrollableAnchor id={'location'}>
        <div className="locationContainer">
          <h1>You can find us below</h1>
          <div className="mapContainer">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.952564840903!2d-0.8998410373864395!3d52.23668754878126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5a81754a0d11735!2sEat%20Saigon!5e0!3m2!1sen!2suk!4v1609959010219!5m2!1sen!2suk"
              width="800"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </ScrollableAnchor>
    </>
  );
}
export default Home;
