import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const modal = (props: { hideModal(): void }) => {
  return (
    <main className="fixed  w-[170px] h-screen   inset-0 left-auto bg-slate-500 lg:hidden  backdrop-blur-sm  ">
      <div className="grid ">
        <button onClick={props.hideModal} className="boder p-5">
          x
        </button>
        <Navbar
          className={"flex gap-10  font-bold xl:gap-20 text-2xl visible"}
        />

        <div className=" flex   shadow-2xl"> </div>
      </div>
    </main>
  );
};

export default modal;
