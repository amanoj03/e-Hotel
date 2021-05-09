import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to="/" className="navbar-brand">
            <b
              style={{ color: "darkblue", fontFamily: "fantasy", fontSize: 25 }}
            >
              Hotel Pennsylvania
            </b>
          </Link>
          <li className="navbar-item">
            <Link to="/about-us" className="nav-link">
              <p style={{ color: "darkblue" }}>About</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/gallery" className="nav-link">
              <p style={{ color: "darkblue" }}>Gallery</p>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/book" className="nav-link">
              <p style={{ color: "darkblue" }}>Book </p>
            </Link>
          </li>
          <li className="navbar-item" style={{ color: "black" }}>
            <Link to="/contact" className="nav-link">
              <p style={{ color: "darkblue" }}>Call </p>
            </Link>
          </li>
        </ul>
        <div className="social-part">
          {/* <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i> */}
          <a
            href="https://www.facebook.com/"
            className="fblink"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/manoj__221b/"
            className="instalink"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://twitter.com/"
            className="twitterlink"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} href="" size="2x" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
