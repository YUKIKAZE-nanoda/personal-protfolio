import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './section-heading'

export default function Contact() {
    return <section id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700'>Please contact me directly at <a
            className='underline' href='mailto:example@gmail.com'>shigure_desu@icloud.com</a>{" "}or through this form</p>
        <form className='mt-10 flex flex-col '>
            <input type='email' className='h-14 rounded-lg  borderBlack  ' placeholder='Your email'/>
            <textarea typeof='submit' className='h-52 my-3 rounded-lg borderBlack p-4' placeholder='' />
            <button type="submit" className='group flex items-center justify-center gap-2 
            h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
             outline-none transition-all focus:scale-110 hover:scale-110 
             hover:bg-gray-950 active:scale-105'>Submit <FaPaperPlane className="text-xs opacity-70 transition-all 
             group-hover:translate-x-1 group-hover:-translate-y-1" />{""}</button>
        </form>
    </section>
}
