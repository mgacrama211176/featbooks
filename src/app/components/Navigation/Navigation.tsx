"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Heart, ShoppingCart, Menu } from "lucide-react";
import SearchComponent from "./SearchComponent";

// Separate navigation menu items into a constant
const NAVIGATION_MENU = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Bookstore", href: "/bookstore" },
  { name: "Contact Us", href: "/#contact" },
] as const;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col font-glacial-indifference px-4 py-8">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/featbooks.png"
            alt="logo"
            width={200}
            height={200}
            loading="eager"
            quality={100}
            priority
          />
        </Link>

        <div className="flex flex-row  justify-center">
          <div className=" lg:flex-row flex-col lg:justify-between lg:items-center lg:w-full hidden lg:block">
            {NAVIGATION_MENU.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="group relative px-2 lg:px-5 pt-2 hover:text-[#edc34a] uppercase tracking-wider text-lg"
              >
                {name}
                <span className="absolute bottom-[1px] left-0 w-0 h-[2px] bg-[#edc34a] transition-all duration-300 ease-out group-hover:w-16 lg:group-hover:w-full " />
              </Link>
            ))}
          </div>
        </div>

        {/* User Menu Section */}

        <div className=" items-center gap-4 hidden lg:flex">
          <SearchComponent />
          <Link href="/auth/login" className="flex items-center gap-2">
            <User className="text-gray-700" />
            Login/Register
          </Link>
        </div>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden hover:cursor-pointer">
          <Menu className="text-gray-700" onClick={toggleMenu} />
        </div>
      </div>

      {/* Navigation Menu */}
      <div
        className={`lg:hidden fixed z-50 top-0 right-0 bg-[#bcbcbc69] backdrop-blur-sm w-full md:w-1/3 h-full flex flex-col pt-8 pl-4 
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <span
          className="text-2xl font-bold text-gray-700 fixed right-4 top-4 hover:cursor-pointer"
          onClick={toggleMenu}
        >
          X
        </span>
        {NAVIGATION_MENU.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className="group relative px-2 lg:px-5 pt-2 hover:text-[#edc34a] uppercase tracking-wider w-36"
          >
            {name}
            <span className="absolute bottom-[1px] left-0 w-0 h-[2px] bg-[#edc34a] transition-all duration-300 ease-out group-hover:w-16 lg:group-hover:w-full " />
          </Link>
        ))}

        <div className="flex justify-start pt-6">
          <Link
            href="/auth/login"
            className="bg-[#edc34a] text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <User />
            Login/Register
          </Link>
        </div>
      </div>

      {/* <div
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
      </div> */}
    </nav>
  );
};

export default Navigation;
