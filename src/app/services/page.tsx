import React from "react";
import {
  Book,
  Pencil,
  Lightbulb,
  Upload,
  UserSquare2,
  MessageSquare,
  BarChart3,
  Users2,
  ShoppingBag,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Professional Editing Services",
      description:
        "Refine your manuscript with expert editing tailored to your voice, ensuring clarity and impact.",
      icon: <Pencil className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Custom Book Design",
      description:
        "Transform your book into a visual masterpiece with personalized covers and professional layouts.",
      icon: <Book className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Strategic Marketing Solutions",
      description:
        "Reach your ideal audience through targeted marketing strategies across multiple platforms.",
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Self-Publishing Support",
      description:
        "Navigate the self-publishing process with expert guidance from manuscript to market.",
      icon: <Upload className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Author Branding and Development",
      description:
        "Build a compelling personal brand to enhance your visibility and connect with your audience.",
      icon: <UserSquare2 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Content Creation Assistance",
      description:
        "Expert advice and editing services to help you develop engaging content across platforms.",
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Analytics and Sales Optimization",
      description:
        "Leverage data-driven insights to improve your book's performance and growth opportunities.",
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Workshops and Consultations",
      description:
        "One-on-one sessions and group workshops to enhance your writing and publishing journey.",
      icon: <Users2 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Digital Products Development",
      description:
        "Expand your creative portfolio with ebooks, audiobooks, and digital products to diversify your offerings.",
      icon: <ShoppingBag className="w-12 h-12 text-blue-600" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We deliver expert editing, design, marketing, and publishing to bring
          your story to life with seamless support.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {service.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 text-center bg-blue-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why choose Feat Books?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Feat Books, we combine creativity, collaboration, and expertise to
          help you share your story with the world. Our friendly and
          professional team is here to support every step of your journey,
          ensuring your vision is realized and celebrated.
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
