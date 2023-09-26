import React, { useState } from 'react'
type SectionNsame
export default function ActiveSectionContextProvider() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
        <div>active-section-context</div>
    )
}
