"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";

// Separate navigation menu items into a constant
const NAVIGATION_MENU = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/" },
  { name: "Services", href: "/" },
  { name: "Bookstore", href: "/" },
  { name: "Testimonials", href: "/" },
  { name: "Contact Us", href: "/" },
] as const;

// Separate user menu items into a constant
const USER_MENU = [
  { name: "Login/Register", href: "/", icon: User },
  { name: "Wishlist", href: "/", icon: Heart },
  { name: "Cart", href: "/", icon: ShoppingCart },
] as const;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col font-glacial-indifference">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/featbooks.png"
            alt="logo"
            width={300}
            height={300}
            loading="eager"
            priority
          />
        </Link>

        {/* Search Section */}
        <div className="relative flex items-center gap-4">
          <Search className="absolute left-2 text-gray-700" />
          <input
            type="text"
            placeholder="Search Feat Books"
            className="border border-gray-300 rounded-md p-2 pl-10 w-96"
          />
        </div>

        {/* User Menu Section */}
        <div className=" items-center gap-4 hidden lg:flex">
          {USER_MENU.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} className="flex items-center gap-2">
              <Icon className="text-gray-700" />
              {name}
            </Link>
          ))}
        </div>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden hover:cursor-pointer">
          <Menu className="text-gray-700" onClick={toggleMenu} />
        </div>
      </div>

      <hr className="w-full border-gray-700" />

      {/* Navigation Menu */}
      <div
        className={`lg:flex-row lg:flex ${
          isMenuOpen
            ? "flex flex-col fixed top-0 left-0 w-full bg-white z-50"
            : "hidden"
        } justify-between  font-bold text-lg`}
      >
        <div
          className="flex justify-end lg:hidden p-4 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <span>X</span>
        </div>

        <div className="flex flex-row  justify-center  w-full">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:w-full">
            {NAVIGATION_MENU.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="group relative px-5 pt-2 hover:text-[#edc34a] uppercase tracking-wider"
              >
                {name}
                <span className="absolute bottom-[1px] left-0 w-0 h-[2px] bg-[#edc34a] transition-all duration-300 ease-out group-hover:w-16 lg:group-hover:w-full " />
              </Link>
            ))}
          </div>

          {/* User Menu for Mobile */}
          <div className="flex flex-col lg:hidden">
            {USER_MENU.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="flex items-center gap-2 px-5 py-3"
              >
                <Icon className="text-gray-700" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
