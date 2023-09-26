import React, { useState } from 'react'
type SectionName=type
export default function ActiveSectionContextProvider() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <div>active-section-context</div>
    )
}
