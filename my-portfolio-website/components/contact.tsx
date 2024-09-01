"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmails";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();


  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-white -mt-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:jmsachindabandara@gmail.com">
          jmsachindabandara@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData)=> {
          await sendEmail(formData);
        }}
      >
        <input
          className="text-gray-950 h-14 px-4 rounded-lg borderBlack "
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="text-gray-950 h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
       <SubmitBtn/>
      </form>
    </motion.section>
  );
}
