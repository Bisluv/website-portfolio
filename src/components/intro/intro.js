import React from "react";
import  "./intro.css"
import bg from '../../assets/images.png';
import btnImg from '../../assets/hire.png';
import { Link } from "react-scroll";

const Intro = () => {
    return (
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Akangbe Kafilat</span> <br />Front-End Developer
          </span>
          <p className="introPara">I am a skilled front-end developer with the experience <br/>in creating responsive website.  </p>
      <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="portfolio"  className="bg" />
      </section>
    );
}
export default Intro;