import Image from "next/image";
import React from "react";
import react from "../public/reactjs.png";
import Html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import Ts from "../public/Typescript.jpeg";
import astro from "../public/Astro.png";
import nextjs from "../public/Next_js.jpeg";
import tailwind from "../public/Taiwind.png";
import firebase from "../public/Firebase.png";

const card = () => {
  const items = [
    {
      src: Html,
      name: "HTML",
      fit: "object-cover",
    },
    {
      src: css,
      name: "CSS",
      fit: "object-cover",
    },
    {
      src: js,
      name: "JAVASCRIPT",
      fit: "object-cover",
    },
    {
      src: Ts,
      name: "TYPESCRIPT",
      fit: "object-cotain",
    },
    {
      src: astro,
      name: "ASTRO",
      fit: "object-cotain",
    },
    {
      src: nextjs,
      name: "NEXTJS",
      fit: "object-cotain",
    },
    {
      src: tailwind,
      name: "TAILWIND CSS",
      fit: "object-cotain",
    },
    {
      src: firebase,
      name: "FIREBASE",
      fit: "object-cotain",
    },
  ];

  return (
    <main className="grid justify-center p-10 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 md:gap-20 gap-10 ">
      {items.map((item, index) => (
        <div key={index} className="w-[250px] h-[300px]">
          <div className="grid ">
            <div className="flex justify-center gap-10">
              <div className=" text-center  shadow-md shadow-slate-500/50 rounded-lg ">
                <Image
                  className={`w-[200px] h-[200px]  ${item.fit} rounded-lg`}
                  src={item.src}
                  alt="pics"
                />
                <p className="font-mono text-blue-200/50 text-2xl font-extrabold">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default card;
