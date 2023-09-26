import { links } from '@/lib/data';

import React, { useState } from 'react'
import { createContext } from 'vm';
type SectionName = (typeof links)[number]["name"]
type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}
const ActiveSectionContext = createContext<ActiveSectionContextType|null>(null);
export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps
) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
    }}>
        {children}
    </ActiveSectionContext.Provider>
}
