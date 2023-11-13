import React from 'react'
import imagen1 from '../assets/imgs/bungalow_family.jpeg'
import imagen2 from '../assets/imgs/habitacion_kingsize.jpeg'
import imagen3 from '../assets/imgs/habitacion_simple.jpeg'

import '../css/carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100" alt="bumgalow familiar"/>
    </div>
    <div className="carousel-item">
      <img src={imagen2} className="d-block w-100" alt="habitacion king size"/>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block w-100" alt="habitacion single"/>
    </div>
    <div className='overlay'>
        <div className='h-100 d-flex flex-column align-items-center justify-content-center text-white p-3'></div>
        <div>
            <h3 className='text-center'>Conoce nuestros espacios exclusivos</h3>
            <button className='btn btn-outline-light btn-lg'>Conoce más</button>
        </div>
    </div>
  </div>
  <button 
  className="carousel-control-prev" 
  type="button" 
  data-bs-target="#carouselExampleAutoplaying" 
  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel