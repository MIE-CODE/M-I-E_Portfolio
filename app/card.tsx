import Image from "next/image";
import React from "react";
import react from "../public/reactjs.png";
import Html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";

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
      src: react,
      name: "REACTJS",
      fit: "object-cotain",
    },
  ];

  return (
    <main className="grid md:grid-cols-3 xl:grid-cols-4  justify-between items-center md:items-center md:justify-between  gap-10 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="  grid justify-center items-center   w-[250px] h-[300px]"
        >
          <div className=" text-center  shadow-md shadow-slate-500/50 rounded-lg ">
            <Image
              className={`w-[200px] h-[200px]  ${item.fit} rounded-lg`}
              src={item.src}
              alt="pics"
            />
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default card;
