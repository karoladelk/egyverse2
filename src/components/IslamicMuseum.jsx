
import React from "react";
import { MacbookScroll } from "./laptop-scroll";
import { IoLanguage } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { MdAudiotrack } from "react-icons/md";


export default function IslamicMuseum() {
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
        // backgroundColor: 'rgba(243, 244, 246, 0.9)',
        backgroundColor: "rgb(28, 26, 31,0.9)",
        zIndex: 1,
      };
    
  return (
    <div>
<section className="py-24 sm:py-32 bg-[#f8f9fa]" style={backgroundStyle}>
  <div style={overlayStyle}></div>
  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 bg-transparent bg-opacity-50">
    <div className="text-center">
      <h1 className=" text-white mb-8 text-center">Explore The Islamic Museum</h1>
    </div>
    <div
      className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 pt-10 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      style={{ height: "55vh" }}
    >
      <div className="col-span-1 lg:col-span-1/3">
        <img
          src={`${process.env.PUBLIC_URL}/museum-avatar.png`}
          alt="Avatar"
          className="object-cover w-full h-full"
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
      {/* <div className="text-center py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Islamic Museum</h1>
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center border-2 p-1">
          <IoLanguage style={{ fontSize: "1rem", margin: "0.5rem" }} />
          <p className="text-white text-md">Watch it with Any Language</p>
        </div>
        <div className="flex flex-col items-center border-2 p-1">
          <MdOndemandVideo style={{ fontSize: "1.5rem", margin: "0.5rem" }} />
          <p className="text-white">Video with a description</p>
        </div>
        <div className="flex flex-col items-center border-2 p-1">
          <FaBook style={{ fontSize: "1.5rem", margin: "0.5rem" }} />
          <p className="text-white">Downloadable Book</p>
        </div>
        <div className="flex flex-col items-center border-2 p-1">
          <MdAudiotrack style={{ fontSize: "1.5rem", margin: "0.5rem" }} />
          <p className="text-white">Downloadable Audiobook</p>
        </div>
      </div>
    </div> */}


        <p className="text-white text-start mb-4" 
        style={{
            // lineHeight: "2",
            fontSize: "1.3rem",
        }}
        >
          The Islamic Museum is a museum located in Cairo, Egypt. It is one of the most important museums in the world dedicated to Islamic art and culture. The museum was founded in 1881 by Khedive Tewfik Pasha, and was originally housed in the mosque of Prince Ibrahim Pasha in the Citadel of Cairo. The museum was moved to its current location in 1903, and has been expanded several times since then.
        </p>
        <div className="flex flex-row items-center justify-center space-x-4">
          <button className="bg-[#203b4a] text-white px-4 py-2 rounded-lg">Explore</button>
          <button className="bg-[#203b4a] text-white px-4 py-2 rounded-lg">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</section>



    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full"
    style={{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#cddde3',
        backgroundImage: 'linear-gradient(315deg, #203b4a 0%, #1c1a1f 74%, #1c1a1f 100%)',
        // backgroundImage: `url(${process.env.PUBLIC_URL}/bgg3.jpg)`,
        // paddingBottom: '5rem',
      }}>
        
      
    
      <MacbookScroll
        title={
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center pt-0">
            How to Use EgyVerse
          </h1>
            
        }
        badge={
          <div >
            <Badge className="h-10 w-10 transform" />
          </div>
        }
        src={`/linear.webp`}
        showGradient={false}
        margin={0}
        padding={0}
      />
    </div>
    </div>
  );
}

const Badge = ({ className }) => {
  return (
    // <img src={`url(${process.env.PUBLIC_URL}/logo-icon.png)`}/>

    <div className={`bg-[#203b4a] p-2 rounded-full ${className}`}>
      {/* <PiVirtualRealityThin className="text-white" style={{ fontSize: "2rem" }} /> */}
      <img src={`/logo-icon.png`} className="object-cover w-full h-full p-1" />
    </div>

   
  );
};


