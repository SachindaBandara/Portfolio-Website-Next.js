"use client";

import React from "react";
import Image from "next/image";
import Profile from "@/public/profile pic.jpg";
import { motion } from "framer-motion";

export default function intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Profile}
              alt="Sachinda Bandara"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Sachinda Bandara.</span> I'm a{" "}
        <span className="font-bold">UI & UX Designer and Frontend Developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        creating <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </p>
    </section>
  );
}
