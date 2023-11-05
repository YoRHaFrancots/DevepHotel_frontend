import React from "react";
import { useForm, Controller } from "react-hook-form";

const FormularioDisponibilidad = () => {
  const { handleSubmit, control } = useForm();

  const enviarConsulta = (data) => {
    // backend de disponibilidad
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(enviarConsulta)}>
      <div>
        <label className="fw-bold me-2 mb-2">Fecha de Entrada: </label>
        <Controller
          name="checkIn"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="date" {...field} />}
        />
      </div>
      <div>
        <label className="fw-bold me-2 ">Fecha de Salida:</label>
        <Controller
          name="checkOut"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="date" {...field} />}
        />
      </div>
      <div>
        <label className="fw-bold me-4 mt-2">Personas:</label>
        <Controller
          name="numeroDePersonas"
          control={control}
          defaultValue={1}
          render={({ field }) => <input type="number" {...field} />}
        />
      </div>
      <button className="mt-2 " type="submit">
        Consultar Disponibilidad
      </button>
    </form>
  );
};

export default FormularioDisponibilidad;
