import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail as MailIcon } from "lucide-react";

import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="bg-[#edc34a] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Column */}
          <div className="space-y-4">
            <Link href="/" className="block w-72">
              <Image
                src="/logoBlack.png"
                alt="Feat Books"
                width={300}
                height={300}
                className="object-contain"
              />
            </Link>
            <p className="text-sm">
              For inquiries/concerns get in touch with us at
            </p>
            <a
              href="mailto:info@featbooks.com"
              className="flex items-center gap-2 text-sm hover:text-black/70 transition-colors"
            >
              <MailIcon size={16} />
              info@featbooks.com
            </a>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/books"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  href="/audiobooks"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Audiobooks
                </Link>
              </li>
              <li>
                <Link
                  href="/ebooks"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Ebooks
                </Link>
              </li>
              <li>
                <Link
                  href="/order-status"
                  className="text-sm hover:text-black/70 transition-colors"
                >
                  Order Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <NewsLetter />
        </div>
        <p className="text-sm mb-4 md:mb-0 text-center">
          FEAT BOOKS COPYRIGHT © {new Date().getFullYear()}. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
