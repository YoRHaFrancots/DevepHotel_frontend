import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AdminRoomForm = () => {


  return (
    <div className="container mt-4">
      <h2 className="mb-4">Agregar/Editar Habitación</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(initialValues).map(([key, value]) => (
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
