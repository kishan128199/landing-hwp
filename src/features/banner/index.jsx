import React from 'react';
import Image from 'next/image';
const Banner = () => {
  return (
    <section className="banner" id="#home">
      <div className="overlay">
        <p className="banner-description">
          Keep Smiling as Humanity is still alive
        </p>
        <h1 className="banner-title">
          Empowering Holistic Fitness and Wellness
        </h1>
      </div>
      <object
        style={{
          margin: '12rem auto auto auto',
          width: '100%',
        }}
        width={100}
        height={100}
        type="image/svg+xml"
        data="/svg/mouse-scroll.svg"
      ></object>
    </section>
  );
};

export default Banner;
