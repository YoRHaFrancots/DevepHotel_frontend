import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-light ">
      <div className="container text-center mb-2">
        <div className="social-icons">
          <a href="enlaceFacebook" className="logos_redes">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="enlaceTwiter" className="logos_redes ms-4">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="enlaceInstagram" className="logos_redes ms-4">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;
