import React from "react";
import { useEffect, useState } from "react";
import { habitacionesList } from "../api/habitacionesApi";
import "../css/gallery.css";

const GalleryScreen = ({ usuario, modoOscuro }) => {
  const [habitaciones, setHabitaciones] = useState([]);
  useEffect(() => {
    console.log("fetching data...");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await habitacionesList();
    console.log("Response from habitacionesList:", response);
    setHabitaciones(response.habitaciones);
  };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3 my-4">
        {habitaciones.map((habitacion) => (
          <div key={habitacion._id} className="">
            <div className="card">
              <div className="room-card-img-top">
                <img
                  className="card-img-top fixed-card-img"
                  src={habitacion.photo}
                  alt={habitacion.numroom}
                />
              </div>
              <div className="ribbon-box ribbon-label is-green">
                <div className="ribbon-text"></div>
              </div>
              <div className={`card-body ${modoOscuro ? "bg-dark" : ""}`}>
                <h5 className="card-title">{`Habitacion ${habitacion.numroom} `}</h5>{" "}
                <span className="badge text-bg-success">{`${habitacion.price}$`}</span>
                <h6>Fecha:</h6>
                <p className={`card-text ${modoOscuro ? "text-white" : ""}`}>
                  {habitacion.description}
                </p>
                <h6 className={`${modoOscuro ? "text-white" : ""}`}>Tipo:</h6>
                <p className={`card-text ${modoOscuro ? "text-white" : ""}`}>
                  {habitacion.typeroom}
                </p>
                <button className="btn btn-primary">Reservar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>‎ </div>
      <div>‎ </div>
      <div>‎ </div>
    </div>
  );
};

export default GalleryScreen;
