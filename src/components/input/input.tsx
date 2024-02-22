import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  label: string;
}

export default function Input({
  id,
  name,
  type,
  autoComplete,
  label,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          className="w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...rest}
        />
      </div>
    </div>
  );
}
