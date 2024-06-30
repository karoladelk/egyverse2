import React from 'react';

export default function Carousel() {
  const slides = [
    {
      title: "First Slide",
      description: "This is the description for the first slide.",
      imageUrl: `${process.env.PUBLIC_URL}/bgg7.jpg`
    },
    {
      title: "Second Slide",
      description: "This is the description for the second slide.",
      imageUrl: `${process.env.PUBLIC_URL}/bgg7.jpg`
    },
    {
      title: "Third Slide",
      description: "This is the description for the third slide.",
      imageUrl: `${process.env.PUBLIC_URL}/bgg7.jpg`
    }
  ];

  return (
    <div data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }' className="relative m-20" style={{ width: "80%" }}>
      <div className="hs-carousel relative overflow-hidden w-full min-h-96 rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 left-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          {slides.map((slide, index) => (
            <div key={index} className="hs-carousel-slide w-full flex-shrink-0 flex">
              <img src={slide.imageUrl} alt={slide.title} className="w-1/2 h-full object-cover rounded-lg" />
              <div className="w-1/2 flex flex-col justify-center items-start p-6 bg-gray-100 dark:bg-neutral-900">
                <h2 className="mt-4 text-2xl text-gray-800 dark:text-white">{slide.title}</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 left-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-l-lg dark:text-white dark:hover:bg-white/10">
        <span className="text-2xl" aria-hidden="true">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 right-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-r-lg dark:text-white dark:hover:bg-white/10">
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>

      <div className="hs-carousel-pagination flex justify-center absolute bottom-3 left-0 right-0 space-x-2">
        {slides.map((_, index) => (
          <span key={index} className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
        ))}
      </div>
    </div>
  );
};

