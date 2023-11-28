import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";


const ContactScreen = ({ usuario }) => {
  const [send, setSend] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const contacto =  (data) => {
    
  
    reset();
    setSend(true);
  }
  return (
    <div className="container">
 <section className="row mt-5">
      <div className="col-12 mt-5 ">
        <div className="card mt-3 ">
          <div className="row g-0">
            <div className="col-md-6 col-lg-6 d-none d-md-block img-contacto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.464298535688!2d-65.24650755272408!3d-26.793891297480503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0476d30c83%3A0x8e6a44ca591ac8c0!2zQXZlbmlkYSBBbcOpcmljYSAmIFBlcsO6LCBTYW4gTWlndWVsIGRlIFR1Y3Vtw6FuLCBUdWN1bcOhbg!5e0!3m2!1ses!2sar!4v1686695523241!5m2!1ses!2sar"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-md-12 col-lg-6  mb-5">
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
                      className="form-control"
                      id="Nombre"
                      placeholder="Nombre"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Correo Electronico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      Déjanos tus sugerencias
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3 d-grid d-md-flex justify-content-md-end">
                    <button className="btn btn-primary">Enviar</button>
                  </div>
                  {send && (<div><p className="text-primary text-center">Enviado!</p></div>)}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default ContactScreen;
