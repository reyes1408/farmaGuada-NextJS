"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/slide.css";

const TrendingSlider = () => {
    const filteredItems = [
        {
            id: 1,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1314912_A_168_AL.jpg",
            description: "camera",
            price: 200,
        },
        {
            id: 2,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1405004_A_168_AL.jpg",
            description: "Phone",
            price: 100,
        },
        {
            id: 3,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1406159_A_168_AL.jpg",
            description: "Laptop",
            price: 500,
        },
        {
            id: 4,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1379577_A_168_AL.jpg",
            description: "Headepho",
            price: 40,
        },
        {
            id: 5,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1357522_A_168_AL.jpg",
            description: "Keyboard",
            price: 140,
        },
        {
            id: 6,
            img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/10855_A_168_AL.jpg",
            description: "Gaming",
            price: 140,
        }
    ];

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <>
            <div className="trending">
                <p>Productos Destacados</p>
                <div className="container">
                    <div className="title-btns">
                        <div className="btns">
                            <button style={{ background: 'none' }} title="scroll left" onClick={slideLeft}>
                                &#9001;
                            </button>
                        </div>
                    </div>
                    <div className="row-container" id="slider">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="row-item">
                                <Link href={`/`} className="link">
                                    <div className="item-header">
                                        <img src={item.img} alt="product" />
                                    </div>
                                    <div className="item-description">
                                        <p>{item.description}</p>
                                        <p className="item-price">{item.price}$</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="title-btns">
                        <div className="btns">
                            <button style={{ background: 'none' }} title="scroll right" onClick={slideRight}>
                                &#9002;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TrendingSlider;