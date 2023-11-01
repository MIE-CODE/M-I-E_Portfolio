import React from "react";
import Typer from "./typer";
import Image from "next/image";
import razer from "../public/keyboard.jpeg";

const main = () => {
  return (
    <div className="flex  justify-center ">
      <div>
        <div className=" w-[200px] h-[200px] border-[#03e9f4] border-[10px] rounded-xl ">
          {" "}
          hi i am israel <Typer />
        </div>
        <Image
          className="w-[200px] h-[200px]  opacity-1"
          src={razer}
          alt="razer"
        />
      </div>
    </div>
  );
};

export default main;
