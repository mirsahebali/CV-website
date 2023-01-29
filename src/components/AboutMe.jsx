import {
          SiMysql,
          SiNodedotjs,
          SiExpress,
          SiMongodb,
          SiSupabase,
          SiFirebase,
          SiNextdotjs,
          SiJavascript,
          TbBrandTailwind,
          TbBrandBootstrap,
          FaReact,
        } from "react-icons/all";

import Coding from "../Coding";
import cube from "../assets/Background/cube.png"
function AboutMe() {
          return (        <section id="about-me">
            <img className="cube" src={cube}/>
          <div className="container-fluid main-div">
            <h2 className="text-teal-400 text-4xl effect-h1">About Me</h2>
            <hr />
            <p className="effect-text">
              I am student Currently majoring in computer science and physics and
              mathematics are as minor subjects.
            </p>
            <div className="skills">
              <div className="frontend">
                <p className="pb-5">Frontend tools I use:</p>
                <ul className="text-3xl">
                  <li className="next">
                    <SiNextdotjs className="brand" /> Next.js
                  </li>
                  <li className="react text-blue-500">
                    <FaReact /> React.js
                  </li>
                
                  <li className="tailwind text-sky-300">
                    <TbBrandTailwind /> TailwindCSS
                  </li>
               
                </ul>
              </div>
              <div className="backend flex-row justify-center">
                {" "}
                <p className="pb-5">Backend Managemet using:</p>
                <ul className="text-3xl">
                  <li className="node text-green-700">
                    {" "}
                    <SiNodedotjs /> Node.js
                  </li>
                
                  <li className="mongo text-green-600">
                    {" "}
                    <SiMongodb /> MongoDB
                  </li>
                  <li className="supabase text-green-500">
                    {" "}
                    <SiSupabase /> Supabase
                  </li>
                  <li className="firebase text-yellow-300">
                    <SiFirebase /> Firebase
                  </li>
                  <li className="mysql">
                    <SiMysql className="text-blue-500" />{" "}
                    <span className="text-blue-500">My</span>
                    <span className="text-yellow-500">SQL</span>{" "}
                  </li>
                  <li className="text-xs">and learning many more.....</li>
                </ul>
              </div>
              <div>
              </div>
            </div>
  <Coding></Coding>
          </div>
        </section>);
}

export default AboutMe;