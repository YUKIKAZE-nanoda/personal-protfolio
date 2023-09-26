"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Skills() {
    const { ref } = useSectionInView("Skills");
    const fadeInAnimationVariants={
        initial:{
            opacity:0,
            y:100
        },
        animate:{
            opacity:1,
            y:0,
            trans
        },
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
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once:true,
                        }}
                        className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'  >{skill}</motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
