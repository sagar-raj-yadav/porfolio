import "./intro.css";

import React from "react";
import img from '../../assets/profile-pic.jpg'
import Header from './../header/Header';

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="sagar raj yadav" />
          </div>
        </div>
        <div className="about__content">
          <div><Header /></div>
          <p className="listofp">
          Aspiring Software Engineer with a focus on both Frontend and Backend development, 
          equipped with a solid understanding of web-based user interactions and server-side technologies.
           Proficient in designing and implementing responsive user interface components using React and 
           developing robust backend solutions with Node.js and Express.js. Skilled in translating designs and 
           wireframes into high-quality code, and writing efficient application logic. Adept at monitoring and
            maintaining both frontend and backend performance, with strong troubleshooting and debugging capabilities to 
            ensure optimal functionality and user experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
