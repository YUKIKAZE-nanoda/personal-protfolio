import React, { useState } from 'react'
import { BsSun } from 'react-icons/bs'
type Theme="light"|"dark"
export default function ThemeSwitch() {

    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
        }
    }

    return (
        <button
            className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem]
        bg-opacity-80 backdrop-blur-[0.5] border border-white border-opacity-40
        shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
        active:scale-105 transition-all
        '
        onClick={}
        >
            <BsSun />
        </button>
    )
}
