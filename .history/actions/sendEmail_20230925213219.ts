"use server"
re_FF2k2RUY_M1hek7ZQzn5x27cKDvvLqoW8
export const sendEmail=async(formData:FormData)=>{
    console.log("Running on server")
    console.log(formData.get("sendEmail"));
    console.log(formData.get("message"))
}