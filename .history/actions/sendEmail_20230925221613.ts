"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APT_KEY);

const validateString=(value:unknown,maxLength:number)=>{
    if (!value || typeof value !== "string" ||value.length) {
        return null;
      }
      return true;
}
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  //simple server-side validation
  if(!validateString(senderEmail,500)){
    return {
        error:"Invalid sender email"
    }
  }

  if (!validateString(message,5000)){
    return{
        errror:"Invalid message"
    }
  }


  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "shigure_desu@icloud.com",
    subject: "Message from contact form",
    reply_to:senderEmail
    text: message,
  });
};
