import React from "react";
import Header from "../header";
import Card from "../card";

const page = () => {
  return (
    <div className="w-Screen  bg-gray-900 h-screen ">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          TECH STACK
        </p>
        <p>The Technologies I can work with</p>
        <Card />
      </div>
    </div>
  );
};

export default page;
