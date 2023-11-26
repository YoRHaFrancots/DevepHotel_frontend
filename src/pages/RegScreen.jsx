import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usuarioAdd } from "../api/usuariosApi";

const RegScreen = () => {
  const [reg, setReg] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const registrarse = async (data) => {
    console.log(data);
    await usuarioAdd(data);
    reset();
    setReg(true);
  };
  return (
    <div className="bg-register">
      <div className="container">
        <div className="row vh-100 d-flex align-items-center ">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form noValidate onSubmit={handleSubmit(registrarse)}>
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
                        {...register("name", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^.{6,20}$/i,
                            message:
                              "El nombre debe tener 6 caracteres de minimo",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.name?.message}</p>
                    </fieldset>
                    <fieldset className="col-12">
                      <label htmlFor="password-input" className="form-label ">
                        dni
                      </label>
                      <input
                        type="number"
                        id="number-input"
                        className="form-control"
                        {...register("dni", {
                          required: "Este campo es requerido",
                          pattern: {
                            value: /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/,
                            message: "Ingresa un dni valido",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.dni?.message}</p>
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
                          pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Ingresa un email valido",
                          },
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
                              "La Contraseña debe tener 8 caracteres mínimos y 16 maximos",
                          },
                        })}
                        required
                      />
                      <p className="text-danger">{errors.password?.message}</p>
                    </fieldset>
                  </section>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Registrarse
                    </button>
                  </div>
                  {reg && <p className="text-primary">Registrado!</p>}
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
