"use client"
import React, { useState } from 'react';
import "./styles/carousel.css"
import Image from 'next/image';
import Next from "../assets/next.svg"
import Prev from "../assets/before.svg"

function Carousel ({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="icon" onClick={prevSlide}><Image src={Prev} alt='Next' /></button>
      <div className="slide-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? '' : ''}`}
          >
            <button className={`normal ${index === currentIndex ? 'active' : ''}`}>
              {item}
            </button>
          </div>
        ))}
      </div>
      <button className="icon" onClick={nextSlide}><Image src={Next} alt='Next' /></button>
    </div>
  );
};

export default Carousel;
