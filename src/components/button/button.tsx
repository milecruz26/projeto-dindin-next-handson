import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "submit" | "button";
  

}

export default function Button({text, type, ...rest} : ButtonProps) {
  return <button type={type} className="bg-purple text-white py-3 rounded-md  w-full" {...rest}>{text}</button>;
}
