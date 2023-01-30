import { useState } from "react";
import Cone from "../Cone";
import { AiFillLinkedin, CgArrowRightO } from "react-icons/all";
import TitleText from "./TitleText";
function Title() {
  console.log(TitleText);
  return (
    <>
      {" "}
      <section id="title">
        <div className="vector-cone ">
          <Cone />
        </div>
        <div className="headings">
          <TitleText className="title" text="Mir Saheb Ali"/>
        
          <h2 className="me hover-effect">Web Developer. Learner. Designer.</h2>
        </div>
        <div className="btn-me text-white ">
          <a href="https://www.linkedin.com/in/mir-saheb-ali/">
          <button className="button-89" role="button">
            <span className="text">
              <AiFillLinkedin /> Work with me <CgArrowRightO />
            </span>{" "}
          </button></a>
        </div>
      </section>{" "}
    </>
  );
}

export default Title;
