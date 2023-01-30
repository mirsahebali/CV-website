import React from "react";
import "./Contact.css";
import "../style.css";
import { AiFillLinkedin, AiTwotoneMail, AiFillFilePdf } from "react-icons/all";
const ContactMe = () => {
  return (
    <section id="contact">
      <h2 className="text-white contact-header text-center">Contact Me</h2>
    <div className="contact-container">
      <div className="contact-links">
        <a className="email" href="mailto: mirsahebali204@gmail.com">
          <AiTwotoneMail />
          <span> Email: mirsahebali204@gmail.com </span>
        </a>
        <a className="linkedin" href="https://linkedin.com/in/mir-saheb-ali">
          <AiFillLinkedin /> LinkedIn
        </a>
        <a
          className="cv"
          href="https://docs.google.com/document/d/1LemgDfn_d8HcqiDqrbnf3-p9oAiwIUMRf09YajtnJrc/edit?usp=sharing"
        >
          <AiFillFilePdf /> CV
        </a>
      </div>
    </div></section>
  );
};

export default ContactMe;
