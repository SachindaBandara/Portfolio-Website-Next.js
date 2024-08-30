"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView;
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-5 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
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
