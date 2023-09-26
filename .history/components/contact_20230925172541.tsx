import React from 'react'

export default function contact() {
    return <section id="contact">
        Contact me
        <p>Please contact me directly at <a
         className='underline' href='mailto:example@gmail.com'>shigure_desu@icloud.com</a>{""}or through this form</p>
         <form>
            <input type='email'/>
            <textarea/>
            <button type="submit "></button>
         </form>
    </section>
}
