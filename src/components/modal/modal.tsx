"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "../input/input";
import iconClose from "../../assets/close-icon.svg";
import Button from "../button/button";

export default function Modal({ click }: { click: boolean }) {
  // const handleSubmit = () => {};
  // const [click, setClick] = useState(true);
  return (
    <>
      {click && (
        <div className="w-full h-full z-10 bg-black bg-opacity-40 fixed top-0 left-0 ">
          <div className="flex  flex-col  lg:px-8 lg:py-12 gap-14 bg-white w-[611px] h-[670px] fixed left-40 top-20 translate-x-3/4 translate-y-1/5">
            <div className=" w-full flex justify-between items-center ">
              <h2 className="text-center text-4xl font-medium leading-9 tracking-tight text-purple ">
                Editar usuário
              </h2>
              <Image
                src={iconClose}
                alt="ícone de fechar"
                height={15}
                className="cursor-pointer"
              />
            </div>

            <div>
              <form className="space-y-6 flex flex-col justify-evenly  h-[500px]">
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="nome"
                  label="Nome"
                />
                <Input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  label="E-mail"
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  label="Senha"
                />
                <Input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="passwordConfirm"
                  label="Confirmar senha"
                />

                <div>
                  <Button text="Confirmar" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
