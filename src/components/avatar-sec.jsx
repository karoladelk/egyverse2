import React, { useState } from 'react';
import './avatar-sec.css';
import { PiVirtualRealityThin } from "react-icons/pi";

const Avatar = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <section className="text-white p-10 mb-0 flex flex-col md:flex-row items-center bg-cover bg-center bg-white" style={{ justifyContent: 'center', alignItems: 'center', marginBottom: "10vh" }}>
      <div className="absolute inset-0 -z-10 overflow-hidden mb-0">
        <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>

      <div className="py-24 sm:py-32 mb-0 pb-0" style={{ width: "100%", height: "100%" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                <div className="flex -space-x-2 overflow-hidden ">
                  <PiVirtualRealityThin className="text-[#222]" style={{ fontSize: "50px" }} />
                  <p className="mt-2 text-lg leading-8 text-[#2a7a8d] pl-4">+20 Virtual Reality Tours</p>
                </div>
                <div className="flex -space-x-2 overflow-hidden ">
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <p className="mt-1 text-lg leading-8 text-[#2a7a8d] pl-5">+5,000 Customer Visits</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              
              <div className="language-buttons">
                <button className={`px-4 py-2 rounded-full`} onClick={() => handleLanguageChange('en')}
                  style={{
                    backgroundImage: `${language === 'en' ? `url(${process.env.PUBLIC_URL}/usa.png)` : `url(${process.env.PUBLIC_URL}/usa.png)`}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                  }} />
                <button className={`px-4 py-2 rounded-full`} onClick={() => handleLanguageChange('es')}
                  style={{
                    backgroundImage: `${language === 'en' ? `url(${process.env.PUBLIC_URL}/spain.webp)` : `url(${process.env.PUBLIC_URL}/spain.webp)`}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                  }} />
                <button className={`px-4 py-2 rounded-full`} onClick={() => handleLanguageChange('ch')}
                  style={{
                    backgroundImage: `${language === 'en' ? `url(${process.env.PUBLIC_URL}/china.png)` : `url(${process.env.PUBLIC_URL}/china.png)`}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundSize: '100%',
                  }} />
              </div>
              <div className="black-strip"></div>
              <div className="video-container" style={{ width: '85%', height: '100%', top: "-20vh", left: "%", paddingBottom: "200px", zIndex:"1" }}>
                <video key={language} className="w-full h-full" controls>
                  <source src={`${process.env.PUBLIC_URL}/video-${language}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avatar;
