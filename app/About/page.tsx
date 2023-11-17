"use client";
import React from "react";
import Header from "../header";
import Typer from "../typer";

const page = () => {
  return (
    <div className="w-Screen pt-[13rem]  bg-gray-900  h-[100vh] max-h-max text-black">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          About
        </p>
        <p className=" font-manrope text-sky-100 animate-trans-right">
          About (M’I’E)
        </p>
      </div>
      <div className="text-purple-500 p-5  md:text-3xl">
        <Typer
          words={[
            "Greetings, Menyaga Enyo Israel is my name, a self taught and result driven developer, skilled in creating and implementing eye catching, functional and user friendly web applications.As a Distinction gradute in Mathematicts And Education from Prince Abubakar Audu University, Kogi State, Nigeria, I've been exposed to the diversities in tech space and have my knowledge expanded, especailly as far as the tech space is concerned. With my relentless passion towards problem-solving and making things work, I have been able to stay updated with the latest trends in the web technology space.I am current seeking for a fast paced environment where I can deliver at a high quality my skill set and up my game, and the same where hardwork is handsomely rewarded.",
          ]}
          loop={1}
          typeSpeed={4}
        />
      </div>
    </div>
  );
};

export default page;
