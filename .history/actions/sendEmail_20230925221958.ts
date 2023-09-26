"use server";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
const resend = new Resend(process.env.RESEND_APT_KEY);


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


 tc
};
