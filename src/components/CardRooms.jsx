import React from 'react';
import jsonData from '../data/Rooms.json'; 
import '../css/cardrooms.css'

const CardRooms = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {jsonData.map((room) => (
        <div key={room.id} className="col mb-4">
          <div className="card h-100 border rounded">
            <img src={room.etiqueta_foto} className="card-img-top round-top img-fluid" alt="Habitación" />
            <div className="card-body">
              <h5 className="card-title">{room.tipo}</h5>
              <p className="card-text">{room.descripcion}</p>
              <p className="card-text">Precio por noche: {room.precio_por_noche} €</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardRooms;
