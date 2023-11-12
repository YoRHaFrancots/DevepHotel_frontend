import React from 'react'

const CardRooms = ({room}) => {
    const {tipo, etiqueta_foto}= room

    
    
  return (
    <div className='card'> 
        <h3>{tipo}</h3>
        <div>
        <img src={etiqueta_foto} alt= {tipo} />
        </div>
    </div>
  )
}

export default CardRooms