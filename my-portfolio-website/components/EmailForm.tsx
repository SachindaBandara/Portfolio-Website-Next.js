"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import axios from "axios";
import SubmitBtn from "./submit-btn";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function EmailForm() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent page refresh

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    // Check if the entered email is the one you want to block
    if (email === "jmsachindabandara@gmail.com") {
      toast.error("You cannot enter this email address.");
      return;
    }

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_email: email,
        to_name: "Sachinda Bandara",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email.");
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] text-center scroll-mt-28 sm:mb-60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          jmsachindabandara@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="text-gray-950  bg-gray-100 h-14 px-4 rounded-lg border border-black/[0.1] "
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="text-gray-950 bg-gray-100 h-52 my-3 rounded-lg border border-black/[0.1] p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default EmailForm;
