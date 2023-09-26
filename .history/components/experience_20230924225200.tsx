import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { experiencesData } from '@/lib/data'

export default function Experience() {
  return <section id='experience'>
    <SectionHeading>
        My experience
    </SectionHeading>
    <VerticalTimeline>
       {
        experiencesData.
       }
    </VerticalTimeline>
  </section>
}
