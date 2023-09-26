"use client"
import { motion } from 'framer-motion'
import React from 'react'

export default function SectionDivider() {
    return (
        <motion.div className='bg-gray-200 my-24 h-16 w-1 
        rounded-full hidden sm:block'
        initial={{opacity:0,y}}
        animate={{scale:1}}
        >

        </motion.div>
    )
}
