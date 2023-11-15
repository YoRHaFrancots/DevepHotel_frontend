import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/adminroomform.css'; 


const AdminRoomForm = () => {
  const [roomData, setRoomData] = useState({
    numero: '',
    tipo: '',
    precio_por_noche: '',
    disponibilidad: true,
    etiqueta_foto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend o realizar acciones necesarias
    console.log('Datos de la habitación:', roomData);
  };

  return (
    <div className='loginadmin-container'>
      <h2>Agregar/Editar Habitación</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Número de Habitación:
          <input
            type="text"
            name="numero"
            value={roomData.numero}
            onChange={handleChange}
          />
        </label>
        <label>
          Tipo de Habitación:
          <input
            type="text"
            name="tipo"
            value={roomData.tipo}
            onChange={handleChange}
          />
        </label>
        <label>
          Precio por Noche:
          <input
            type="text"
            name="precio_por_noche"
            value={roomData.precio_por_noche}
            onChange={handleChange}
          />
        </label>
        <label>
          Disponibilidad:
          <input
            type="checkbox"
            name="disponibilidad"
            checked={roomData.disponibilidad}
            onChange={() =>
              setRoomData((prevData) => ({
                ...prevData,
                disponibilidad: !prevData.disponibilidad,
              }))
            }
          />
        </label>
        <label>
          Etiqueta de Foto:
          <input
            type="text"
            name="etiqueta_foto"
            value={roomData.etiqueta_foto}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Guardar Habitación</button>
      </form>
    </div>
  );
};

export default AdminRoomForm;

