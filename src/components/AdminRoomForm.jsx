import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useForm } from "react-hook-form";
import { habitacionAdd } from '../api/habitacionesApi'; 

const AdminRoomForm = ({addHabitacion}) => {
  const [roomInfo, setRoomInfo] = useState({
    numroom: 0,
    typeroom: '',
    price: 0,
    description: '',
    available: false,
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
    await addHabitacion(roomInfo);
    setRoomInfo({
      numroom: 0,
      typeroom: '',
      price: 0,
      description: '',
      available: true,
      photo: '',  
    })
   ;
    
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
        <button type="submit" className="btn btn-primary mt-3">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AdminRoomForm;

