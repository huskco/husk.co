import * as React from "react";

type Props = {
  children?: React.ReactNode
};

const Badge = ({ children }: Props) => (
  <span className="border-2 border-neutral-400 bg-transparent text-neutral-500 rounded-lg px-2 py-1 text-sm">
    {children}
  </span>

);

export default Badge;
