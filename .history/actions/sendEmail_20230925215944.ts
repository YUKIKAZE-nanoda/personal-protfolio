"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APT_KEY);
export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("sendEmail"));
  console.log(formData.get("message"));

  resend.emails.send({
    from:'onboarding@resend.dev',
    to:'shigure_desu@icloud.com',
    sub
  })
};
