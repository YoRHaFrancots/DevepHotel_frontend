import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ modoOscuro }) => {
  return (
    <footer
      className={`footer mt-auto ${modoOscuro ? "bg-dark" : " bg-light "}`}
    >
      <div className="container text-center mb-2">
        <div className="social-icons">
          <a
            href="enlaceFacebook"
            className={`m-3 ${
              modoOscuro ? "logos_redes_modoOscuro" : "logos_redes"
            }`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="enlaceTwiter"
            className={`m-3 ${
              modoOscuro ? "logos_redes_modoOscuro" : "logos_redes"
            }`}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="enlaceInstagram"
            className={`m-3 ${
              modoOscuro ? "logos_redes_modoOscuro" : "logos_redes"
            }`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
