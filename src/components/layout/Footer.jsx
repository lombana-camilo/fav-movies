import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
const githubLink = "https://github.com/lombana-camilo/weather-app-react";
const linkedInLink = "https://www.linkedin.com/in/camilo-lombana-970812196";
const emailLink = "mailto:lombana.camilo@hotmail.com";

const Footer = () => {
  return (
    <div className="w-screen flex fixed bottom-3 justify-center">
      <div className="flex opacity-80 justify-around bg-gray-600 text-gray-400 w-11/12 p-3 rounded-xl ">
        <p>Camilo Lombana &copy; 2022</p>
        <div className="flex">
          <a href={githubLink} rel="noreferrer" target={"_blank"}>
            <FaGithub size="30px" style={{ margin: "0 0.6rem" }} />
          </a>
          <a href={emailLink}>
            <FaEnvelope size="30px" style={{ margin: "0 0.6rem" }} />
          </a>

          <a href={linkedInLink} target={"_blank"} rel="noreferrer">
            <FaLinkedin size="30px" style={{ margin: "0 0.6rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
