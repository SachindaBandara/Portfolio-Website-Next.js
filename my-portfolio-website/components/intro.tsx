"use client";

import React from "react";
import Image from "next/image";
import Profile from "@/public/profile pic.jpg";
import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsBehance,
  BsDribbble,
  BsLinkedin,
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import TypeWrite from "./TypeWrite";

export default function intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
              width="210"
              height="210"
              quality="95"
              priority={true}
              className="h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-6 px-3 w-full text-7xl font-medium sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <TypeWrite />

        <div className="mt-[-0.55rem] text-center ">
          <span className="font-bold text-[84px]">Sachinda Bandara</span>{" "}
        </div>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3  flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href=""
          download
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/4 hover:text-gray-950"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/sachinda-bandara-2a9344248/"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none ocus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/4"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SachindaBandara"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/4"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.behance.net/sachindubandar/projects"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/4"
        >
          <BsBehance />
        </a>
        <a
          href="https://dribbble.com/Sachinda_Bandara"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none ocus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/4"
        >
          <BsDribbble />
        </a>
      </motion.div>
    </section>
  );
}
