import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio3.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Tom an Jerry Game</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://tomandjerry07.netlify.app'
              className='btn btn-primary'
              target='_blank'>
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Dynamic Website</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://e-commerce07.netlify.app'
              className='btn btn-primary'
              target='_blank'>
              Live Demo
            </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Candy Crush Game</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://candy-crush07.netlify.app'
              className=' btn btn-primary'
              target='_blank'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
