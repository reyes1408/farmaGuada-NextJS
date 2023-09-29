"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/slide.css";

const TrendingSlider = ({ imagenes, idSlider, titulo}) => {

    const slideLeft = () => {
        let slider = document.getElementById(idSlider);
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById(idSlider);
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <>
            <div className="trending">
                <h1>{titulo}</h1>
                <div className="container">
                    <div className="title-btns">
                        <div className="btns">
                            <button style={{ background: 'none' }} title="scroll left" onClick={slideLeft}>
                                &#9001;
                            </button>
                        </div>
                    </div>
                    <div className="row-container" id={idSlider}>
                        {imagenes.map((item) => (
                            <div key={item.id} className="row-item">
                                <Link href={`/`} className="link">
                                    <div className="item-header">
                                        <img src={item.img} alt="product" />
                                    </div>
                                    <div className="item-description">
                                        <p>{item.nombre}</p>
                                        <p className="item-price">{item.descripcion}</p>
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