"use client";
import React from "react";
import Link from "next/link";
import useScrollTrigger from "@/app/hooks/ScrollTriggerOptions";

const About = () => {
  const { scrollPosition, isVisible } = useScrollTrigger("about", {
    threshold: 0.75,
  });

  return (
    <section
      className="relative bg-white py-16 md:py-24 scroll-mt-16 overflow-hidden"
      id="about"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2
          className={`text-4xl md:text-5xl mb-8 font-glacial-indifference font-black text-center transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          About Feat Books
        </h2>
        <div className="space-y-6">
          <p
            className={`text-lg md:text-xl leading-relaxed transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            At Feat Books, we believe every storyteller has a voice worth
            amplifying and a journey worth celebrating. Our mission is to help
            authors, content creators, and storytellers by providing
            professional publishing and marketing services that bring their
            visions to life. From expert editing and stunning design to
            innovative marketing and self-publishing support, we&apos;re here to
            help you share your story with the world.
          </p>
          <p
            className={`text-lg md:text-xl leading-relaxed transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Let&apos;s turn your creative dreams into reality—together, we will
            all celebrate every feat and share every story.
          </p>
        </div>
        <div
          className={`transform transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link href="/contact">
            <button className="px-6 py-3 mt-6 bg-black text-white font-semibold rounded-md hover:bg-[#edc34a] hover:text-black transition-all duration-300 hover:scale-105">
              Learn more about us!
            </button>
          </Link>
        </div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          transform: `translateY(${scrollPosition * 0.1}px)`,
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#edc34a] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#edc34a] rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About;
