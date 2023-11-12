import React from "react";
import { useForm, Controller } from "react-hook-form";
import LoginScreen from "../pages/LoginScreen";

const FormularioDisponibilidad = () => {
  const { handleSubmit, control } = useForm();

  const enviarConsulta = (data) => {
    // backend de disponibilidad
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(enviarConsulta)}>
      <div className="d-flex justify-content-between">
        <label className="fw-bold">Fecha de Entrada: </label>
        <Controller
          name="checkIn"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <input className="rounded" type="date" {...field} />
          )}
        />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <label className="fw-bold">Fecha de Salida:</label>
        <Controller
          name="checkOut"
          control={control}
          defaultValue=""
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <input className="rounded" type="date" {...field} />
          )}
        />
      </div>
      <div className="d-flex justify-content-between mt-2">
        <label className="fw-bold">Personas:</label>
        <Controller
          name="numeroDePersonas"
          control={control}
          defaultValue={1}
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <input
              className="input_formPersonas rounded"
              type="number"
              {...field}
            />
          )}
        />
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="mt-2 rounded" type="submit">
          Consultar Disponibilidad
        </button>
      </div>
    </form>
  );
};

export default FormularioDisponibilidad;
