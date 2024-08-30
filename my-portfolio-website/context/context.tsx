import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection:
}
const ActiveSectionContext = createContext<ActiveSectionContextType>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
  <ActiveSectionContext.Provider value={{
    activeSection,
    setActiveSection,
  }}>
    {children}
  </ActiveSectionContext.Provider>
  );
}
