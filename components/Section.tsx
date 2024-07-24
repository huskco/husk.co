import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode,
  title?: string
};

const Section = ({ children, title = "This is the default title" }: Props) => (
  <section className="max-w-4xl px-12 py-24 mx-auto">
    { children }
  </section>
);

export default Section;
