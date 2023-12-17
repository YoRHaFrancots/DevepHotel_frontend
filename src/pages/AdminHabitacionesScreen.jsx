import React, { useState, useEffect } from 'react';
import { habitacionesList, habitacionDelete, habitacionAdd } from '../api/habitacionesApi';
import TablaHabitacion from '../components/TablaHabitacion';
import EditarModalHabitacion from '../components/EditarModalHabitacion';
import AdminRoomForm from '../components/AdminRoomForm';

import backgroundImage from '../assets/imgs/principalHotel.jpg';
import '../css/admin.css'

const AdminHabitacionesScreen = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editableRoom, setEditableRoom] = useState({});
  const [showModal, setShowModal] = useState(false); // Agregar estado para el modal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await habitacionesList();
        setHabitaciones(response.habitaciones);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (habitacion) => {
    setEditableRoom(habitacion);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdateHabitacion = (updatedRoom) => {
    const updatedHabitaciones = habitaciones.map((habitacion) =>
      habitacion._id === updatedRoom._id ? updatedRoom : habitacion
    );
    setHabitaciones(updatedHabitaciones);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    try {
      const response = await habitacionDelete(id);
      if (response.ok) {
        const updatedHabitaciones = habitaciones.filter((habitacion) => habitacion._id !== id);
        setHabitaciones(updatedHabitaciones);
      } else {
        console.error('Error al eliminar la habitación:', response.error);
      }
    } catch (error) {
      console.error('Error al eliminar la habitación:', error);
    }
  };

  const addHabitacion = async (roomInfo) => {
    try {
      const response = await habitacionAdd(roomInfo);
      if (response.ok) {
        const updatedResponse = await habitacionesList();
        setHabitaciones(updatedResponse.habitaciones);
      } else {
        console.error('Error al agregar la habitación:', response.error);
      }
    } catch (error) {
      console.error('Error al agregar la habitación:', error);
    }
  };
  
  return (
    <div className='admin-habitaciones-container'>
      <AdminRoomForm addHabitacion={addHabitacion} />
      
      {loading ? (
        <div>Cargando habitaciones...</div>
      ) : (
        <TablaHabitacion
          habitaciones={habitaciones}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {/* Mostrar modal si showModal es true */}
      <EditarModalHabitacion
        show={showModal}
        room={editableRoom}
        onSave={handleUpdateHabitacion}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AdminHabitacionesScreen;
