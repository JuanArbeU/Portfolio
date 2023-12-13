import React from "react";
import "./intro.css";
import bg from "../../Assets/React-icon.svg.png";
import btnImg from '../../Assets/briefcase-regular-24.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Arbe</span> <br />
          Website Designer
        </span>
        <p className="introPara">
          Skilled web designer with experience in creating 
          <br />
           visually appealing and user-friendly WebSites
        </p>
        <Link><button className="btn"><img src={btnImg} alt="Hire me" className="btnImg"/> Hire</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
