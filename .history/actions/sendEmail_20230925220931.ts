"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APT_KEY);

const validateString=(value:unknown)=>{
    if (!message || typeof message !== "string") {
        return {
          error: "Invalid message",
        };
      }
}
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");




  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "shigure_desu@icloud.com",
    subject: "Message from contact form",
    reply_to:senderEmail
    text: message,
  });
};
