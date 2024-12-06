import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[400px] md:min-h-[600px] overflow-hidden"
      aria-label="Hero section"
    >
      <Image
        src="/heroBG.png"
        alt="Decorative hero background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-top"
        role="presentation"
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
        <button
          className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-200 transition"
          aria-label="Explore our Services"
        >
          Explore our Services
        </button>
        <Link
          href="#about"
          className=" items-center gap-2 text-white hover:text-gray-200 transition animate-bounce-slow absolute bottom-10 hidden md:flex"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={52} aria-hidden="true" />
        </Link>
        app manag
      </div>
    </section>
  );
};

export default Hero;
