import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#home">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#about">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="www.linkedin.com/in/sagar-raj-yadav-751a18191" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sagar-raj-yadav?tab=repositories" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; sagar 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer