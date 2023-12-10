import React from 'react';

const TablaHabitacion = ({ habitaciones, onEdit, onDelete }) => {
  return (
    
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col" className="text-center">Numero de habitacion</th>
          <th scope="col" className="text-center">Tipo de habitacion</th>
          <th scope="col" className="text-center">Fecha disponible</th>
          <th scope="col" className="text-center">Precio</th>
          <th scope="col" className="text-center">Disponibilidad</th>
          <th scope="col" className="text-center">Foto</th>
          <th scope="col" className="text-center">Editar</th>
          <th scope="col" className="text-center">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {habitaciones.map((habitacion) => (
          <tr key={habitacion._id}>
            <td className="text-center">{habitacion.numroom}</td>
            <td className="text-center">{habitacion.typeroom}</td>
            <td className="text-center">{habitacion.description}</td>
            <td className="text-center">{habitacion.price}</td>
            <td className="text-center">
              {habitacion.available ? "Libre" : "Ocupado"}
            </td>
            <td className="text-center">
              <img
                src={habitacion.photo}
                alt="Habitación"
                style={{ width: "100px" }}
              />
            </td>
            <td>
              <button className="btn btn-warning" onClick={() => onEdit(habitacion)}>Editar</button>
            </td>
            <td>
              <button className='btn btn-danger' onClick={() => onDelete(habitacion._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaHabitacion;
