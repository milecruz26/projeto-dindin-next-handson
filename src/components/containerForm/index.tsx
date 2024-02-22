import React from "react";

interface ContainerForm extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string;
  children: React.ReactElement[];
}

export default function ContainerForm({
  title,
  children,
  ...rest
}: ContainerForm) {
  return (
    <div className="flex flex-col justify-center  lg:px-8 bg-white w-[513px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-purple">
          {title}
        </h2>
      </div>
      <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="flex flex-col gap-4 my-2" action="#" method="POST" {...rest}>
          {children}
        </form>
      </div>
    </div>
  );
}
