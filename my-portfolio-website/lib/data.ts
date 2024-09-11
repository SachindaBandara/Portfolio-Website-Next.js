import React from "react";
import { LuGraduationCap, LuSchool, LuSchool2, LuScrollText } from "react-icons/lu";
import agropulse from "@/public/agropulse.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [

  {
    title: "Undergraduate",
    location: "Sabaragamuwa University of Sri Lanka",
    description:
      "I am following degree in BSc(Hons)Computing and Information Sysytem at Sabaragamuwa University of Sri Lanka.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "GCE Advanced Level Examination",
    location: "R/Kuruwita Central College",
    description:
      "I passed the advanced level examination 2020.",
    icon: React.createElement(LuSchool2),
    date: "2018 - 2020",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "AgroPulse",
    description:
      "AgroPulse is an innovative pest management system designed to empower farmers with advanced pest identification and control with eco-friendly solutions.",
    tags: ["Figma","React", "Tailwind CSS", "Flask", "MongoDB", "Git"],
    imageUrl: agropulse,
  },
  {
    title: "LMS",
    description:
      "Learning Management System is designed to facilitate seamless communication, efficient information management, and an enriched learning environment for students and staff alike.",
    tags: ["Figma", "MERN", "Git",],
    imageUrl: rmtdevImg,
  },
  {
    title: "Deals.lk",
    description:
      "Deals.lk is a vibrant e-commerce platform designed to revolutionize the buying and selling wide range of vehicles in Sri Lanka.",
    tags: ["Figma", "React", "Tailwind CSS", "Firebase", "Git"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Python",
  "Java",
  "PHP",
  "Laravel",
  "Framer Motion",
] as const;


