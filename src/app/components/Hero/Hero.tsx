import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden">
      <Image
        src="/heroBG.png"
        alt="hero background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-top"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 p-4"
        id="hero-text"
      >
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-glacial-indifference">
            Celebrating Every Feat Sharing Every Story
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            Conquer new heights with Feat Books!
          </h2>
        </div>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-200 transition">
          Explore our Services
        </button>
      </div>
    </div>
  );
};

export default Hero;
