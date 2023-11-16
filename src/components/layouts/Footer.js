import classes from "./Footer.module.css";
import europeLogo1 from "../images/europeLogo.svg";

import { Link } from "react-router-dom";

function Footer() {
  const nextPage = () => {
    return window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className={classes.footer}>
      <div className={classes.footerLogo}>
        <img src={europeLogo1}></img>
      </div>
      <div className={classes.footerLinks}>
        <ul>
          <h3>Main Links</h3>
          <li>
            <Link
              to="/"
              onClick={() => {
                nextPage();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/culture" onClick={() => {
              nextPage();
            }}>Culture</Link>
          </li>
          <li>
            <Link to="/shop" onClick={() => {
              nextPage();
            }}>Shop</Link>
          </li>
        </ul>
        <ul>
          <h3>Side Links</h3>
          <li>
            <Link to="/contact" onClick={() => {
              nextPage();
            }}>Contact</Link>
          </li>
          <li>
            <Link to="/art" onClick={() => {
              nextPage();
            }}>Art</Link>
          </li>
          <li>
            <Link to="/nature" onClick={() => {
              nextPage();
            }}>Nature</Link>
          </li>
          <li>
            <Link to="/race" onClick={() => {
              nextPage();
            }}>Race</Link>
          </li>
          <li>
            <Link to="/architecture" onClick={() => {
              nextPage();
            }}>Architecture</Link>
          </li>
        </ul>
        <ul>
          <h3>Socials</h3>
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">Youtube</Link>
          </li>
          <li>
            <Link to="">Google</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
