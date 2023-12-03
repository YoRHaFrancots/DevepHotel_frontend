import React from "react";
import { useState, useEffect } from "react";
import { habitacionesList } from "../api/habitacionesApi";

const AdminHabitacionesScreen = () => {
  useEffect(() => {
    console.log("fetching data...");
    fetchData();
  }, []);
  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const response = await habitacionesList();
    console.log("Response from getUsersWithoutStatus:", response);
    setHabitaciones(response.habitaciones);
    setLoading(false);
  };
  return (
    <>
      <br />
      <br />
      <br />
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
                <th scope="col" className="text-center">id</th>
                <th scope="col" className="text-center">Numero de habitacion</th>
                <th scope="col" className="text-center">Tipo de habitacion</th>
                <th scope="col" className="text-center">Precio</th>
                
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((habitacion)=>(
                <tr key={habitacion._id}>
 <td className="text-center">{habitacion._id}</td>
 <td className="text-center">{habitacion.numroom}</td>
 <td className="text-center">{habitacion.typeroom}</td>
 <td className="text-center">{habitacion.price}</td>
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
