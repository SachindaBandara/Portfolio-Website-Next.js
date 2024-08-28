"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { delay, motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm passionate about building exceptional user experiences by weaving
        together the power of frontend development. I'm constantly expanding my
        knowledge of UI & UX, with the goal of creating seamless interfaces that
        are both functional and aesthetically pleasing.
      </p>

      <p>
        I thrive on innovation and am always eager to learn about the latest
        advancements in technology and design trends.
      </p>
    </motion.section>
  );
}
