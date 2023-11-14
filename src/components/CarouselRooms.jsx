import React from 'react';
import imagen1 from '../assets/imgs/habitacion_kingsize.jpeg'
import imagen2 from '../assets/imgs/habitacion_simple.jpeg'
import imagen3 from '../assets/imgs/bungalows_family.jpeg'
import '../css/carousel.css'

const CarouselRooms = () => {

  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={imagen1}
            className="d-block w-100"
            alt="Habitación 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imagen2}
            className="d-block w-100"
            alt="Habitación 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={imagen3}
            className="d-block w-100"
            alt="Habitación 3"
          />
        </div>
      </div>

      
    </div>
  );
};

export default CarouselRooms;
