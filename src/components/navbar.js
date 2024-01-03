import React from "react";
import "./navbar.css"
import logo from "./../assets/logo.JPG";
import { Link } from 'react-scroll';
import contactImg from "./../assets/contacticon.png";

const Narbar = () =>{
    return (
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Client</Link>
        </div>
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact
        </button>
      </nav>
    );
}

export default Narbar;