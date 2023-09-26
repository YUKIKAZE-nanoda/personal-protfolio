import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

export default function Skills() {
    return (
        <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex flex-wrap '>
                {
                    skillsData.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                }
            </ul>
        </section>
    )
}
