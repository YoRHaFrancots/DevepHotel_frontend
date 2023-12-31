import React from "react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import "../css/contact.css";

const ContactScreen = ({ modoOscuro, usuario }) => {
  const [send, setSend] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const contacto = (data) => {
    reset();
    setSend(true);
  };
  return (
    <div className="bg-contact vh-100">
      <div className="container">
        <section className="row">
          <div className="col-12 mt-5  ">
            <div className="card mt-5 ">
              <div className="row ">
                <div
                  className={`${
                    modoOscuro
                      ? "col-md-6 col-lg-6 d-none d-md-block img-contacto bg-dark"
                      : "col-md-6 col-lg-6 d-none d-md-block img-contacto"
                  }`}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.464298535688!2d-65.24650755272408!3d-26.793891297480503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0476d30c83%3A0x8e6a44ca591ac8c0!2zQXZlbmlkYSBBbcOpcmljYSAmIFBlcsO6LCBTYW4gTWlndWVsIGRlIFR1Y3Vtw6FuLCBUdWN1bcOhbg!5e0!3m2!1ses!2sar!4v1686695523241!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className={`${modoOscuro ? "modo-oscuro-iframe" : ""}`}
                  ></iframe>
                </div>
                <div
                  className={`${
                    modoOscuro
                      ? "col-md-6 col-lg-6  bg-dark text-white"
                      : "col-md-6 col-lg-6  img-contacto"
                  }`}
                >
                  <div className="card-body">
                    <h1>Mándanos tu consulta o comentario</h1>
                    <p>Déjanos tus datos y tus sugerencias sobre el hotel</p>
                    <form noValidate onSubmit={handleSubmit(contacto)}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Nombre y apellido
                        </label>
                        <input
                          type="text"
                          className={` ${
                            modoOscuro
                              ? "form-control bg-secondary"
                              : "form-control"
                          }`}
                          {...register("name", {
                            required: "Este campo es requerido",
                            pattern: {
                              value: /^.{6,20}$/i,
                              message:
                                "El nombre debe tener 6 caracteres minimo y 20 como maximo",
                            },
                          })}
                          id="Nombre"
                          placeholder="Nombre"
                          required
                        />
                        <p className="text-danger">{errors.name?.message}</p>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Correo Electronico
                        </label>
                        <input
                          type="email"
                          className={` ${
                            modoOscuro
                              ? "form-control bg-secondary"
                              : "form-control"
                          }`}
                          {...register("email", {
                            required: "Este campo es requerido",
                            pattern: {
                              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                              message: "Ingresa un email valido",
                            },
                          })}
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          required
                        />
                        <p className="text-danger">{errors.email?.message}</p>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="mensaje" className="form-label">
                          Déjanos tus sugerencias
                        </label>
                        <textarea
                          className={` ${
                            modoOscuro
                              ? "form-control bg-secondary"
                              : "form-control"
                          }`}
                          {...register("mensaje", {
                            required: "Este campo es requerido",
                            pattern: {
                              value: /^.{6,200}$/i,
                              message:
                                "El nombre debe tener 6 caracteres minimo y 200como maximo",
                            },
                          })}
                          id="mensaje"
                          rows="5"
                          required
                        ></textarea>
                        <p className="text-danger">{errors.mensaje?.message}</p>
                      </div>
                      <div className="mb-3 d-grid d-md-flex justify-content-md-end">
                        <button className="btn btn-primary">Enviar</button>
                      </div>
                      {send && (
                        <div>
                          <p className="text-primary text-center">Enviado!</p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactScreen;
