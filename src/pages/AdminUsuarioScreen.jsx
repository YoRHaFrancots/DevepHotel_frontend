import React, { useState, useEffect } from "react";
import {
  getUsuarioById,
  editUsuarioById,
  deleteUsuarioById,
  getUsersWithoutStatus,
} from "../api/usuariosApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditarModalusuario from "../components/EditarModalUsuario";
import "@fortawesome/fontawesome-free/css/all.css";

const AdminUsuarioScreen = ({ modoOscuro }) => {
  const [usuarios, setUsuario] = useState([]);
  const [loading, setLoading] = useState(true);

  const MySwal = withReactContent(Swal);

  // Modal management
  const [show, setShow] = useState(false);
  const [uid, setUid] = useState(null);

  const handleClose = () => {
    setUid(null);
    setShow(false);
    fetchData();
  };

  const handleShow = (uid) => {
    setUid(uid);
    setShow(true);
  };

  const changeStatus = async (uid) => {
    try {
      const response = await getUsuarioById(uid);
      const usuario = response.user;
      console.log(usuario);
      if (usuario.role === "ADMIN_ROLE") {
        MySwal.fire("No se puede bloquear a un administrador", "", "info");
        return;
      } else {
        usuario.state = !usuario.state;
        await editUsuarioById(uid, usuario);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Block Order
  const blockUser = async (uid) => {
    const response = await getUsuarioById(uid);
    console.log(response);
    if (response.user.role === "ADMIN_ROLE") {
      MySwal.fire("No se puede bloquear a un administrador", "", "info");
      return;
    } else {
      MySwal.fire({
        title: `¿Está seguro de que quiere inactivar el usuario con ID ${uid}?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sí",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUsuarioById(uid).then((result) => {
            fetchData();
            console.log(result);
            MySwal.fire("", `${result.message}`, "success");
          });
        } else if (result.isDenied) {
          MySwal.fire("El usuario no pudo ser inactivado", "", "info");
        }
      });
    }
  };

  useEffect(() => {
    console.log("fetching data...");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getUsersWithoutStatus();
      console.log("Response from getUsersWithoutStatus:", response);
      setUsuario(response.usuarios);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      {loading == true ? (
        <>
          <div className="spinner">
            <div className=" spinner-border custom-spinner" role="state">
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
      ) : (
        <div className="m-5 table-responsive">
          <table
            className={`table ${
              modoOscuro ? "table-dark" : ""
            } table-hover table-striped table-bordered`}
          >
            <thead className="bg-thead">
              <tr>
                <th scope="col" className="text-center">
                  Id
                </th>
                <th scope="col" className="text-center">
                  Nombre
                </th>
                <th scope="col" className="text-center">
                  Email
                </th>
                <th scope="col" className="text-center">
                  dni
                </th>
                <th scope="col" className="text-center">
                  Role
                </th>
                <th scope="col" className="text-center">
                  Estado
                </th>
                <th scope="col" className="text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.uid}>
                  <td className="text-center">{usuario.uid}</td>
                  <td className="text-center">{usuario.name}</td>
                  <td className="text-center">{usuario.email}</td>
                  <td className="text-center">{usuario.dni}</td>
                  <td className="text-center">{usuario.role}</td>
                  <td className="text-center">
                    <button
                      className={
                        usuario.state ? "btn btn-green" : "btn btn-red"
                      }
                      onClick={() => changeStatus(usuario.uid)}
                    >
                      {usuario.state ? "Activo" : "SUBNORMAL"}
                    </button>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn"
                      onClick={() => blockUser(usuario.uid)}
                    >
                      <i
                        className="fa fa-trash text-danger"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleShow(usuario.uid)}
                    >
                      <i
                        className="fa fa-pencil text-warning"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {show && (
        <EditarModalusuario show={show} handleClose={handleClose} uid={uid} />
      )}
      <br />
    </>
  );
};

export default AdminUsuarioScreen;
