import React from "react";
import logoDevepHotel from "../assets/imgs/logoDevepHotel.png";
import "../css/index.css";
import "../css/paginaInicio.css";
import { NavLink, Link } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";

const NavBar = ({ modoOscuro, cambiarModo }) => {
  return (
    <div className="sticky-top">
      <nav
        className={`navbar navbar-expand-lg ${
          modoOscuro ? "bg-dark navbar-dark" : "bg-body-tertiary"
        }`}
      >

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className={`${
                modoOscuro
                  ? "logo-DevepHotelNavbar_modoOscuro"
                  : "logo-DevepHotelNavbar"
              }`}
              src={logoDevepHotel}
              alt="logo hotel"
            />
          </Link>
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
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/hotel">
                  El hotel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/about">
                  Conócenos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/gallery"
                >
                  Galería
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                >
                  Contacto
                </NavLink>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onChange={cambiarModo}
              />
            </div>

            <div>
              
            </div>

            <button
              className={
                modoOscuro
                  ? "btn btn-secondary m-2 fw-bold"
                  : "btn btn-info m-2 fw-bold"
              }
            >
              Inicio Sesión
            </button>
            {<button
              className={
                modoOscuro
                  ? "btn btn-secondary m-2 fw-bold"
                  : "btn btn-info m-2 fw-bold"
              }
            > 
                  <NavLink className="nav-link " aria-current="page" to="/admin/login">
            Inicio Hotel
          </NavLink>
              
            </button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
