import React, { useState, useEffect } from 'react';
import { productsList, productAdd, productUpdate, productDelete } from '../api/productsApi';

// Importa la imagen de fondo
const backgroundImage = 'https://th.bing.com/th/id/OIG.jeqeoJg_ru_2uySvIp5O?pid=ImgGn';

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    number: '',
    type: '',
    price: '',
    photo: '',
    description: '', // Nuevo campo de descripción
  });

  const roomPrices = {
    SIMPLE: 50,
    DOBLE: 100,
    BUNGALOWS: 150
  };

  const roomPhotos = {
    SIMPLE:"https://images.pexels.com/photos/5816562/pexels-photo-5816562.jpeg?auto=compress&cs=tinysrgb&w=400",
    DOBLE:"https://images.pexels.com/photos/7163651/pexels-photo-7163651.jpeg?auto=compress&cs=tinysrgb&w=400",
    BUNGALOWS:"https://images.pexels.com/photos/7163654/pexels-photo-7163654.jpeg?auto=compress&cs=tinysrgb&w=400",
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'type') {
      setFormData(prevState => ({
        ...prevState,
        price: roomPrices[value],
        photo: roomPhotos[value]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRoom = { ...formData };
    try {
      const response = await fetch('/api/habitaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRoom),
      });

      if (response.ok) {
        const room = await response.json();
        setRooms([...rooms, room]);
        setFormData({ number: '', type: '', price: '', photo: '', description: '' }); // Limpiar el formulario después de agregar
      } else {
        console.error('Error al agregar la habitación:', response);
      }
    } catch (error) {
      console.error('Error al agregar la habitación:', error);
    }
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/habitaciones');
        const data = await response.json();

        if (response.ok) {
          setRooms(data);
        } else {
          console.error('Error al obtener las habitaciones:', data);
        }
      } catch (error) {
        console.error('Error al obtener las habitaciones:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className='bg-admin' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
      <h2 className="text-center mb-4">Administración de Habitaciones</h2>
      <div className="container">
        <form onSubmit={handleSubmit} className='bg-light p-5 rounded'>
          <div className="mb-3">
            <label className="form-label">Número de Habitación:</label>
            <input type="text" name="number" value={formData.number} onChange={handleChange} required className="form-control"/>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Tipo de Habitación:</label>
            <select name="type" value={formData.type} onChange={handleChange} required className="form-select">
              <option value="">--Seleccione Tipo--</option>
              <option value="SIMPLE">SIMPLE</option>
              <option value="DOBLE">DOBLE</option>
              <option value="BUNGALOWS">BUNGALOWS</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required className="form-control"></textarea>
          </div>
  
          <div className="mb-3">
            <label className="form-label">Precio por Noche:</label>
            <input type="number" name="price" value={formData.price} readOnly className="form-control"/>
          </div>        
          
          <div className="mb-3">
            <label className="form-label">Foto:</label>
            <input type="text" name="photo" value={formData.photo} readOnly className="form-control"/>
          </div>
          <button type="submit" className='btn btn-primary'>Agregar Habitación</button>
        </form>
      </div>
      {

      <table className='table table-striped mt-5'>
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.number}</td>
              <td>{room.type}</td>
              <td>{room.description}</td>
              <td>{room.price}</td>
              <td>
                <img src={room.photo} alt={`Room ${room.number}`} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    }
    </div>
  );
};

export default AdminRooms;
