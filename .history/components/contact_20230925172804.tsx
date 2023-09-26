import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
    return <section id="contact" className=''>
        Contact me
        <p>Please contact me directly at <a
            className='underline' href='mailto:example@gmail.com'>shigure_desu@icloud.com</a>{""}or through this form</p>
        <form>
            <input type='email' />
            <textarea typeof='submit' />
            <button type="submit">Submit <FaPaperPlane />{""}</button>
        </form>
    </section>
}
