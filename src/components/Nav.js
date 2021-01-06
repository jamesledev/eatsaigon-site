import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import Logo from '../images/logo.png';
import Ig from '../images/instagram.png';
import Twitter from '../images/twitter.png';

function Navbar() {
  return (
    <div className="navContainer">
      <img className="logo" src={Logo} alt="Eat Saigon logo" />
      <ul className="navButtons">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/#ourStory">Our Story</a>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <a href="/#location">Location</a>
        </li>
      </ul>
      <div className="icons">
        <a
          href="https://www.instagram.com/eatsaigon/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <img className="ig" src={Ig} alt="Instagram Profile" />
        </a>
        <a
          href="https://twitter.com/eatsaigon?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          <img className="twitter" src={Twitter} alt="Twitter Profile" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
