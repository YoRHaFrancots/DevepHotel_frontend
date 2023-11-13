import React from 'react';
import image1 from '../assets/imgs/bungalows_family.jpeg'

const CardRooms = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {/* Aquí deberías mapear sobre tus datos y renderizar las tarjetas */}
      {/* Ejemplo de una tarjeta */}
      <div className="col">
        <div className="card h-100">
          <img
            src={image1}
            className="card-img-top"
            alt="Habitación"
          />
          <div className="card-body">
            <h5 className="card-title">Nombre de la Habitación</h5>
            <p className="card-text">Descripción de la habitación.</p>
          </div>
        </div>
      </div>
      {/* Fin del mapeo */}
    </div>
  );
};

export default CardRooms;
