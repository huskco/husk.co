import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Section = ({ children, title = "This is the default title" }: Props) => (
  <section className="max-w-4xl px-4 py-24 mx-auto">
    { children }
  </section>
);

export default Section;