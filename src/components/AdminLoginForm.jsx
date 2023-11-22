import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/loginregister.css"

const AdminLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdminLogin = async (data) => {
    // Aquí puedes manejar la lógica de inicio de sesión para el administrador
    console.log(data);
  };

  return (
    <div className="bg-login">
      <div className="container">
        <div className="row vh-100 d-flex align-items-center">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form
                  onSubmit={handleSubmit(handleAdminLogin)}
                  className=" text-dark p-3 rounded w-100"
                >
                  <h1 className="text-center ">Inicio de Sesión para Administradores</h1>
                  <section className="row">
                    <fieldset className="col-12 ">
                      <label htmlFor="Email-input" className="form-label ">
                        Usuario
                      </label>
                      <input
                        type="text"
                        id="Email-input"
                        className="form-control"
                        {...register("username", {
                          required: "El usuario es requerido",
                        })}
                        required
                      />
                      <p className="text-danger">{errors.username?.message}</p>
                    </fieldset>

                    <fieldset className="col-12">
                      <label htmlFor="password-input" className="form-label ">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password-input"
                        className="form-control"
                        {...register("password", {
                          required: "La contraseña es requerida",
                          minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.password?.message}</p>
                    </fieldset>
                  </section>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;




