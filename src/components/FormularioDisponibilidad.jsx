import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

const FormularioDisponibilidad = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      checkIn: "",
      checkOut: "",
      numeroDePersonas: 1,
    },
  });

  // Obtener la fecha actual
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Calcular el año siguiente
  const nextYear = currentYear + 1;

  // Formato de fecha para el valor del atributo "min" y "max"
  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  };

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
          rules={{ required: "Fecha de entrada es requerida" }}
          render={({ field }) => (
            <div>
              <input
                className="rounded"
                type="date"
                {...field}
                min={formatDate(currentDate)}
                max={formatDate(new Date(nextYear, 11, 31))}
              />
              {errors.checkIn && <p>{errors.checkIn.message}</p>}
            </div>
          )}
        />
      </div>

      <div className="d-flex justify-content-between mt-2">
        <label className="fw-bold">Fecha de Salida:</label>
        <Controller
          name="checkOut"
          control={control}
          rules={{ required: "Fecha de salida es requerida" }}
          render={({ field }) => (
            <div>
              <input
                className="rounded"
                type="date"
                {...field}
                min={formatDate(currentDate)}
                max={formatDate(new Date(nextYear, 11, 31))}
              />
              {errors.checkOut && <p>{errors.checkOut.message}</p>}
            </div>
          )}
        />
      </div>

      <div className="d-flex justify-content-between mt-2">
        <label className="fw-bold">Personas:</label>
        <Controller
          name="numeroDePersonas"
          control={control}
          rules={{
            required: "Número de personas es requerido",
            min: { value: 1, message: "Ingrese al menos 1 persona" },
            max: { value: 10, message: "No más de 10 personas permitidas" },
          }}
          render={({ field }) => (
            <div>
              <input
                className="input_formPersonas rounded"
                type="number"
                {...field}
              />
              {errors.numeroDePersonas && (
                <p>{errors.numeroDePersonas.message}</p>
              )}
            </div>
          )}
        />
      </div>

      <div className="d-flex justify-content-center mt-2">
        <div className="d-flex justify-content-center mt-2">
          <button
            className="mt-2 rounded"
            type="button"
            onClick={() => handleConsultarDisponibilidad()}
          >
            Consultar Disponibilidad
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormularioDisponibilidad;
