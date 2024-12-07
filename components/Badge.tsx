import * as React from "react";

type Props = {
  children?: React.ReactNode
};

const Badge = ({ children }: Props) => (
  <span className="bg-yellow-300 border border-yellow-400 bg-opacity-25 text-yellow-900 rounded-lg px-2 py-1 md:px-4 md:py-2 text-sm md:text-base text-nowrap">
    {children}
  </span>

);

export default Badge;
