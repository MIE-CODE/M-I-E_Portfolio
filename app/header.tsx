"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import menu from "../public/menu.svg";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  return (
    <>
      <div className="flex z-40 fixed top-0 left-0 right-0  bg-sky-950 font-test w-full justify-between items-center py-[2rem] px-[2rem] border-b-4 border-gray-400">
        <div className=" font-extrabold   text-blue-200 text-4xl">
          {" "}
          <span className="text-blue-400 relative  font-extrabold">
            {" "}
            <span className=" absolute">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </span>
          </span>
          Israel.
        </div>
        <Navbar
          show={navBar}
          onClick={() => {
            setNavBar(false);
          }}
          className="grid lg:flex gap-20 lg:gap-5 lg:text-xl items-center md:pl-5 p-5    pt-20 lg:pt-0 font-bold xl:gap-20 text-2xl"
        />
        <button
          onClick={() => {
            setNavBar(true);
          }}
          className=" bg-slate-400 rounded "
        >
          <Image
            src={menu}
            alt="menu"
            className="lg:hidden  h-[40px] w-[40px]"
          />
        </button>
      </div>
    </>
  );
};

export default Header;
