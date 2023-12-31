import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <section>
        <SectionHeading>
            My Skills
        </SectionHeading>
        <ul>
            {
                skillsData.map((skill,index))
            }
        </ul>
    </section>
  )
}
