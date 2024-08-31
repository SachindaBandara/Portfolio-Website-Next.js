"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";

export default function Contact() {
  const { ref } = useSectionInView("Contact");


  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jmsachindabandara@gmail.com">
          jmsachindabandara@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={sendEmail}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all 
          group-hover:translate-x-1 
          group-hover:translate-y-1
          focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105"
          />
        </button>
      </form>
    </motion.section>
  );
}
