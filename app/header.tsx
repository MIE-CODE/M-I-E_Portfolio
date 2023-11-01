import Image from "next/image";
import React from "react";
import menu from "../public/menu.svg";
import Typer from "./typer";

const header = () => {
  return (
    <div className="flex w-full justify-between items-center py-[2rem] px-[2rem]">
      <div className=" font-extrabold font-mono text-blue-200 text-4xl">
        {" "}
        <span className="text-blue-400 font-extrabold">I</span>
        srael.
      </div>
      <nav className="hidden lg:block ml-auto">
        <ul className="flex gap-10 font-mono font-bold xl:gap-20 text-2xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className=" bg-slate-400 rounded ">
        <Image src={menu} alt="menu" className="lg:hidden h-[40px] w-[40px]" />
      </div>
    </div>
  );
};

export default header;
