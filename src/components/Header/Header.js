import React from "react";
import {Link} from "react-router-dom";

//import styles
import "./Header.scss";

//import components
import Navigation from "../Navigation/Navigation";

const Header = () => (
  <div className="top">
    <Link to={"/home"} className="logo-link">
    <div className="logo">
      <div className="logo-wrapper">
        <h1 className="logo-header">Ph&nbsp;&nbsp;&nbsp;</h1>
        <i className="material-icons logo-icon">
          photo_camera
        </i><h1 className="logo-header">to</h1>
      </div>
      <h1 className="logo-header-second">inventions</h1>
    </div>
    </Link>
    <Navigation />
  </div>
);

export default Header;
