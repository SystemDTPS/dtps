import React, { useState } from 'react';

// Import all images dynamically from the assets folder
const imageUrls = Array.from({ length: 65 }, (_, i) => `/assets/gallery/pic (${i + 1}).jpeg`);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  return (
    <div className='w-screen min-h-screen h-max patternOne px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
      <div className='flex flex-col items-center justify-center w-full h-max pt-4'>
        <h1 className='font-bold text-[24px] sm:text-[28px] text-sky-600 underline underline-offset-8'>Gallery</h1>
        <div className='w-full max-w-4xl bg-white shadow-lg rounded-xl mt-4 p-6'>
          {/* Slideshow */}
          <div className='w-full h-64 sm:h-80 md:h-96 rounded-lg flex items-center justify-center relative overflow-hidden'>
            <div 
              className='absolute inset-0 bg-cover bg-center blur-xl'
              style={{ backgroundImage: `url(${selectedImage})` }}
            ></div>
            <img 
              src={selectedImage} 
              alt='Gallery' 
              className='relative w-full h-full object-contain z-10'
            />
          </div>
          {/* Thumbnail Selector */}
          <div className='flex gap-4 mt-4 overflow-x-auto'>
            {imageUrls.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                loading='lazy'
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? 'border-sky-600' : 'border-gray-300'}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
