import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/imgs/error404.jpg";

const Error404 = () => {
  return (
    <div>
      <img
        className="paginaError404"
        src={error404}
        alt="Imagen página no encontrada"
      />
      <Link to="/">
        <button type="button" className="btn_error404 btn btn-danger btn-lg">
          <p>ERROR404 💣 Pulsa para rescate</p>
        </button>
      </Link>
    </div>
  );
};

export default Error404;
