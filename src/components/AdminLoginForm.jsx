import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { loginAdmin } from '../api/adminApi'; cuando ya disponga de API
import '../css/adminroomform.css';

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState('');

  const handleLogin = async (data) => {
    try {
      await loginAdmin(data); // Llama a la función para iniciar sesión del administrador pasando los datos
      console.log('Iniciando sesión...');
      // Aquí podrías redirigir a la página de administración de habitaciones
    } catch (error) {
      setLoginError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className="loginadmin-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Inicio de sesión del Administrador</h3>
              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mb-3">
                  <label htmlFor="adminEmail" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="adminEmail"
                    {...register('email', {
                      required: 'Este campo es requerido',
                    })}
                    required
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="adminPassword" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="adminPassword"
                    {...register('password', {
                      required: 'Este campo es requerido',
                    })}
                    required
                  />
                  <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="d-grid gap-2 mb-2">
                  <button type="submit" className="btn btn-primary">
                    Iniciar sesión
                  </button>
                </div>
                {loginError && <p className="text-danger">{loginError}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;



