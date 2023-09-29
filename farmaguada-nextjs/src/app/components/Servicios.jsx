import React from 'react'
import Image from 'next/image'
import servicios from '../img/servicios.png'

export const Servicios = () => {
  return (
    <div className='servicio-img'>
        <Image style={{width: "100%", height: "fit-content"}} src={servicios} />
    </div>
  )
}

export default Servicios;
