import React, { useState, useEffect } from "react";
import Link from "next/link";
import close from "../public/close.svg";
import Image from "next/image";

const Navbar = (props: {
  className: string;
  onClick: () => unknown;
  show: boolean;
}) => {
  return (
    <nav
      className={`top-0 lg:static ${
        props.show ? "" : "hidden"
      } fixed right-0 h-[100%] md:w-[20rem] lg:w-auto z-10  bg-gray-800/100 lg:bg-transparent text-sky-400  lg:block ml-auto`}
    >
      <div className=" flex mt-10 lg:mt-0  justify-center items-center ">
        <button
          onClick={props.onClick}
          className=" after:bg-slate-600 bg-slate-950/40 lg:hidden rounded"
        >
          <Image src={close} alt="close" />
        </button>
      </div>
      <ul className={`${props.className} `}>
        <Link href="/">
          <li className="flex transition-shadow  items-center lg:flex lg:justify-center lg:items-center border-sky-200 border p-1 lg:p-2 w-40 lg:w-fit rounded-lg hover:text-[#483285] hover:bg-sky-400/50 ">
            <p>Home</p>
            <svg
              className=" fill-sky-400 "
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </li>
        </Link>
        <Link href="/About">
          <li className="flex lg:p-2 w-40  lg:w-fit items-center lg:flex lg:justify-center lg:items-center border-sky-200 border p-2 rounded-lg hover:text-[#483285] hover:bg-sky-400/50 ">
            <p>About</p>
            <svg
              className=" fill-sky-400 "
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
          </li>
        </Link>
        <Link href="/techStack">
          <li className="flex lg:p-2 w-fit lg:w-fit whitespace-nowrap  items-center lg:flex lg:justify-center lg:items-center border-sky-200 border p-2 rounded-lg hover:text-[#483285] hover:bg-sky-400/50 ">
            <p>Tech Stack</p>
            <svg
              className=" fill-sky-400 "
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M240-400v80h-80q-33 0-56.5-23.5T80-400v-400q0-33 23.5-56.5T160-880h400q33 0 56.5 23.5T640-800v80h-80v-80H160v400h80ZM400-80q-33 0-56.5-23.5T320-160v-400q0-33 23.5-56.5T400-640h400q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400Zm0-80h400v-400H400v400Zm200-200Z" />
            </svg>
          </li>
        </Link>
        <Link href="/Projects">
          <li className="flex lg:p-2 w-40 lg:w-fit  items-center lg:flex lg:justify-center lg:items-center border-sky-200 border p-2 rounded-lg hover:text-[#483285] hover:bg-sky-400/50 ">
            {" "}
            <p>Projects</p>
            <svg
              className=" fill-sky-400 "
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-400q17 0 28.5-11.5T320-440q0-17-11.5-28.5T280-480q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-160q17 0 28.5-11.5T320-600q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600q0 17 11.5 28.5T280-560Zm80 160h360v-80H360v80Zm0-160h360v-80H360v80Zm-40 440v-80H160q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z" />
            </svg>
          </li>
        </Link>
        <Link href="/contacts">
          <li className="flex lg:p-2 w-40 lg:w-fit  items-center lg:flex lg:justify-center lg:items-center border-sky-200 border p-2 rounded-lg hover:text-[#483285] hover:bg-sky-400/50 ">
            <p>Contacts</p>
            <svg
              className=" fill-sky-400 "
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" />
            </svg>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
