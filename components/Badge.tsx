import * as React from "react";

type Props = {
  children?: React.ReactNode
};

const Badge = ({ children }: Props) => (
  <span className="bg-yellow-100 bg-opacity-80 text-yellow-700 rounded-lg px-2 py-1 text-xs font-semibold text-nowrap">
    {children}
  </span>

);

export default Badge;
