import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Gather and evaluate user requirements in collaboration with
                product managers and engineers..
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Design graphic user interface elements, like menus, tabs and
                widgets.
              </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Build page navigation buttons and search fields.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Conduct layout adjustments based on user feedback.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Adhere to style standards on fonts, colors and images.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full-stack development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Static web service</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Dynamic web service</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Search Engine Optimization (SEO)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Social Media Management and keyword research</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Awesome UI interface</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive design with attractive material ui icons</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Land page website</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Customized Website</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Corporate Website</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Attractive Thumbnail</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Gaming Logo And Banner</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>social media management</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>video editing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>intro and outro interface</p>
            </li>
          </ul>
        </article>
        {/* END CONTENT CREATION */}
      </div>
    </section>
  );
};
export default Services;
