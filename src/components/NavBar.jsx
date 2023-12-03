import React from "react";
import { useState, useEffect } from "react";
import logoDevepHotelSinFondo from "../assets/imgs/logoDevepHotelSinFondo.png";
import "../css/index.css";
import "../css/paginaInicio.css";
import "../css/paginaElHotel.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({
  modoOscuro,
  cambiarModo,
  usuario,
  logoutUser,
  login,
  setLogin,
  setUsuario,
}) => {
  const [logged, setLogged] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     console.log(login);
  //     console.log(login);
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUsuario(null);
  };

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
                  activeclassname="active fw-bold"
                  aria-current="page"
                  to="/"
                  className="nav-link"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to="/hotel"
                  className="nav-link"
                >
                  El hotel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  aria-current="page"
                  to="/gallery"
                  className="nav-link"
                >
                  Galería
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to="/contact"
                  className="nav-link"
                >
                  Contacto
                </NavLink>
              </li>
              {usuario?.role === "ADMIN_ROLE" && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <i className="fa fa-cog me-1" aria-hidden="true"></i>
                    Admin
                  </a>
                  <ul
                    className={`dropdown-menu navbar-custom ${
                      modoOscuro ? `bg-dark` : `bg-light`
                    }`}
                  >
                    <li
                      className={`dropdown-item hover-custom ${
                        modoOscuro ? `bg-dark` : `bg-light`
                      }`}
                    >
                      <NavLink className="nav-link" to="/admin/usuarios">
                        <i
                          className={`fa fa-user ${
                            modoOscuro ? `text-light` : `text-dark`
                          } me-1`}
                          aria-hidden="true"
                        ></i>
                        Usuarios
                      </NavLink>
                    </li>
                    <li className="dropdown-item hover-custom">
                      <NavLink className="nav-link" to="/admin/habitaciones">
                        <i
                          className={`fa fa-cutlery ${
                            modoOscuro ? `text-light` : `text-dark`
                          }  me-1`}
                          aria-hidden="true"
                        ></i>
                        Habitaciones
                      </NavLink>
                    </li>
                    <li className="dropdown-item hover-custom">
                      <NavLink className="nav-link" to="/admin/reservas">
                        <i
                          className={`fa fa-truck ${
                            modoOscuro ? `text-light` : `text-dark`
                          }  me-1`}
                          aria-hidden="true"
                        ></i>
                        Reservas
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              {usuario?.role === "USER_ROLE" && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <i className="fa fa-cog me-1" aria-hidden="true"></i>
                    Mi panel
                  </a>
                </li>
              )}
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
            {login ? (
              <button
                className={
                  modoOscuro
                    ? "btn btn-secondary m-2 fw-bold"
                    : "btn btn-info m-2 fw-bold"
                }
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            ) : (
              <Link to="/login">
                <button
                  className={
                    modoOscuro
                      ? "btn btn-secondary m-2 fw-bold"
                      : "btn btn-info m-2 fw-bold"
                  }
                >
                  Inicio Sesión
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
