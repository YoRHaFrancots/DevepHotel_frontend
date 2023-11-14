import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardRooms from '../components/CardRooms'
import Carousel from '../components/CarouselRooms'

const GalleryScreen = () => {
  return (
    <div className="container mb-4">
      <h1 className="mt-4">Galería de Imágenes de Habitaciones</h1>
      <Carousel />

      <CardRooms className="mt-4 mb-4"/>
    </div>
  );
};

export default GalleryScreen;
