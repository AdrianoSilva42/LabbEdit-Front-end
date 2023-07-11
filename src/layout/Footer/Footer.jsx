import React from "react";
import "./footer.sass";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="links-media">
          {/* <li>
            <a
              href="url do github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </li> */}
          {/* <li>
            <a
              href="url do Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li> */}
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
