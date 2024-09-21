import React from "react";
import logo from "../Assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <div className="mt-4 md:flex justify-between md:mt-16 bg-slate-100 p-2 ">
        <div className="text-white text-xl  flex justify-center mb-4">
          <img src={logo} class="h-12 cursor-pointer" alt="logo" />
        </div>

        <div className="email ">
          <p className=" flex justify-center font-mono">
            <span className=" font-bold">Contact us via Email: </span>
              prestigeproperty@gmail.com
          </p>
        </div>

        <div className="links">
          <ul class=" flex justify-center md:flex space-x-4 text-gray-500">
            <NavLink to="/">
              <li class="font-mono font-semibold tracking-wider hover:text-gray-500">
                HOME
              </li>
            </NavLink>

            <NavLink to="/about">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                ABOUT
              </li>
            </NavLink>

            <NavLink to="/services">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                SERVICE
              </li>
            </NavLink>

            <NavLink to="/contact">
              <li class=" font-mono font-semibold tracking-wider hover:text-gray-500">
                CONTACT
              </li>
            </NavLink>

          </ul>
        </div>
      </div>
      <p className="bg-slate-100 p-2 flex justify-center font-mono">All rights reserved prostigeproperties 2024</p>
    </div>
  );
}
