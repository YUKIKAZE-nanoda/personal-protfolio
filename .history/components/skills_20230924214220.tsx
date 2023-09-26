"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const fadeInAnimationsVariants={
        initial
    }
    return (
        <section ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                        key={index} 
                        
                        className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'  >{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
