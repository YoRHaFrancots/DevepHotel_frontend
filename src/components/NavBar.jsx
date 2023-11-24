import React from "react";
import {useState, useEffect} from "react"
import logoDevepHotelSinFondo from "../assets/imgs/logoDevepHotelSinFondo.png";
import "../css/index.css";
import "../css/paginaInicio.css";
import "../css/paginaElHotel.css";
import { NavLink, Link } from "react-router-dom";






const NavBar = ({ modoOscuro, cambiarModo }) => {


 
  const token = JSON.parse(localStorage.getItem("token")) || null
 

  
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
              src={logoDevepHotelSinFondo}
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
                <NavLink
                  activeClassName="active fw-bold"
                  aria-current="page"
                  to="/"
                  exact={true}
                  className="nav-link"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/hotel"
                  exact={true}
                  className="nav-link"
                >
                  El hotel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  aria-current="page"
                  to="/gallery"
                  exact={true}
                  className="nav-link"
                >
                  Galería
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/contact"
                  exact={true}
                  className="nav-link"
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
            {
              token ? (<button className={
                
                modoOscuro
                  ? "btn btn-secondary m-2 fw-bold"
                  : "btn btn-info m-2 fw-bold"
              } >Cerrar Sesión</button> ) :(<Link to="/login">
              <button
              
                className={
                  modoOscuro
                    ? "btn btn-secondary m-2 fw-bold"
                    : "btn btn-info m-2 fw-bold"
                }
              >
                Inicio Sesión
              </button>
            </Link>)
            }
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
