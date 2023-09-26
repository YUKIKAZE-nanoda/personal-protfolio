import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './section-heading'

export default function Contact() {
    return <section id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)]'>
        <SectionHeading>Contact Me</SectionHeading>
        <p className=''>Please contact me directly at <a
            className='underline' href='mailto:example@gmail.com'>shigure_desu@icloud.com</a>{" "}or through this form</p>
        <form>
            <input type='email' />
            <textarea typeof='submit' />
            <button type="submit">Submit <FaPaperPlane />{""}</button>
        </form>
    </section>
}
