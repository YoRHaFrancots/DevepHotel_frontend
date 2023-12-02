import React from "react";
import { useState, useEffect } from "react";
import { habitacionesList, hatiacionAdd , habitacionDelete} from "../api/habitacionesApi";
import AdminRoomForm from "../components/AdminRoomForm";

const AdminHabitacionesScreen = () => {

  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await habitacionesList();
    console.log("Response from getUsersWithoutStatus:", response);
    setHabitaciones(response.habitaciones);
    setLoading(false);
  };

  const addHabitacion = async (roomInfo) => {
    const response = await hatiacionAdd(roomInfo);
    setHabitaciones([...habitaciones, response]);
    fetchData(); 
  };

  const handleDelete = async (id) => {
    // Aquí llamarías a la función del API para eliminar la habitación
    // Luego actualizarías el estado para reflejar la habitación eliminada
    // Por ejemplo:
    await habitacionDelete(id);
    setHabitaciones(habitaciones.filter(habitacion => habitacion._id !== id));
  };

  useEffect(() => {
    console.log("fetching data...");
    fetchData();
  }, []);

    return (
    <>
      <br />
      <br />
      <br />

      <AdminRoomForm addHabitacion={addHabitacion}/>


      {loading == true ? (
        <>
          <div className="spinner-border custom-spinner" role="state">
            <span className="visually-hidden">Loading...</span>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      ) : (
        <div className="m-5 table responsive container">
          <table className="table table-hover table-striped table-bordered">
            <thead className="bg-thead">
              <tr>
                {/* <th scope="col" className="text-center">id</th> */}
                <th scope="col" className="text-center">Numero de habitacion</th>
                <th scope="col" className="text-center">Tipo de habitacion</th>
                <th scope="col" className="text-center">Fecha disponible</th>
                <th scope="col" className="text-center">Precio</th>
                <th scope="col" className="text-center">Foto</th>
                
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((habitacion)=>(
                <tr key={habitacion._id}>
                  {/* <td className="text-center">{habitacion._id}</td> */}
                  <td className="text-center">{habitacion.numroom}</td>
                  <td className="text-center">{habitacion.typeroom}</td>
                  <td className="text-center">{habitacion.description}</td>
                  <td className="text-center">{habitacion.price}</td>
                  <td className="text-center">
                        <img src={habitacion.photo} alt="Habitación" style={{width: "100px"}}/>
                  </td>
                  <td className="text-center">
                    <button style={{backgroundColor: 'orange'}} onClick={() => handleEdit(habitacion)}>Editar</button>
                  </td>
                  <td className="text-center">
                    <button style={{backgroundColor: 'red'}} onClick={() => handleDelete(habitacion._id)}>X</button>
                  </td>                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminHabitacionesScreen;
