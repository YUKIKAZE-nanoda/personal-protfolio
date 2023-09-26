"use server"
import {Resend} from 'resend'

const 
export const sendEmail=async(formData:FormData)=>{
    console.log("Running on server")
    console.log(formData.get("sendEmail"));
    console.log(formData.get("message"))
}