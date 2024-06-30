import React, { useState } from 'react';
import Modal from "./Modal";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";
import ButtonLink from './ui/ButtonLink';

function Image({ image }) {
  return (
    <div className="relative group">
      <div className="relative  w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75"
      style={{
        height:"42vh",
        width:"100%"
      }}>
        <img
          src={`/${image.id}`}
          alt={`Image ${image.id}`}
          className="h-auto w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-center p-2">{image.description}</p>
        </div>
      </div>
      <h3 className="p-3 text-gray-200 text-lg text-center mb-10">{image.title}</h3>
    </div>
  );
}

export default function IslamicMuseum() {
  const images = [
    {
      id: "Ewer of Marwan.webp",
      title: "Ewer of Marwan",
      description: "A stunning silver ewer from the Umayyad dynasty with intricate floral and geometric designs."
    },
    {
      id: "wooden panels.webp",
      title: "Wooden Panels",
      description: "Intricately carved wooden panels from the Abbasid period with geometric and floral motifs."
    },
    {
      id: "Kashkoul.webp",
      title: "Kashkoul",
      description: "An iron Sufi hand-bag with detailed engravings and patterns."
    },
    {
      id: "Kitab fil-adwiya al-mufrada.webp",
      title: "Kitab fil-adwiya al-mufrada",
      description: "A manuscript by Abu Ja'far al-Ghafiqi with botanical illustrations and Arabic script."
    },
    {
      id: "Mamluk glass lamp.webp",
      title: "Mamluk Glass Lamp",
      description: "A beautiful glass lamp from the Mamluk period, decorated with enamel and gold."
    },
    {
      id: "Ottoman ceramics.webp",
      title: "Ottoman Ceramics",
      description: "Colorful ceramics with floral and geometric patterns from the Ottoman period."
    },
  ];
  

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg-islamic2.webp)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 0,
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(28, 26, 31, 0.9)",
    zIndex: 1,
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className='relative'>
      <section className="py-24 sm:py-32" style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 bg-transparent bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white mb-8 text-center text-4xl md:text-5xl font-bold">Explore The Islamic Museum</h1>
          </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 pt-10 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3" style={{ height: "55vh" }}>
            <div className="col-span-1 lg:col-span-1/3">
              <video
                src={`${process.env.PUBLIC_URL}/islamic-museum-avatar.mp4`}
                className="object-cover w-full h-full"
                controls
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-span-2 lg:col-span-2/3 flex flex-col items-start justify-center">
              <p className="text-white text-start mb-4 text-lg" style={{ fontSize: "1.2rem" }}>
                The Islamic Museum is a museum located in Cairo, Egypt. It is one of the most important museums in the world dedicated to Islamic art and culture. The museum was founded in 1881 by Khedive Tewfik Pasha and was originally housed in the mosque of Prince Ibrahim Pasha in the Citadel of Cairo. The museum was moved to its current location in 1903 and has been expanded several times since then.
              </p>
              <div className="flex flex-row items-center justify-center space-x-4">
                <button
                  type="button"
                  onClick={handleClick}
                  className="bg-[#203b4a] text-white px-4 py-2 rounded-lg"
                >
                  Subscribe Now
                </button>
                {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(315deg, #203b4a 0%, #1c1a1f 74%, #1c1a1f 100%)',
        }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h1 className="text-white mb-12 text-4xl md:text-5xl font-semi-bold">Some insights in the museum</h1>
          <div className="mt-6 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
              {images.map((image) => (
                <Image key={image.id} image={image} />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <iframe width="100%" height="600vh" src="https://www.youtube.com/embed/vzH8HIUqKu0?si=vN7fHKT8YHkKSdzZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
