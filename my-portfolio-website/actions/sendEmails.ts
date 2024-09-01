"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utilities";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // server side validation

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    await resend.emails.send({
      from: "sachindabandara.dev",
      to: "jmsachindabandara@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,

      react: React.createElement( ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
      //react: <contactFormEmail message={message} senderEmail={senderEmail}/>

    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
