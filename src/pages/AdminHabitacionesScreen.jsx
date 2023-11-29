import React from "react";
import { useState, useEffect } from "react";
import {habitacionesList} from "../api/habitacionesApi"

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
      ) : (<div className="">test</div>)}
    </>
  );
};

export default AdminHabitacionesScreen;
