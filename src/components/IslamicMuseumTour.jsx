import React, { useState } from 'react';
import { MacbookScroll } from "./laptop-scroll";
import { IoLanguage } from "react-icons/io5";
import { MdOndemandVideo, MdAudiotrack } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import Modal from "./Modal";

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
    backgroundColor: "rgba(28, 26, 31, 0.9)",
    zIndex: 1,
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div>
      
      <section className="py-24 sm:py-32" style={backgroundStyle}>
        <div style={overlayStyle}></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 bg-transparent bg-opacity-50">
          
          <MacbookScroll
            title={<h1 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center pt-0">How to Use EgyVerse</h1>}
            badge={<Badge className="h-10 w-10 transform" />}
            src={`/linear.webp`}
            showGradient={false}
          />
          
        
        </div>
      </section>
      <div
        className="py-10 px-6 sm:px-12 lg:px-24"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(315deg, #203b4a 0%, #1c1a1f 74%, #1c1a1f 100%)',
          textAlign: 'center',
        }}
      >
        <h1 className="text-white font-semibold mb-8">Download Resources</h1>
        <p className="text-white text-lg mb-8">
          Download the PDF guide or audio guide to learn more about the Islamic Museum.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a
            href={`${process.env.PUBLIC_URL}/example.pdf`}
            download
            className="bg-[#203b4a] text-white px-8 py-4 rounded-lg hover:bg-[#1c313a] transition-colors duration-300"
          >
            <div className="flex flex-col items-center">
              <FaBook className="text-4xl mb-2" />
              <span className="text-lg font-medium">Download PDF</span>
            </div>
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/example.mp3`}
            download
            className="bg-[#203b4a] text-white px-8 py-4 rounded-lg hover:bg-[#1c313a] transition-colors duration-300"
          >
            <div className="flex flex-col items-center">
              <MdAudiotrack className="text-4xl mb-2" />
              <span className="text-lg font-medium">Download Audio</span>
            </div>
          </a>
        </div>
      </div>

      
      
    </div>
  );
}

const FeatureCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center p-4 transition-transform transform hover:scale-105 bg-transparent rounded-full">
      <div style={{ fontSize: "2rem", margin: "0.5rem", color: "#9a7f54" }}>
        {icon}
      </div>
      <p className="text-white text-sm text-center" style={{ color: "#9a7f54" }}>
        {text}
      </p>
    </div>
  );
};

const Badge = ({ className }) => {
  return (
    <div className={`bg-[#203b4a] p-2 rounded-full ${className}`}>
      <img src={`/logo-icon.png`} className="object-cover w-full h-full p-1" alt="Badge" />
    </div>
  );
};
