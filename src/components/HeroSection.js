import React from 'react';
import CustomImage from './CustomImage';

const HeroSection = () => {
  const images = [
    '/images/gallery/img_1.jpg',
    '/images/gallery/img_2.jpg',
    '/images/gallery/img_3.jpg',
    '/images/gallery/img_4.jpg',
    '/images/gallery/img_5.jpg',
    '/images/gallery/img_6.jpg',
    '/images/gallery/img_7.jpg',
    '/images/gallery/img_8.jpg',
    '/images/gallery/img_9.jpg',
  ];
  return (
    <div className='section hero'>
      <div className='col typography'>
        <h1 className='title'>What are we about</h1>
        <p className='info'>
          FoodiesHub is a place where you can please your soul and tummy with
          delicious recipes of all cuisine. and our service is absolutely free.
          So start exploring now.
        </p>
        <button className='btn'>explore now</button>
      </div>
      <div className='col gallery'>
        {images.map((src, index) => (
          <CustomImage pt={'90%'} key={index} imgSrc={src} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
