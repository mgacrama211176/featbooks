import React from "react";

const About = () => {
  return (
    <section
      className="relative bg-white py-16 md:py-24 scroll-mt-16"
      id="about"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl md:text-5xl mb-8 font-glacial-indifference font-black text-center">
          About Feat Books
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            At Feat Books, we believe every storyteller has a voice worth
            amplifying and a journey worth celebrating. Our mission is to help
            authors, content creators, and storytellers by providing
            professional publishing and marketing services that bring their
            visions to life. From expert editing and stunning design to
            innovative marketing and self-publishing support, we&apos;re here to
            help you share your story with the world.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Let&apos;s turn your creative dreams into reality—together, we will
            all celebrate every feat and share every story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
