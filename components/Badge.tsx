import * as React from "react";

type Props = {
  children?: React.ReactNode
};

const Badge = ({ children }: Props) => (
  <span className="bg-stone-300 text-stone-700 font-medium rounded-lg px-2 py-1 md:px-3 text-xs md:text-sm text-nowrap">
    {children}
  </span>

);

export default Badge;
