"use client";
import Image from "next/image";
import React from "react";
import menu from "../public/menu.svg";
import Navbar from "./Navbar";
import Modal from "./modal";
import { useEffect, useState } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex font-test w-full justify-between items-center py-[2rem] px-[2rem] border-b-4 border-gray-400">
        {showModal && <Modal hideModal={() => setShowModal(false)} />}
        <div className=" font-extrabold  text-blue-200 text-4xl">
          {" "}
          <span className="text-blue-400 relative  font-extrabold">
            {" "}
            <span className=" absolute">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            </span>
            I
          </span>
          srael.
        </div>
        <Navbar className="flex gap-10  font-bold xl:gap-20 text-2xl" />
        <div className=" bg-slate-400 rounded ">
          <Image
            onClick={() => {
              setShowModal(true);
            }}
            src={menu}
            alt="menu"
            className="lg:hidden h-[40px] w-[40px]"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
