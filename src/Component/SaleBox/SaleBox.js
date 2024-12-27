import React, { useState, useEffect } from "react";
import "./SaleBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import background5 from "../../assets/images/laptop.png";
import background from "../../assets/images/totoro.jpg";
import mouse from "../../assets/images/product-img/mouse.jpeg";
import iphone from "../../assets/images/product-img/IPHONE.webp";

const SaleBox = () => {

    const images = [];
    images.push(background5);
    images.push(background);
    images.push(mouse);
    images.push(iphone);

    

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000);
        return () => {
            clearInterval(slideInterval);
        };
    });
  

    return (
        <>
            <div className="SaleBox">
                <div className="SaleBoxLeft">
                <div className="hot-label"> 30% </div>
                    <div >

                        <img
                            className="background-banner mySlides"
                            src={images[currentSlide]}
                            alt={`Slide ${currentSlide + 1}`}
                        />

                    </div>

                    <div className="prev" onClick={prevSlide}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </div>
                    <div className="next" onClick={nextSlide}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </div>
                    <div className="pagination-dots">
                        {images.map((banner, index) => (
                            <span
                                key={index}
                                className={index === currentSlide ? "dot active" : "dot"}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleBox;
