import React from "react";
import imgHotel from "../assets/imgs/principalHotel.jpg";
import FormularioDisponibilidad from "../components/FormularioDisponibilidad";

const HomeScreen = ({ modoOscuro, usuario }) => {
  return (
    <div>
      <img
        src={imgHotel}
        className={` ${
          modoOscuro ? "imgHomescreen_modoOscuro" : "imgHomescreen"
        }`}
        alt="Imagen principal hotel"
      />
      <div className="textoHomeScreen">
        <p></p>
      </div>
      <div className="overlay_homeScreen">
        <div className="form-container_homeScreen">
          <p className="textoHomeScreen">Un hotel para desarrolladores web</p>
          <FormularioDisponibilidad />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
