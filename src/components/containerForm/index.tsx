import React from "react";

type ContainerForm = {
  title: string;
  children: React.ReactElement[];
};

export default function ContainerForm({ title, children }: ContainerForm) {
  return (
    <div className="flex flex-1 flex-col justify-center  lg:px-8 bg-white w-[513px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-medium leading-9 tracking-tight text-purple">
          {title}
        </h2>
      </div>

      <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
          {children}
        </form>
      </div>
    </div>
  );
}
