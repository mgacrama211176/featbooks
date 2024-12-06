import React from "react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="bg-[#edc34a] rounded-3xl p-8 space-y-8">
            <h2 className="text-3xl font-bold text-black">Get in touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Visit us</h3>
                <p className="text-sm">
                  Come say hello at our office HQ
                  <br />
                  67 Wateria Way, Croydon South VIC 3136 AU
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Chat to us</h3>
                <p className="text-sm">
                  Our friendly team is here to help.
                  <br />
                  <a
                    href="mailto:hello@featbooks.com"
                    className="hover:underline"
                  >
                    hello@featbooks.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Call us</h3>
                <p className="text-sm">
                  Mon-Fri from 8am to 5pm
                  <br />
                  <a href="tel:+1234567890" className="hover:underline">
                    (+123) 456-78-90
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Social media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-6">
            <form className="space-y-6 text-black">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg focus:border-[#edc34a] focus:ring-1 focus:ring-[#edc34a] transition-all outline-none resize-none"
                  placeholder="Tell us what we can help you with..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded border-gray-600 text-[#edc34a] focus:ring-[#edc34a]"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I'd like to receive more information about company. I
                  understand and agree to the{" "}
                  <a href="#" className="text-[#edc34a] hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#edc34a] hover:text-black transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
