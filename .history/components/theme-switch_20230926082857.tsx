import React from 'react'
import { BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
    return (
        <button 
        className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem]
        bg-opacity-80 backdrop-blur-[0.5]
        '>
            <BsSun />
        </button>
    )
}
