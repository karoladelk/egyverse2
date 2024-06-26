"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AuroraBackground from './ui/aurora-background';

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-30 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-8 mx-auto h-[30rem] md:h-[38rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-2">
        {children}
      </div>
    </motion.div>
  );
};

const callouts = [
  {
    name: 'Step 1: Set Up Your Device',
    description: 'Ensure your VR headset is properly connected to your PC or mobile device.',
    imageSrc: 'step1.webp',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
  },
  {
    name: 'Step 2: Launch the VR App',
    description: 'Open the EgyVerse application. Choose the VR tour of your choice',
    imageSrc: 'step2.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
  },
  {
    name: 'Step 3: Immerse Yourself',
    description: 'Put on your headset, adjust the fit, and use the controllers to navigate through the VR experience. Enjoy the immersive journey!',
    imageSrc: 'step3.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
  },
];

const backgroundStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/bgg7.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  zIndex: 0,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(243, 244, 246, 0.8)',
  zIndex: -1,
};

const Steps = () => (
  // <AuroraBackground>
  //     <motion.div
  //       initial={{ opacity: 0.0, y: 40 }}
  //       whileInView={{ opacity: 1, y: 0 }}
  //       transition={{
  //         delay: 0.8,
  //         duration: 0.8,
  //         ease: "easeInOut",
  //       }}
  //       // className="relative flex flex-col gap-4 items-center justify-center px-4"
  //     >
  <div 
  // style={backgroundStyle}
  >
      {/* <div style={overlayStyle}></div> */}
  <div
    // className="text-white p-10 flex flex-col md:flex-row items-center bg-cover bg-center bg-gradient-to-r from-[#6ca0ae] to-[#f8f9fa]"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#cddde3',
      backgroundImage: 'linear-gradient(315deg, #6ca0ae 0%, #f8f9fa 74%, #f8f9fa 100%)',
      // backgroundImage: `url(${process.env.PUBLIC_URL}/bgg3.jpg)`,
      // paddingBottom: '5rem',
    }}
  >
    {/* #1c1a1f */}
    <ContainerScroll
      titleComponent={
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-12 text-center pt-0">
          How to Use EgyVerse
        </h1>
      }
    >
      <div className="bg-gray-100 mt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-10">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    {callout.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerScroll>
  </div>
  </div>
  // </motion.div>
  // </AuroraBackground>
  );

export default Steps;
