import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

export default function Skills() {
    return (
        <section className='mb-28 max-w-[]'>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul>
                {
                    skillsData.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))
                }
            </ul>
        </section>
    )
}
