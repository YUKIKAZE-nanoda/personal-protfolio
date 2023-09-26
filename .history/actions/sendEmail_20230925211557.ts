const sendEmail=async(formData:FormData)=>{
    "use server"
    console.log("Running on server")
    console.log(formData.get("sendEmail"));
    console.log(formData.get("message"))
}