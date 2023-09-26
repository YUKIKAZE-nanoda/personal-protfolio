"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APT_KEY);

const validateString=(value:unknown)=>{
    if (!value || typeof value !== "string") {
        return null;
      }
      return true;
}
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if(!validateString(senderEmail))


  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "shigure_desu@icloud.com",
    subject: "Message from contact form",
    reply_to:senderEmail
    text: message,
  });
};
