import "./Projects.css";

import IMG1 from "../../assets/Foodiez.png";
import IMG2 from "../../assets/cashflow.png";
import IMG3 from "../../assets/portfolio.png";
import IMG4 from "../../assets/resumebuilder.png";
import IMG5 from "../../assets/imagesearch.png";
import IMG6 from "../../assets/shoppingsite.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Foodiez",
      img: IMG1,
      description:
        "A comprehensive food delivery website built using the MERN stack and integrated with the Swiggy API. This platform offers users a seamless experience to browse, search, add to cart, and order their favorite meals from local restaurants. Featuring real-time updates, secure payment integration, and intuitive navigation, it ensures a hassle-free dining experience from browsing to checkout.",
      technologies: "React Js | Redux | Node Js | Express Js | MongoDB",
      link: "https://foodiiezz.netlify.app",
      github: "https://github.com/sagar-raj-yadav/foodiez",
    },
    {
      id: 2,
      title: "Resume Builder",
      img: IMG4,
      description:
        "The Resume Builder project is a React application that helps users create professional resumes by inputting personal and work information. It features a preview of the resume and a dynamic interface that adapts to various screen sizes for an optimal user experience.",
      technologies: "React Js | CSS | Javascript",
      link: "https://resumemasteroe.netlify.app/",
      github: "https://github.com/sagar-raj-yadav/resume_maestro/tree/main/resume-builder",
    },
    {
      id: 3,
      title: "Cash Flow Manager",
      img: IMG2,
      description:
        "The Expense Tracker project is a React application for managing income and expenses, featuring a transaction list and a visual pie chart for spending categories. It ensures a responsive design for an optimal user experience across devices.",
      technologies: "React Js | Redux | CSS | Javascript ",
      link: "https://cashflowmanager.netlify.app/",
      github: "https://github.com/sagar-raj-yadav/cash-flow-manager",
    },
    
    {
      id: 4,
      title: "portfolio",
      img: IMG3,
      description: "A dynamic portfolio built with React and CSS, showcasing projects and skills through an interactive and responsive interface. Designed with a modern aesthetic, it includes smooth animations and a user-friendly layout. Optimized for both desktop and mobile devices to ensure seamless browsing experiences.",
      technologies: "React Js | CSS | JavaScript",
      link: "https://portfoliosagarraj.netlify.app/",
      github: "https://github.com/sagar-raj-yadav/porfolio",
    },
    {
      id: 5,
      title: "shopping site",
      img: IMG6,
      description:
        "A modern shopping site designed to offer a seamless and enjoyable online shopping experience. Users can browse a wide range of products across various categories, add items to their cart, and make secure payments. The platform features user-friendly navigation, advanced search and filtering options, and real-time order tracking to ensure a convenient and satisfying shopping journey.",
      technologies: "HTML | CSS | Javascript",
      link: "",
      github: "https://github.com/sagar-raj-yadav/Myntra_clone",
    },
    {
      id: 6,
      title: "Image Search",
      img: IMG5,
      description:
        "An innovative Image Search website that allows users to search and explore images across all categories. Built with a sleek and responsive design, it provides an intuitive interface for discovering high-quality images. Features include advanced filtering options, quick previews, and seamless navigation for an enhanced user experience.",
      technologies: "React Js  | CSS | Javascript ",
      link: "https://imagesearchingg.netlify.app/",
      github: "https://github.com/sagar-raj-yadav/image-search",
    },
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
