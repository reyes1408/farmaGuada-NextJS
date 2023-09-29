import React from 'react'
import Image from 'next/image'
import style from '../styles/boletin.css'

const Boletin = ({ ruta }) => {
    return (
        <div className="card" >
            <Image src={ruta}  className="imagen"/>
        </div>
    )
}

export default Boletin