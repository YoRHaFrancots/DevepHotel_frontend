import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../css/loginregister.css";

const LoginScreen = ({ modoOscuro }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const inicioSesion = async (data) => {
    console.log(data);
  };
  return (
    <div className="bg-login">
      <div className="container">
        <div className="row vh-100 d-flex align-items-center">
          <div className="col-12 col-md-6 offset-md-3">
            <div className={` ${modoOscuro ? "card bg-dark" : "card "}`}>
              <div className="card-body">
                <form
                  onSubmit={handleSubmit(inicioSesion)}
                  className=" text-dark p-3 rounded w-100"
                >
                  <h1
                    className={`text-center ${modoOscuro ? "modoOscuro" : ""}`}
                  >
                    Iniciar sesión
                  </h1>
                  <section className="row">
                    <fieldset className="col-12 ">
                      <label
                        htmlFor="Email-input"
                        className={`form-label ${
                          modoOscuro ? "modoOscuro" : ""
                        }`}
                      >
                        Correo
                      </label>
                      <input
                        type="email"
                        id="Email-input"
                        className="form-control"
                        {...register("email", {
                          required: "Este campo es requerido",
                        })}
                        required
                      />
                      <p className="text-danger">{errors.email?.message}</p>
                    </fieldset>

                    <fieldset className="col-12">
                      <label
                        htmlFor="password-input"
                        className={`form-label ${
                          modoOscuro ? "modoOscuro" : ""
                        }`}
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password-input"
                        className="form-control"
                        {...register("password", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^.{8,16}$/i,
                            message:
                              "La Contraseña debe tener 8 caracteres mínimos",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.password?.message}</p>
                    </fieldset>
                  </section>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Iniciar
                    </button>
                  </div>
                </form>
                <p className={`text-center ${modoOscuro ? "modoOscuro" : ""}`}>
                  ¿No tiene una cuenta?<Link to="/register"> Crear nuevo</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
