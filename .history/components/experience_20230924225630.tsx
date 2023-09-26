import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '@/lib/data'

export default function Experience() {
    return <section id='experience'>
        <SectionHeading>
            My experience
        </SectionHeading>
        <VerticalTimeline>
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                    <VerticalTimelineElement key={index}>
                    </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}
