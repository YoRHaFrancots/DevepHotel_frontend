import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { hatiacionAdd } from '../api/habitacionesApi'; 

const AdminRoomForm = () => {
  const [roomInfo, setRoomInfo] = useState({
    numRoom: '',
    typeRoom: '',
    price: '',
    description: '',
    photo: '',

  });

  const handleChange = (event) => {
    setRoomInfo({
      ...roomInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await hatiacionAdd(roomInfo);
    console.log(response);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Agregar Habitación</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(roomInfo).map(([key, value]) => (
          <div className="form-group" key={key}>
            <label>{key}:</label>
            <input
              type="text"
              className="form-control"
              name={key}
              value={roomInfo[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AdminRoomForm;

