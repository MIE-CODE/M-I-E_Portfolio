"use client";
import Image from "next/image";
import Header from "./header";
import Main from "./main";
import Background from "./Background";

export default function Home() {
  return (
    <>
      <main className="w-Screen font-test  bg-gray-900 h-[100vh] ">
        <Header />
        <Main />
      </main>
    </>
  );
}
