import React from "react";
import Header from "../header";
import Link from "next/link";
import Image from "next/image";
import linkden from "../../public/linkedin.png";
import github from "../../public/github.png";
import twitter from "../../public/twitter.png";
import email from "../../public/mail.png";
import download from "../../public/download.svg";

const page = () => {
  return (
    <div className="w-Screen pt-[13rem] bg-gray-900 max-h-max">
      <Header />
      <div className="p-5 pb-0">
        <p className=" font-mono text-blue-200/50 text-4xl font-extrabold">
          LET’S CONNECT ON
        </p>
        <p className="animate-trans-right font-manrope text-sky-100">
          Connect With (M’I’E)
        </p>
        <div className="grid justify-center gap-10 md:gap-14 lg:gap-20  items-center pt-10 pb-10">
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
            href={"/resume.pdf"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">MY CV</p>
            <Image className="w-5 h-5" src={download} alt="cv" />
          </Link>
          <Link
            href={"/HNGX_certificate.pdf"}
            className="flex justify-between px-3 items-center  w-[15rem] md:w-[40rem] md:h-12 lg:w-[50rem] xl:w-[70rem] rounded-lg h-10 bg-gradient-to-r from-gray-600 to-gray-400"
          >
            <p className=" font-bold font-test text-sky-50">
              Internship certificate
            </p>
            <Image className="w-5 h-5" src={download} alt="cv" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
