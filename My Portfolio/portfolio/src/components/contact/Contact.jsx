import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_tbl47si",
      "template_sforw5k",
      form.current,
      "cUk5MNcQ60587JHZW"
    );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>Kumarashishdec07@gmail.com</h5>
            <a href='mail:Kumarashishdec07@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>instagram</h4>
            <h5>become_webdev</h5>
            <a href='https://www.instagram.com/become_webdev/' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+919599528339</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+919599528339'
              target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTENT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />

          <input type='email' name='email' placeholder='Your Email' required />

          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
