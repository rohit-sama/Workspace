"use client";
import Image from "next/image";
import favicon from "./favicon.ico";
import { motion } from "framer-motion";
import { signIn, signOut } from "next-auth/react";
import { useContext } from "react";
import { UserContext } from "@/context/context";
import Link from "next/link";

export default function Home() {
  const { session } = useContext(UserContext);

  async function LoginWithGoogle() {
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.log("error logging in");
    }
  }

  async function SignoutWithGoogle() {
    try {
      await signOut();
    } catch (error) {
      console.log("error logging in");
    }
  }

  return (
    <>
      <div className="flex justify-between m-5">
        <Image alt="rohit" width={50} height={50} src={favicon}></Image>
        {session?.user ? (
          <button onClick={SignoutWithGoogle} className="black_btn">
            Sign out
          </button>
        ) : (
          <button onClick={LoginWithGoogle} className="black_btn">
            LOGIN
          </button>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[70vh] flex items-center justify-center"
      >
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-white text-center">
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
            animate={{ x: 60 }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            {session?.user?  ( <Link href='/dashboard'>
            <button className="outline_btn text-center mr-[6rem] mt-4 flex">
              Start Working 
            </button>
            </Link>) : 
            <button onClick={LoginWithGoogle}
            className="outline_btn text-center mr-[6rem] mt-4 flex"> 
            Login to Start
            </button>
            }
           
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}
