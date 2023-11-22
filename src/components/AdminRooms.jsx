import React, { useState } from 'react';

const AdminRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    number: '',
    type: '',
    price: '',
    photo: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRoom = { ...formData };
    setRooms([...rooms, newRoom]);
    setFormData({ number: '', type: '', price: '', photo: '' }); // Limpiar el formulario después de agregar
  };

  return (
    <div className='bg-admin'>
      <h2>Administración de Habitaciones</h2>
      <form onSubmit={handleSubmit} className='bg-light p-5 rounded'>
        <label>
          Número de Habitación:
          <input type="text" name="number" value={formData.number} onChange={handleChange} required/>
        </label>
        
        <label>
          Tipo de Habitación:
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="">--Seleccione Tipo--</option>
            <option value="SIMPLE">SIMPLE</option>
            <option value="DOBLE">DOBLE</option>
            <option value="BUNGALOWS">BUNGALOWS</option>
          </select>
        </label>

        <label>
          Precio por Noche:
          <input type="number" name="price" value={formData.price} readOnly />
        </label>        
        
        <label>
          Foto:
          <input type="text" name="photo" value={formData.photo} readOnly />
        </label>
        <button type="submit" className='bg-light p-5 rounded'>Agregar Habitación</button>
      </form>

      <table className='table table-striped mt-5'>
        <thead>
          <tr>
            <th>Número</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index}>
              <td>{room.number}</td>
              <td>{room.type}</td>
              <td>{room.price}</td>
              <td>
                <img src={room.photo} alt={`Room ${room.number}`} style={{ width: '50px', height: '50px' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRooms;
