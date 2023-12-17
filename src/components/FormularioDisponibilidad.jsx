import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormularioDisponibilidad = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

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

  const currentDate = new Date();
  const nextYear = currentDate.getFullYear() + 1;

  const formatDate = (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    return `${year}-${month}-${day}`;
  };

  const mostrarAlerta = (mensaje) => {
    setErrorMessage(mensaje);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000); // Hide the alert after 5 seconds
  };

  const enviarConsulta = (data) => {
    if (!data.checkIn || !data.checkOut || !data.numeroDePersonas) {
      mostrarAlerta("Todos los campos son obligatorios");
      return;
    }

    // Call backend API for availability

    navigate("/contact");
  };

  return (
    <div className="container mt-5">
      <div className="card form-container">
        <div className="card-body">
          <h3 className="text-center mb-4">Consultar disponibilidad</h3>
          <form onSubmit={handleSubmit(enviarConsulta)}>
            <div className="mb-3">
              <label className="form-label fw-bold">Fecha de Entrada:</label>
              <Controller
                name="checkIn"
                control={control}
                rules={{ required: "Fecha de entrada es requerida" }}
                render={({ field }) => (
                  <div>
                    <input
                      className="form-control rounded"
                      type="date"
                      {...field}
                      min={formatDate(currentDate)}
                      max={formatDate(new Date(nextYear, 11, 31))}
                    />
                    {errors.checkIn && (
                      <p className="text-danger">{errors.checkIn.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Fecha de Salida:</label>
              <Controller
                name="checkOut"
                control={control}
                rules={{ required: "Fecha de salida es requerida" }}
                render={({ field }) => (
                  <div>
                    <input
                      className="form-control rounded"
                      type="date"
                      {...field}
                      min={formatDate(currentDate)}
                      max={formatDate(new Date(nextYear, 11, 31))}
                    />
                    {errors.checkOut && (
                      <p className="text-danger">{errors.checkOut.message}</p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Personas:</label>
              <Controller
                name="numeroDePersonas"
                control={control}
                rules={{
                  required: "Número de personas es requerido",
                  min: { value: 1, message: "Ingrese al menos 1 persona" },
                  max: {
                    value: 10,
                    message: "No más de 10 personas permitidas",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <input
                      className="form-control rounded input_formPersonas"
                      type="number"
                      {...field}
                    />
                    {errors.numeroDePersonas && (
                      <p className="text-danger">
                        {errors.numeroDePersonas.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="text-center">
              <button className="btn btn-primary rounded mt-2" type="submit">
                Consultar
              </button>
            </div>
          </form>
          {errorMessage && (
            <div
              className="position-fixed top-0 end-0 p-3"
              style={{ zIndex: 5 }}
            >
              <div
                className="toast align-items-center text-white bg-danger"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="d-flex">
                  <div className="toast-body">{errorMessage}</div>
                  <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={() => setErrorMessage(null)}
                  ></button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioDisponibilidad;
