import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { habitacionAdd } from "../api/habitacionesApi"; 
import "bootstrap/dist/css/bootstrap.min.css";

const AdminRoomForm = ({ addHabitacion }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [roomInfo, setRoomInfo] = useState({
    numroom: '',
    typeroom: '',
    price: '',
    description: '',
    available: true,
    photo: '',
    availableDate: '',
  });

  const onSubmit = async (data) => {
    // Llamar a la función addHabitacion pasada como prop para agregar la habitación
    await addHabitacion(data);
    // Resetear el formulario aquí si es necesario
  };
       
  return (
    <div className="admin-form-container">
      <h2 className="mb-4 text-white" >Agregar Habitación</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="text-white">Número de habitación:</label>
          <input placeholder="Numero de Habitación"
            type="text"
            {...register("numroom", {
              required: "Este campo es requerido",
              pattern: {
                value: /^\d+$/,
                message: "Ingrese un número válido",
              },
            })}
            className={`form-control ${errors.numroom ? "is-invalid" : ""}`}
          />
          {errors.numroom && (
            <span className="invalid-feedback">{errors.numroom.message}</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-white">Tipo de habitación:</label>
<select
            {...register('typeroom', {
              required: 'Seleccione un tipo de habitación',
            })}
            className={`form-control ${errors.typeroom ? 'is-invalid' : ''}`}
          >
            <option value="">Tipo de Habitación</option>
            <option value="SIMPLE">Simple</option>
            <option value="DOBLE">Doble</option>
            <option value="BUNGALOW FAMILIAR">Bungalow Familiar</option>
          </select>
          {errors.typeroom && (
            <span className="invalid-feedback">{errors.typeroom.message}</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-white">Precio:</label>
          <input placeholder="Precio por noche"
            type="text"
            {...register("price", {
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]+(\.[0-9]{1,2})?$/,
                message: "Ingrese un precio válido",
              },
            })}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
          />
          {errors.price && (
            <span className="invalid-feedback">{errors.price.message}</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-white">Fecha:</label>
          <input
            type="date"
            {...register("availableDate", {
              required: "Este campo es requerido",
            })}
            className={`form-control ${
              errors.availableDate ? "is-invalid" : ""
            }`}
          />
          {errors.availableDate && (
            <span className="invalid-feedback">
              {errors.availableDate.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label className="text-white">Disponible:</label>
          <select
            {...register("available", {
              required: "Este campo es requerido",
            })}
            className={`form-control ${errors.available ? "is-invalid" : ""}`}
          >
            <option value="">Disponibilidad</option>
            <option value="true">Libre</option>
            <option value="false">Ocupada</option>
          </select>
          {errors.available && (
            <span className="invalid-feedback">{errors.available.message}</span>
          )}
        </div>

        <div className="form-group">
          <label className="text-white">Foto:</label>
          <input
            type="file"
            {...register("photo", {
              required: "Este campo es requerido",
            })}
            className={`form-control ${errors.photo ? "is-invalid" : ""}`}
          />
          {errors.photo && (
            <span className="invalid-feedback">{errors.photo.message}</span>
          )}
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AdminRoomForm;
