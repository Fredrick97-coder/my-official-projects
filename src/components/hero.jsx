import React from 'react';
import bg_img from '../assets/bg.jpg';

const backgroundImage = {
  backgroundImage: `url(${bg_img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function Hero() {
  return (
    <section className="relative h-[55vh] w-screen" style={backgroundImage}>
      <div className="overlay-hero" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen">
        <h1 className="hero-text animate__animated animate__backInUp text-white text-center text-[50px]">
          <span>Professionally coded UI</span> <br />{' '}
          <span className="">Kits/Templates</span>
        </h1>
        <h3 className="hero-shortword text-[#555] text-center text-4xl py-3 ">
          components for your next project
        </h3>
      </div>
    </section>
  );
}

export default Hero;
