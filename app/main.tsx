import React, { useState, useEffect } from "react";
import Typer from "./typer";
import Image from "next/image";
import frame from "../public/hero.png";

const Main = () => {
  const [pClass, setpClass] = useState(
    "transition  -translate-x-[500%] lg:-translate-x-[1500%] md:-translate-x-[550%] duration-1000 font-semibold text-xl "
  );

  useEffect(() => {
    setpClass("transition font-semibold duration-[1000ms] text-xl ");
  }, []);

  return (
    <div className="grid lg:flex p-10 gap-20 lg:gap-[10rem]  lg:justify-center  lg:items-center justify-center items-center ">
      <div className="grid gap-5 md:gap-10">
        <div className="flex justify-center">
          <p className={pClass}>
            <span className=" text-blue-100 font-bold text-3xl  md:text-5xl">
              Hi there, 🤖
            </span>{" "}
          </p>
        </div>
        <div className="grid md:gap-10">
          <p className=" animate-trans-right text-xl md:text-3xl font-semibold text-blue-200">
            my name is,
          </p>
          <p className="grid md:flex font-mono font-semibold text-2xl md:text-4xl text-purple-500">
            <span> Menyaga Israel Enyo </span> <span> (M’I’E) </span>{" "}
          </p>
        </div>
        <div className="flex gap-3 items-center ">
          <p className="flex gap-2  text-xl md:text-4xl font-semibold text-blue-200">
            I’m <span> a</span>
          </p>
          <div className="text-purple-500  md:text-3xl">
            <Typer
              words={[
                "Frontend Developer",
                "Programmer",
                "Trouble Shooter",
                "Software developer",
                "Music Lover",
              ]}
              loop={0}
            />
          </div>
        </div>
      </div>
      <Image className="lg:w-[40rem]" src={frame} alt="photo" />
    </div>
  );
};

export default Main;
