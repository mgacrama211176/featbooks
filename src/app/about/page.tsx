import React from "react";

const AboutPage = () => {
  const coreValues = [
    {
      title: "Creativity",
      description:
        "We celebrate and nurture unique voices and bold storytelling.",
    },
    {
      title: "Empowerment",
      description:
        "We equip creators with the tools and support to achieve their dreams.",
    },
    {
      title: "Collaboration",
      description: "Together, we climb higher and achieve greater feats.",
    },
    {
      title: "Innovation",
      description:
        "We embrace fresh ideas to revolutionize publishing journey.",
    },
    {
      title: "Authenticity",
      description: "We value genuine stories and meaningful connections.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
        <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
          <p>
            Every great story begins with a vision—a spark of inspiration, a
            challenge to overcome. At Feat Books, we have firsthand the passion,
            perseverance, and creativity it takes to climb the mountain of
            storytelling. That's why we're here to guide authors and content
            creators through every step of their journey.
          </p>
          <p>
            Born out of a love for storytelling and the desire to empower
            creators, we saw a need for a publishing platform that offers more
            than that—it offers partnership. Too often, storytellers face
            roadblocks: limited creative control, complex publishing processes,
            or struggles in finding the right audience. We set out to change
            that.
          </p>
          <p>
            Feat Books was built to combine expert editing, beautiful design,
            strategic marketing, and a seamless user platform—all with a
            personalized touch. We're more than just a publishing platform;
            we're your biggest champion and your most creative partner. We're
            here to celebrate your triumphs and ensure your story reaches its
            rightful audience. Together, we'll scale the mountain of
            storytelling, leaving a trail of inspiration for others to follow.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-amber-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mission</h2>
          <p className="text-lg text-gray-700">
            To empower authors and content creators by providing exceptional
            publishing, design, and marketing services that amplify their
            stories and help them connect with their audiences.
          </p>
        </div>
        <div className="bg-amber-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision</h2>
          <p className="text-lg text-gray-700">
            To be the leading platform for storytellers, inspiring creativity
            and success through seamless publishing solutions and personalized
            support.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 bg-amber-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in creating something extraordinary. Let's bring your story to
          life together.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
