"use client";
import React, { useState } from "react";
import Image from "next/image";
import Input from "../input/input";
import iconClose from "../../assets/close-icon.svg";
import Button from "../button/button";
import { toastify } from "@/lib/Toast";
// import { getItemStorage, setItemStorage } from "../../utils/localStorage";

export default function Modal({
  click,
  setClick,
}: {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // const loadUser = async () => {
  //   const { data } = await api.get(`/user/${id}`, {
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //     },
  //   });
  //   setForm({
  //     name: data[0].user_name,
  //     email: data[0].email,
  //     password: data[0].password,
  //
  //   });
  // };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    // await api.put(
    //   `/user/toEdit/${id}`,
    //   {
    //     ...form,
    //   },
    //   {
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    //Apenas para testes:
    // setItemStorage("email", form.email);
    // console.log(getItemStorage("email"));

    if (!form.email.includes("@") || !form.email.includes(".com")) {
      return toastify.error("O e-mail informado é inválido.");
    }

    if (form.password.length < 5) {
      return toastify.error("A senha deve ter no mínimo 5 dígitos.");
    }
    if (form.password !== form.passwordConfirm) {
      return toastify.error("As senhas não coincidem");
    }
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.id]: value });
  };

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
                onClick={() => setClick(false)}
              />
            </div>

            <div>
              <form
                className="space-y-6 flex flex-col justify-evenly  h-[500px]"
                onSubmit={handleSubmit}
              >
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="nome"
                  label="Nome"
                  value={form.name}
                  onChange={(event) => handleChange(event)}
                />
                <Input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  label="E-mail"
                  value={form.email}
                  onChange={(event) => handleChange(event)}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  label="Senha"
                  value={form.password}
                  onChange={(event) => handleChange(event)}
                />
                <Input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="passwordConfirm"
                  label="Confirmar senha"
                  value={form.passwordConfirm}
                  onChange={(event) => handleChange(event)}
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
