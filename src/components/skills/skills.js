import React from "react";
import "./skills.css";
import FrontEnd from '../../assets/front-end.jpg';
 import Code from '../../assets/code.png';
 import Responsive from '../../assets/responsive.png';

const Skills = () => {
    return (
      <section id="skills">
        <span className="skillTitle">What i do </span>
        <span className="skillDes">
          i am a passionate web developer with experience in creating visually
          apealing and user-friendly websites. I have strong understanding of
          developing and a token eye for detail.i am proficientbin HTML, CSS,
          and JavaScript, as well as using bootstrap.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img scr={FrontEnd} alt="Front-end Developer" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Front-End Developer</h2>
              <p>this is a demo</p>
            </div>
          </div>
          <div className="skillBar">
            <img scr={Code} alt="Bootsrap knowledge" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Bootsrap knowledge</h2>
              <p></p>
            </div>
          </div>
          <div className="skillBar">
            <img scr={Responsive} alt="Responsive website" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Responsive Website</h2>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Skills;