"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '@/lib/data'
import "react-vertical-timeline-component/style.min.css"

export default function Experience() {
    return <section id='experience'>
        <SectionHeading>
            My experience
        </SectionHeading>
        <VerticalTimeline>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgab(0,0,0,0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #8ca3af",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-'>{item.location}</p>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}
