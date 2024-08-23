"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Encryption = () => {
  return (
    <div className="flex flex-row w-full relative items-center min-h-screen justify-center h-full">
      <div className=" absolute top-0 h-auto w-auto Z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>
      <div className="flex flex-col absolute items-center  justify-center z-[20] h-auto w-auto translate-y-[-50px] ">
        <div className="flex flex-col items-center justify-center group  cursor-pointer h-auto w-auto">
          <Image
            src="/LockTop.png"
            alt="Lock"
            height={50}
            width={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="LockMain"
            height={50}
            width={50}
            className="z-10"
          />
        </div>
        <div className="welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className=" absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-xl font-medium text-center text-gray-300">
          Secure your data end-to-end encryption
        </div>
      </div>
      <div className="w-[80%] flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full "
          src="encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
