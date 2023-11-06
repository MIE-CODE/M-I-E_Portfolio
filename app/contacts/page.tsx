import React from "react";
import Header from "../header";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-Screen  bg-gray-900 h-[100vh]">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          LET’S CONNECT ON
        </p>
        <p className="animate-trans-right font-manrope text-sky-100">
          Connect With (M’I’E)
        </p>
        <div className="grid justify-center gap-10 items-center pt-10">
          <Link
            href={"#"}
            className="border w-[15rem] h-12 bg-gradient-to-r from-slate-600 to-slate-400"
          >
            <p>Linkden</p>
          </Link>
          <Link
            href={"#"}
            className="border w-[15rem] h-12 bg-gradient-to-r from-slate-600 to-slate-400"
          >
            <p>Linkden</p>
          </Link>
          <Link
            href={"#"}
            className="border w-[15rem] h-12 bg-gradient-to-r from-slate-600 to-slate-400"
          >
            <p>Linkden</p>
          </Link>
          <Link
            href={"#"}
            className="border w-[15rem] h-12 bg-gradient-to-r from-slate-600 to-slate-400"
          >
            <p>Linkden</p>
          </Link>
          <Link
            href={"#"}
            className="border w-[15rem] h-12 bg-gradient-to-r from-slate-600 to-slate-400"
          >
            <p>Linkden</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
