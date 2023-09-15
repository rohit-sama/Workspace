"use client";
import Image from "next/image";
import favicon from "./favicon.ico";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between m-5">
        <Image alt="rohit" width={50} height={50} src={favicon}></Image>
        <Link href = '/login'><button  className="black_btn">LOGIN</button> </Link>  
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-black text-center">
            Boost Productivity with Workspace
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">
              Your Ultimate Tool
            </span>
          </h1>
          <p className="desc text-center">
            Workspace: Your Essential Productivity Hub for Seamless Sharing,
            Task Management, Chat, and Powerful Editing Tools
          </p>
          <motion.div
          className="flex items-center justify-center"
            animate={{ x: 50 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <button className="outline_btn text-center mr-20 mt-4 flex">
              Join Now
            </button>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}
