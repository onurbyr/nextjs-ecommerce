import React from "react";

interface DividerProps {
  color: string;
  size: string;
}

const Divider = ({ color, size }: DividerProps) => {
  return <div style={{ backgroundColor: color, height: size }}></div>;
};

export default Divider;
