import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="common-w flex justify-around items-center mx-auto py-7">
      <h1 className="text-xl md:text-3xl font-bold bg-linear-to-r to-[#9514FA] from-[#4F39F6] bg-clip-text text-transparent">
        DigiTools
      </h1>
      <ul className="hidden md:flex gap-8">
        <li className="text-[20px] font-semibold">
          <a href="#">Products</a>
        </li>
        <li className="text-[20px] font-semibold">
          <a href="#">Features</a>
        </li>
        <li className="text-[20px] font-semibold">
          <a href="#">Pricing</a>
        </li>
        <li className="text-[20px] font-semibold">
          <a href="#">Testimonials</a>
        </li>
        <li className="text-[20px] font-semibold">
          <a href="#">FAQ</a>
        </li>
      </ul>

      <div className="flex justify-center items-center md:gap-6">
        <button className="text-2xl md:text-3xl">
          <LuShoppingCart />
        </button>
        <button className="text-[20px] mx-1 md:mx-auto font-semibold">
          Login
        </button>
        <button className="md:btn bg-linear-to-r to-[#9514FA] from-[#4F39F6] rounded-full md:p-6 px-1.5 text-white font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
