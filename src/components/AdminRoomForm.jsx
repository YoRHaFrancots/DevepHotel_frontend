// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useForm } from "react-hook-form";
// import { habitacionAdd } from "../api/habitacionesApi";

// const AdminRoomForm = ({ addHabitacion }) => {
//   const [roomInfo, setRoomInfo] = useState({
//     numroom: 0,
//     typeroom: "",
//     price: 0,
//     description: "",
//     available: true,
//     photo: "",
//   });

//   const handleChange = (event) => {
//     setRoomInfo({
//       ...roomInfo,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await habitacionAdd(roomInfo);
//     setRoomInfo({
//       numroom: 0,
//       typeroom: "",
//       price: 0,
//       description: "",
//       available: true,
//       photo: "",
//     });
//   };

//   return (
//     <div className="container-fluid bg-image">
//       <div className="row d-flex justify-content-center align-items-center vh-100">
//         <div className="col-lg-6 col-md-8">
//           <div className="card p-4">
//             <h2 className="mb-4">Agregar Habitación</h2>
//             <form onSubmit={handleSubmit}>
//               {Object.entries(roomInfo).map(([key, value]) => (
//                 <div className="form-group" key={key}>
//                   <label>{key}:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name={key}
//                     value={roomInfo[key]}
//                     onChange={handleChange}
//                   />
//                 </div>
//               ))}
//               <button type="submit" className="btn btn-primary mt-3">
//                 Guardar
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminRoomForm;

import React from "react";
import { useForm } from "react-hook-form";

const AdminRoomForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí puedes manejar los datos del formulario
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
