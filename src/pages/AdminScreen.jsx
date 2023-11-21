import React, {useEffect, useState} from 'react'
import {Navigate, Link} from "react-router-dom"
//importar funcion de obtener rol
// import { obtenerDatosAuth} from "../api/authApi"
import NavBar from "../components/NavBar";
import "../App.css";
import Footer from "../components/Footer";

import AdminRoomForm from '../components/AdminRoomForm'
import AdminUser from '../components/AdminUser'
import AdminLoginForm from '../components/AdminLoginForm'

const AdminScreen = () => {
  const [role, setRole] = useState(nuell)
  const [mensaje, setMensaje] = useState(null)
  const token = JSON.parse(localStorage.getItem("token")) || null

  useEffect(() => {
    queRolEs()
  }, [])

  const queRolEs = async () => {
    const respuesta = await obtenerDatosAuth(token)

    if (respuesta?.msg){
      setMensaje(respuesta.msg)
    }else{
      setRole(respuesta.role)
    }
  }
  return (
    <>
    {mensaje ?(
      <div className="container">
        <div className="row pt-5">
          <div className="col">
            <h3>{mensaje}</h3>
            <Link className="nav-link" to="/admin/login">
            Inicio Hotel
            </Link>
          </div>
        </div>
      </div>      
    ) : role ?(
      role === "ADMIN_ROLE" ? (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
            <h1>Panel del Administrador</h1>
            </div>
          </div>
          <AdminScreen/>
        </div>
          
      ) : (
        <Navigate to="/" />
      )      
    ) : (
      <div className="container">
      <div className="row pt-5">
        <div className="col">
          <h3>Esperando respuesta...</h3>
        </div>
      </div>
    </div>
    )}
  </>
  )
}

export default AdminScreen