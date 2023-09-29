"use client"; // for nextjs 13.4 user
// import Link from "next/link";
// import React from "react";
// // import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
// import "../styles/slide.css";

// const TrendingSlider = () => {

//     const imagenes = [
//         {
//           id: 1,
//           img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_1/9_septiembre/semana_4/HB_Hero_Sup_1_DR_23.jpg",
//         },
//         {
//           id: 2,
//           img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_2/9_septiembre/semana_4/HB_Hero_Sup_2_DR_23.jpg",
//         },
//         {
//           id: 3,
//           img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_3/9_septiembre/semana_4/HB_Hero_Sup_3_DR_23.jpg",
//         },
//         {
//           id: 4,
//           img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_4/9_septiembre/semana_4/HB_Hero_Sup_4_DR_23.jpg",
//         }
//       ];

//     const slideLeft = () => {
//         let slider = document.getElementById("slider");
//         slider.scrollLeft = slider.scrollLeft - 235;
//     };

//     const slideRight = () => {
//         let slider = document.getElementById("slider");
//         slider.scrollLeft = slider.scrollLeft + 235;
//     };
//     return (
//         <>
//             <div className="trending">
//                 <p style={{background: 'white'}}>Productos Destacados</p>
//                 <div className="container">
//                     <div className="title-btns">
//                         <div className="btns">
//                             <button style={{ background: 'none' }} title="scroll left" onClick={slideLeft}>
//                                 &#9001;
//                             </button>
//                         </div>
//                     </div>
//                     <div className="row-container" id="slider">
//                         {imagenes.map((item) => (
//                             <div key={item.id} className="row-item">
//                                 {/* <Link href={`/`} className="link"> */}
//                                     <div className="item-header">
//                                         <img src={item.img} alt="product" />
//                                     </div>
//                                 {/* </Link> */}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="title-btns">
//                         <div className="btns">
//                             <button style={{ background: 'none' }} title="scroll right" onClick={slideRight}>
//                                 &#9002;
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
// export default TrendingSlider;


// components/Carousel.js




import React, { useRef } from 'react';
import style from '../styles/carrusel.css';

const Carrusel = () => {
    // Referencia al carrusel
    const slideRef = useRef(null);

    // Índice actual del slide
    let currentIndex = 0;

    // Tiempo entre cambios de slide en milisegundos (ejemplo: 3 segundos)
    const intervalTime = 5000;

    // Array de imágenes
    const images = [
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_1/9_septiembre/semana_4/HB_Hero_Sup_1_DR_23.jpg",
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_2/9_septiembre/semana_4/HB_Hero_Sup_2_DR_23.jpg",
        "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/hero_banner/hero_banner_superior/hero_sup_3/9_septiembre/semana_4/HB_Hero_Sup_3_DR_23.jpg"
    ];

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % images.length;
        slideRef.current.style.transform = `translateX(-${currentIndex * 90}%)`;
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
            <div>
                <img class="section-singleImg"
                    src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/promo_banner/promo_superior/promo_superior_1/8_agosto/semana_4/H_Promo_Sup_1_D_23.jpg"
                    alt="" />

                <img class="section-singleImg"
                    src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/home_page/promo_banner/promo_superior/promo_superior_2/9_septiembre/semana_2/H_Promo_Sup_2_D_23.jpg"
                    alt="" />
            </div>
        </div>
    );
};

export default Carrusel;

