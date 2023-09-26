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
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement>
                            <h3>{item.title}</h3>
                            <p>{item.location}</p>
                            <
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}
