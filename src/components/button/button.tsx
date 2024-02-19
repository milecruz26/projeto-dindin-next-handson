import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "submit" | "button";
}

export default function Button({text, type} : ButtonProps) {
  return <button type={type} className="bg-purple text-white py-3 rounded-md min-w-72 flex-0">{text}</button>;
}
