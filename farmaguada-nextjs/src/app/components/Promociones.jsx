"use client"; // for nextjs 13.4 user

import React, { useRef } from 'react';
import style from '../styles/promociones.css';

const Promociones = () => {
    // Referencia al carrusel
    const slideRef = useRef(null);

    // Índice actual del slide
    let currentIndex = 0;

    // Tiempo entre cambios de slide en milisegundos (ejemplo: 3 segundos)
    const intervalTime = 3000;

    // Array de imágenes
    const images = [
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_inferior/hero_inf_1/9_septiembre/semana_4/HB_Hero_Inf_1_DR_23.jpg",
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_inferior/hero_inf_2/9_septiembre/semana_4/HB_Hero_Inf_2_DR_23.jpg",
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_inferior/hero_inf_3/9_septiembre/semana_4/HB_Hero_Inf_3_DR_23.jpg"
    ];

    style.transform
    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Iniciar el carrusel automático
    setInterval(nextSlide, intervalTime);

    return (
        <div style={{ display: "flex"}}>
            <div className="carousel">
                <div className="slide" ref={slideRef}>
                    {images.map((src, index) => (
                        <img src={src} alt={`Image ${index + 1}`} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Promociones;

