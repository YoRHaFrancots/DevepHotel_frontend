import React from "react";
import logoDevepHotel from "../assets/imgs/logoDevepHotel.png";
import "../css/index.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="logo-DevepHotelNavbar"
            src={logoDevepHotel}
            alt="logo hotel"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                El hotel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Conócenos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-success">Inicio Sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;
