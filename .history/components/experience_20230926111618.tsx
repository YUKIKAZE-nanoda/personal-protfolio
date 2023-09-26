"use client"
import React, { useContext } from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { experiencesData } from '@/lib/data'
import "react-vertical-timeline-component/style.min.css"
import { useSectionInView } from '@/lib/hooks'
import { useTheme } from '@/context/theme-context'

export default function Experience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();
    return <section
        ref={ref}
        id='experience'
        className='scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>
            My experience
        </SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement contentStyle={{
                            background: theme === "light" ? "#f3f4f6" : "rgba(255,255,0.05)",
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
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
}
