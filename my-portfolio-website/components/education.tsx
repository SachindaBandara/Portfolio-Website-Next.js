"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative" /* Added 'relative' position */
    >
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#020617",
                boxShadow: "none",
                border: "3px solid #f8fafc",
                textAlign: "left",
                padding: "1.5rem 3rem",

              }}
              contentArrowStyle={{
                borderRight: "0.6rem solid #f8fafc",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#020617",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="text-xl font-bold capitalize text-slate-50">
                {item.title}
              </h3>
              <p className="font-normal  text-slate-100 !mt-0">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-xs  text-slate-300 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
