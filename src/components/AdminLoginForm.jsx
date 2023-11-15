import React from 'react';
import { Link } from 'react-router-dom';
import '../css/adminroomform.css';

const AdminLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica inicio de sesión del administrador
    // usar localStorage?
    console.log('Iniciando sesión...');
  };

  return (
    <div className="loginadmin-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Inicio de sesión del Administrador</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="adminEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="adminPassword" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="adminPassword" required />
                </div>
                <div className="d-grid gap-2 mb-2">
                  <button type="submit" className="btn btn-primary">Administrar Habitaciones</button>
                </div>
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Administrar Usuario</button>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;


