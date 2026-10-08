import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode,
  title?: string
};

const Section = ({ children }: Props) => (
  <section className="max-w-5xl py-12 sm:py-24 mx-auto space-y-4">
    { children }
  </section>
);

export default Section;
