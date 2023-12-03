import React, { useEffect, useState } from "react";
import { editUsuarioById, getUsuarioById } from "../api/usuariosApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "react-bootstrap/Modal";

const EditarModalUsuario = ({ show, handleClose, uid }) => {
  const MySwal = withReactContent(Swal);

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    findUserData();
  }, []);

  const findUserData = async () => {
    const { user } = await getUsuarioById(uid);
    setUsuario(user);
  };

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editUsuarioById(uid, usuario);
    MySwal.fire("Usuario actualizado correctamente.", "", "success");
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {usuario ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={usuario.nombre}
                name="name"
                onChange={handleChange}
                maxLength={40}
              />
              <label className="fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                value={usuario.email}
                name="email"
                onChange={handleChange}
                maxLength={40}
              />
              <div className="my-2">
                <p>
                  <span className="fw-bold">Rol:</span> {usuario.role}
                </p>
                <label className="fw-bold">Cambiar rol</label>
                <select
                  className="form-select"
                  name="role"
                  onChange={handleChange}
                >
                  <option value="USER_ROLE">Elije un rol</option>

                  <option key="USER_ROLE" value="USER_ROLE">
                    USER_ROLE
                  </option>
                  <option key="ADMIN_ROLE" value="ADMIN_ROLE">
                    ADMIN_ROLE
                  </option>
                </select>
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-warning">Actualizar</button>
              </div>
            </form>
          ) : (
            <>
              <div className="spinner">
                <div className="spinner-border custom-spinner" role="state">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditarModalUsuario;
