import React, { useState } from 'react';
import './test.css';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";

function Image({ id }) {
  return (
    <section className="relative">
      <img src={`/${id}.jpg`} alt={`Image ${id}`} className="object-cover w-full h-full" />
      <div className="overlay-layer"></div>
    </section>
  );
}

export default function ImageSection() {
  const images = ["Egyptian Tombs","Egyptian Museums","Egyptian Temples"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div className="">
        <div className="overlay-content left-0 ml-10">
          <div className="relative z-20 max-w-xl py-32 sm:py-48 lg:py-56 text-white text-left" style={{ top: "35vh", left: "3%", opacity:"95%" }}>
            <div className='bg-[#203b4a] px-12 py-12'>
              <h1>
                Explore Egypt Virtually with <span style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold"
                }}>EgyVerse</span>
              </h1>
              <p>
                Step into the past with our state-of-the-art VR tours. Experience Egypt's historical sites in vivid detail and multiple languages without leaving your home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image id={images[currentImageIndex]} />
      <div className="hover-arrow absolute bottom-10 right-10 flex items-center space-x-4">
        <HiOutlineArrowCircleLeft
          onClick={handlePrev}
          className="text-white cursor-pointer"
          style={{ fontSize: "45px" }}
        />
        <div className="text-white">
          {currentImageIndex + 1} / {images.length}
        </div>
        <HiOutlineArrowCircleRight
          onClick={handleNext}
          className="text-white cursor-pointer"
          style={{ fontSize: "45px" }}
        />
      </div>
      
    </div>
  );
}

