import React, { Children } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl font-bold capitalize mb-9 text-center">
      {children}
    </h2>
  );
}
