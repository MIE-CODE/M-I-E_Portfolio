"use client";
import React from "react";
import Header from "../header";
import Typer from "../typer";

const page = () => {
  return (
    <div className="w-Screen  bg-gray-900 h-[100vh]">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          My projects
        </p>
        <p className="animate-trans-right font-manrope text-sky-100">
          (M’I’E) Projects
        </p>
        <div className="flex justify-center items-center text-4xl font-extrabold text-blue-700">
          <Typer words={["Loding..."]} loop={0} typeSpeed={4} />
        </div>
        {/* <div className="grid justify-center gap-10 md:gap-14 lg:gap-20  items-center pt-10">
          <Link
            href={"https://linkedin.com/in/menyaga-enyo-israel-648401228"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">Linkden</p>
            <Image className="w-5 h-5" src={linkden} alt="linkden" />
          </Link>
          <Link
            href={"https://github.com/MIE-CODE"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">GITHUB</p>
            <Image className="w-5 h-5" src={github} alt="github" />
          </Link>
          <Link
            href={"https://x.com/M_I_E_CODE?t=EAhq3CpZgmgWEPLt6lrQiA&s=09"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">Twitter</p>
            <Image className="w-5 h-5" src={twitter} alt="twitter" />
          </Link>
          <Link
            href={"mailto:israelvictor126@gmail.com"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">Email</p>
            <Image className="w-5 h-5" src={email} alt="email" />
          </Link>
          <Link
            href={"/cv.pdf"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">MY CV</p>
            <Image className="w-5 h-5" src={download} alt="cv" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default page;
