"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (

    <section>
    <div className=" p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={card.className}>
            {/* <p>gg</p> */}
          <motion.div
            onClick={() => handleClick(card)}
            className={`relative overflow-hidden ${
              selected?.id === card.id
                ? " flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            }`}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={`absolute h-full w-full left-0 top-0  opacity-0 z-10 ${
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        }`}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
    </section>
  );
};

export const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    // <img
    //   src={card.thumbnail}
    //   height="500"
    //   width="500"
    //   onLoad={() => setLoaded(true)}
    //   className={`object-cover object-top absolute inset-0 h-full w-full transition duration-200 ${
    //     loaded ? "blur-none" : "blur-md"
    //   }`}
    //   alt="thumbnail"
    // />
    <div>
    <video
                //   ref={(el) => (videoRefs.current[index] = el)}
                //   className="w-full h-full"
                //   controls
                //   onMouseEnter={() => handleMouseEnter(index)}
                //   onMouseLeave={() => handleMouseLeave(index)}
                //   style={{borderWidth:"5px", borderColor:"#2a7a8d"}}
                >
                  <source src={`${process.env.PUBLIC_URL}/video-${card.id}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="group relative">
                <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900 group-hover:text-gray-600">
                  {/* <a href={post.href}> */}
                    <span className="absolute inset-0" />
                    Abu Simbel Temple
                    {card.thumbnail}
                  {/* </a> */}
                </h3>
              </div>
                </div>
  );
};

export const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

const VR = () => {
  const cards = [
    {
      id: 1,
      content: (
        <div className="mt-5">
          {/* <h2 className="text-2xl font-bold">Step 1</h2> */}
          <p>Abu Simbel, built in the 13th century BC by Pharaoh Ramesses II, features two massive rock-cut temples with iconic reliefs and figures of his wife Nefertari.</p>
        </div>
      ),
    //   className: 'bg-blue-200',
      thumbnail: `${process.env.PUBLIC_URL}/video-1`,
    },
    {
      id: 2,
      content: (
        <div>
          {/* <h2 className="text-2xl font-bold">Step 2</h2> */}
          <p>Download and install the necessary VR applications on your device. Connect your VR headset to your device.</p>
          {/* <img src={`${process.env.PUBLIC_URL}/step1.webp`} width={500} height={300} alt="Install Apps" /> */}
        </div>
      ),
    //   className: 'bg-green-200',
      thumbnail: `${process.env.PUBLIC_URL}/video-2`,
    },
    {
      id: 3,
      content: (
        <div>
          <h2 className="text-2xl font-bold">Step 3</h2>
          <p>Launch the VR application, put on your headset, and enjoy the virtual experience. Follow any on-screen instructions.</p>
          {/* <img src={`${process.env.PUBLIC_URL}/step1.webp`} width={500} height={300} alt="Launch VR" /> */}
        </div>
      ),
    //   className: 'bg-red-200',
      thumbnail: `${process.env.PUBLIC_URL}/video-3`,
    },
  ];

  return <LayoutGrid cards={cards} />;
};

export default VR;
