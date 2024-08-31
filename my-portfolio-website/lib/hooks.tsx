import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName){
    const { ref, inView } = useInView({
        threshold: 0.75,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("Home");
        }
      }, [inView, setActiveSection, timeOfLastClick]);

      return {
        ref
      }
}