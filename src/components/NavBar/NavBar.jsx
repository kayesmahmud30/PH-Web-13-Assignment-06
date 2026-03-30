import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className=" common-w flex justify-between items-center mx-auto p-7">
      
      <h1 className="text-3xl font-bold bg-linear-to-r to-[#9514FA] from-[#4F39F6] bg-clip-text text-transparent">
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

      <div className="flex justify-center items-center gap-6">
        <LuShoppingCart className="text-3xl" />
        <button className="text-[20px] font-semibold">Login</button>
        <button className="btn bg-linear-to-r to-[#9514FA] from-[#4F39F6] rounded-full p-6 text-white font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
