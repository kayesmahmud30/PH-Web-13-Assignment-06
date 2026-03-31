import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  const [menuStatus, setMenuStatus] = useState(true);

  const menuHandler = (currentStatus) => {
    setMenuStatus(currentStatus);
  };

  return (
    <nav className="common-w flex md:justify-around justify-between items-center mx-auto md:py-7 p-3 relative">
      <div className="flex items-center justify-between">
        <div
          onClick={() => {
            menuHandler(!menuStatus);
          }}
          className="mr-4 text-4xl md:hidden"
        >
          {menuStatus ? <IoMenu /> : <IoClose />}
        </div>

        <ul
          className={`mini-text md:hidden inline bg-[#2020b259] border border-blue-500 py-8 px-10 rounded-md absolute ${menuStatus ? "-left-100" : "left-0"} top-17 duration-400 `}
        >
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
          <li className="text-[20px] font-semibold">
            <a href="#">Login</a>
          </li>
          <li className="text-[20px] font-semibold">
            <a href="#">Cart</a>
          </li>
        </ul>

        <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r to-[#9514FA] from-[#4F39F6] bg-clip-text text-transparent">
          DigiTools
        </h1>
      </div>

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

      <div className="flex justify-center items-center md:gap-6 gap-1">
        <button className=" hidden md:inline text-2xl md:text-3xl">
          <LuShoppingCart />
        </button>
        <button className="md:inline hidden text-[20px] mx-1 md:mx-auto font-semibold">
          Login
        </button>
        <button className="btn bg-linear-to-r to-[#9514FA] from-[#4F39F6] rounded-full text-white font-semibold ">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
