"use client";

import { UserContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const Dashboard = () => {
  const { session } = useContext(UserContext);
  return (
    <div>
      {session && (
        <div className="flex justify-center gap-6 items-center h-[70vh]">
          <div>
            <Image
              alt="Profilepic"
              className="rounded-full"
              width={200}
              height={200}
              src={session?.user.image}
            ></Image>
          </div>
          <div>
            <div>Hey, <span className="green_gradient">{session?.user.name}</span> </div>
            <h1 className="head_text">Welcome Back</h1>
            <div className="blue_gradient">{session?.user.email}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
