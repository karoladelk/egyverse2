"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";

const posts = [
  {
    id: 1,
    title: 'Abu Simbel',
    href: '#',
    description: "Abu Simbel, built in the 13th century BC by Pharaoh Ramesses II, features two massive rock-cut temples with iconic reliefs and figures of his wife Nefertari.",
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 2,
    title: 'Wahy Tomb',
    href: '#',
    description: 'The Wahy Tomb, belonging to a high-ranking official, features well-preserved inscriptions, paintings, and artifacts, showcasing ancient Egyptian life and beliefs.',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 3,
    title: 'Gayer-Anderson Museum',
    href: '#',
    description: 'The Gayer-Anderson Museum in Cairo, Egypt, showcases Islamic and Egyptian art within a 17th-century Ottoman house, featuring intricate woodwork and courtyards.',
    category: { title: 'Marketing', href: '#' },
  },
];

export default function Tour() {
  const videoRefs = useRef([]);
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bgg7.jpg)`,
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
    backgroundColor: 'rgba(243, 244, 246, 0.9)',
    zIndex: 1,
  };

  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = true;
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].muted = false;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#f8f9fa]" 
    style={backgroundStyle}
    // style={{ backgroundImage: 'linear-gradient(315deg, #6ca0ae 0%, #f8f9fa 74%, #f8f9fa 100%)',
    // }}
    >
      <div style={overlayStyle}></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 bg-transparent bg-opacity-50">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center">Explore Our VR Experiences</h1>
        </div>
        <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-6 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-[#2a7a8d] bg-opacity-90 p-3 border-2 border-[#2a7a8d] rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <div className="relative">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <source src={`${process.env.PUBLIC_URL}/video-${post.id}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-100">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
