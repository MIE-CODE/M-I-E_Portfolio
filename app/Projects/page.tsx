"use client";
import React from "react";
import Header from "../header";
import Link from "next/link";

const page = () => {
  const projects = [
    {
      GithubLink: "df",
      liveLink: "df",
    },
    {
      GithubLink: "df",
      liveLink: "df",
    },
    {
      GithubLink: "df",
      liveLink: "df",
    },
  ];
  return (
    <div className="w-Screen  bg-gray-900 h-[100vh] max-h-max ">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          My Projects
        </p>
        <p className="animate-trans-right font-manrope text-sky-100">
          (M’I’E) Projects
        </p>
        <div className="grid  gap-10 justify-center items-center   md:grid-cols-2 lg:grid-cols-3 mt-10  text-4xl font-extrabold text-blue-700">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex justify-center items-center gap-1 w-[250px] h-[300px] shadow-slate-500/50 rounded-lg shadow-md">
                <div className="text-sm grid gap-5  ">
                  <Link
                    href={project.GithubLink}
                    className="w-max h-max hover:bg-slate-50/5  p-2 flex justify-center items-center shadow-slate-500/50 rounded-lg shadow-md"
                  >
                    Github
                  </Link>
                  <Link
                    href={project.GithubLink}
                    className=" w-max h-max p-2 flex justify-center items-center shadow-slate-500/50 rounded-lg shadow-md"
                  >
                    Live
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
