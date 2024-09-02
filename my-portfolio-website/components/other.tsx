"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { otherActivityData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Other() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="other"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative" /* Added 'relative' position */
    >
      <SectionHeading>Extra Curricular Activities</SectionHeading>
      <VerticalTimeline lineColor="">
        {otherActivityData.map((item, index) => (
          <React.Fragment key={index}>
          <VerticalTimelineElement
            visible={true}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.5rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.6rem solid #ffffff",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "black",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-bold capitalize text-gray-950">{item.title}</h3>
            <p className="font-normal  text-gray-900 !mt-0">{item.subTitle}</p>
            <p className="!mt-1 !font-normal text-xs  text-gray-800 ">
              {item.description}
            </p>
          </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      
    </section>
  );
}
