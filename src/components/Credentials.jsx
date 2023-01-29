import Cylinder from "../Cylinder";
import TitleText from "./TitleText";
function Credentials() {
  return (
    <section id="credentials">
      <div>
        <Cylinder></Cylinder>
        <div className="container-fluid">
          <h2 className="text-teal-400 text-2xl "> Credentials</h2>
          <div className="flex flex-col justify-center skills-education">
            <div className="education">
              <h2 className="text-teal-400 text-3xl">Education</h2>
              <TitleText text="Credentials"/>
            </div>
            <div>
              <h2 className="text-teal-400 text-3xl">Skills</h2>
              <ul className="text-teal-500">
                <li>Full Stack web development</li>
                <li>Web Templating</li>
                <li>Data structures and Algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
