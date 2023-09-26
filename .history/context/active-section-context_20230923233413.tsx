import { links } from '@/lib/data';
import React, { useState } from 'react'
type SectionName = (typeof links)[number]["name"]
type ActiveSectionContextProviderProps={
    children:React.ReactNode;
}
export default function ActiveSectionContextProvider({
    children,
}:{
    ActiveSectionContextProviderProps
}) {
    const [activeSection, setActiveSection] = useState("Home");

    return children
}
