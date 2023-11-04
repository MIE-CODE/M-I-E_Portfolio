import React, { useState, useEffect } from "react";
import Typer from "./typer";
import Image from "next/image";
import razer from "../public/keyboard.jpeg";

const Main = () => {
  const [pClass, setpClass] = useState(
    "transition  -translate-x-[500%] lg:-translate-x-[1500%] md:-translate-x-[550%] duration-1000 font-semibold text-xl "
  );

  useEffect(() => {
    setpClass("transition font-semibold duration-[1000ms] text-xl ");
  }, []);

  return (
    <div className="flex pt-10  justify-center items-center ">
      <div className="grid gap-5">
        <div className="flex justify-center">
          <p className={pClass}>
            <span className=" text-blue-100 font-bold text-3xl">
              Hi there, 🤖
            </span>{" "}
          </p>
        </div>
        <div>
          <p className=" animate-trans-right text-xl font-semibold text-blue-200">
            my name is,
          </p>
          <p className=" font-mono font-semibold text-2xl text-purple-500">
            Menyaga Enyo Israel <br />
            (M’I’E){" "}
          </p>
        </div>
        <div className="flex gap-3 items-center ">
          <p className="flex gap-2  text-xl font-semibold text-blue-200">
            I’m <span> a</span>
          </p>
          <Typer
            words={["Frontend Developer", "Programmer", "Problem Fixer"]}
            loop={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
