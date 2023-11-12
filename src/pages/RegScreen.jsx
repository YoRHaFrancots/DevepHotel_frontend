import React from "react";
import { useForm } from "react-hook-form";

const RegScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const registrarse = async (data) => {
    console.log(data);
  };
  return (
    <div className="bg-register">
      <div className="container">
        <div className="row vh-100 d-flex align-items-center ">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(registrarse)}>
                  <h1>Registrarse</h1>
                  <section className="row">
                  <fieldset className="col-12 ">
                      <label htmlFor="Name-input" className="form-label ">
                        Nombre y apellido
                      </label>
                      <input
                        type="text"
                        id="Name-input"
                        className="form-control"
                        {...register("nombre", {
                          required: "Este campo es requerido",
                          min:6
                        })}
                        required
                      />
                      <p className="text-danger">{errors.nombre?.message}</p>
                    </fieldset>
                  <fieldset className="col-12 ">
                      <label htmlFor="Email-input" className="form-label ">
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
                      <label htmlFor="password-input" className="form-label ">
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
                    <fieldset className="col-12">
                      <label htmlFor="password-input" className="form-label ">
                        DNI
                      </label>
                      <input
                        type="number"
                        id="number-input"
                        className="form-control"
                        {...register("dni", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^.{8,8}$/i,
                            message:
                              "El dni debe tener 8 caracteres",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.dni?.message}</p>
                    </fieldset>
                  </section>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Registrarse
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

export default RegScreen;
