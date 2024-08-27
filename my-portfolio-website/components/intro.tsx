"use client"

import React from "react";
import Image from "next/image";
import Profile from "@/public/profile pic.jpg";
import { motion } from "framer-motion";

export default function intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
          initial = {{ opacity: 0, scale: 0 }}
          animate = {{ opacity: 1, scale: 1 }}
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
    </section>
  );
}
