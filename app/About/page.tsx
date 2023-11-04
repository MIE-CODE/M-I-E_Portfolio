"use client";
import React from "react";
import Header from "../header";
import Typer from "../typer";

const page = () => {
  return (
    <div className="w-Screen  bg-gray-900 h-[100vh] text-black">
      <Header />
      about
      <Typer
        words={[
          "Greetings, Emmanuel Amoo is my name, a self taught and result driven developer, skilled in creating and implementing eye catching, functional and user friendly web applications.As a Distinction gradute in Computer Engineering from Federal Polytechnic Ede,Osun State, I've been exposed to the diversities in tech space and have my knowledge expanded, especailly as far as the tech space is concerned. With my relentless passion towards problem-solving and making things work, I have been able to stay updated with the latest trends in the web technology space.I am current seeking for a fast paced environment where I can deliver at a high quality my skill set and up my game, and the same where hardwork is handsomely rewarded.",
        ]}
        loop={1}
        typeSpeed={4}
      />
    </div>
  );
};

export default page;
