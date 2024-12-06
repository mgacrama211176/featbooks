import React from "react";
import Link from "next/link";
import { Edit3, BookOpen, BarChart2, Upload } from "lucide-react";

const services = [
  {
    title: "Professional Editing Services",
    description:
      "Our expert editors ensure your writing is clear, engaging, and error-free, while maintaining your unique voice. From developmental edits to line editing, we refine your story to perfection.",
    Icon: Edit3,
    alt: "Editing services icon",
  },
  {
    title: "Custom Book Design",
    description:
      "From stunning cover art to beautiful interior layouts, we create designs that reflect your story's essence and captivate your audience.",
    Icon: BookOpen,
    alt: "Book design icon",
  },
  {
    title: "Strategic Marketing Solutions",
    description:
      "We craft innovative marketing campaigns to boost your book's visibility, connecting it with the right readers and driving sales.",
    Icon: BarChart2,
    alt: "Marketing solutions icon",
  },
  {
    title: "Self-Publishing Support",
    description:
      "Our team provides expert guidance on formatting, distribution, and launching your book, ensuring a seamless path to publication.",
    Icon: Upload,
    alt: "Publishing support icon",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#edc34a]" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-poppins text-black">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div
                key={index}
                className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-black hover:text-white border border-black/10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <IconComponent
                      size={48}
                      className="group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 font-poppins group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-300"
          >
            Learn more about our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
