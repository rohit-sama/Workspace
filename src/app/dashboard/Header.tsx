"use client";
import React, { useState, useEffect } from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex-col flex md:flex-row m-8 sm:flex-col justify-center -ml-[1px] font-bold p-2 items-center mt-10">
        <div className="text-[#8c8d83] flex gap-4 font-mono text-[25px]">
          <FontAwesomeIcon icon={faCaretRight} className="mt-2" height={25} />
          @WorkSpace<span className="blinking-cursor -m-2 -ml-5">|</span>
        </div>
        {isMobile && (
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="lg:hidden text-sm text-purple-400 font-semibold rounded-full "
          >
            ./Navbar
          </button>
        )}
      </div>

      {isMobile ? (
        <div
          className={`overflow-auto \
                      z-30 \
                      h-5/6 \
                      w-10/12 \
                      mx-auto \
                      top-1/2 \
                      left-1/2 \
                      transform -translate-x-1/2 -translate-y-1/2 \
                      p-6 \
                      border \
                      rounded-xl \
                      bg-[#151719] \
                      text-left \
                      fixed \
                      ${toggle ? "visible" : "invisible"}`}
        >
          <div className="grid text-[#8c8d83] gap-3 -m-2 justify-center text-left font-bold items-center sm:flex sm:flex-row sm:gap-5">
            <Link
              href="/dashboard/texteditor"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./texteditor
            </Link>
            <Link
              href="/dashboard/draw"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./draw
            </Link>
            <Link
              href="/dashboard/call"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./call
            </Link>
            <Link
              href="/dashboard/chat"
              onClick={() => {
                setToggle(false);
              }}
            >
              ./chat
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid text-[#8c8d83] gap-3 -m-2 justify-center font-bold items-center sm:flex sm:flex-row sm:gap-5">
          <Link href="/dashboard/texteditor">./texteditor</Link>
          <Link href="/dashboard/draw">./draw</Link>
          <Link href="/dashboard/call">./call</Link>
          <Link href="/dashboard/chat">./chat</Link>
        </div>
      )}
    </>
  );
};

export default Header;