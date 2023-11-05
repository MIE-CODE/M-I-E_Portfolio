import React from "react";
import Header from "../header";
import Card from "../card";

const page = () => {
  return (
    <div className="  bg-gray-900   max-h-max ">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          TECH STACK
        </p>
        <p className="animate-trans-right font-manrope text-sky-100">
          The Technologies I can work with
        </p>
        <div className="grid justify-center items-center">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default page;
