import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EditarModalHabitacion = ({ show, room, onSave, onClose }) => {
  const [roomData, setRoomData] = useState(room);

  useEffect(() => {
    setRoomData(room); // Actualiza los datos del formulario cuando se selecciona una nueva habitación para editar
  }, [room]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  const handleSave = () => {
    onSave(roomData);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Habitación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="numroom" className="form-label">
              Número de habitación:
            </label>
            <input
              type="number"
              className="form-control"
              id="numroom"
              name="numroom"
              value={roomData.numroom || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="typeroom" className="form-label">
              Tipo de habitación:
            </label>
            <input
              type="text"
              className="form-control"
              id="typeroom"
              name="typeroom"
              value={roomData.typeroom || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Precio:
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={roomData.price || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Descripción:
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={roomData.description || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="available" className="form-label">
              Disponibilidad:
            </label>
            <select
              className="form-select"
              id="available"
              name="available"
              value={roomData.available || false}
              onChange={handleChange}
            >
              <option value={true}>Libre</option>
              <option value={false}>Ocupado</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">
              Foto:
            </label>
            <input
              type="text"
              className="form-control"
              id="photo"
              name="photo"
              value={roomData.photo || ''}
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar Cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditarModalHabitacion;
