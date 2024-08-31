"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} id="contact" className="mb-28 w-[min(100%,38rem)] scroll-mt-28 sm:mb-40">
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jmsachindabandara@gmail.com">
          jmsachindabandara@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10">
        <input
          className="h-14 rounded-lg borderBlack"
          type="email"
        />
        <textarea className="h-52 my-3 rounded-lg borderBlack"/>
        <button type="submit">
          Submit <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}
