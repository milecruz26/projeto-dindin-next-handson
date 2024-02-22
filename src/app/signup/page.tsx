"use client";
import Button from "@/components/button/button";
import ContainerForm from "@/components/containerForm";
import Input from "@/components/input/input";
import Navbar from "@/components/navbar/Navbar";
import {toastify } from "@/lib/Toast";
// import { getItemStorage, setItemStorage } from "../../utils/localStorage";
import Link from "next/link";

import { useState } from "react";
import React from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

/*   const [erro, setErro] = useState({
    nameErro: "",
    emailErro: "",
    passwordErro: "",
  }); */

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  
    // const signup = await api.post("/user/signup", {
    // user_name: form.name,
    // email: form.email,
    // password: form.password
    // })

    //Apenas para testes:
    // setItemStorage("email", form.email);
    // console.log(getItemStorage("email"));

    if (!form.email.includes("@") || !form.email.includes(".com")) {
      /* setErro({ ...erro, emailErro: "O e-mail informado é inválido." }); */
      return toastify.error("O e-mail informado é inválido.");
    }

    if (form.password.length < 5) {
      /* setErro({
        ...erro,
        passwordErro: "A senha deve ter no mínimo 5 dígitos.",
      }); */

      return toastify.error("A senha deve ter no mínimo 5 dígitos.",) 
     
    }
    if (form.password !== form.passwordConfirm) {
     /*  setErro({
        ...erro,
        passwordErro: "As senhas não coincidem",
      }); */

      return toastify.error("As senhas não coincidem") 
    }
    /* setErro({ nameErro: "", emailErro: "", passwordErro: "" }); */
  };

  const handleChange = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.id]: value });
  };

  return (
    <main className="p-10 bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <ContainerForm title="Login" onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
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
            label="Confirmação de Senha"
            value={form.passwordConfirm}
            onChange={(event) => handleChange(event)}
          />
          <div>
            <Button text="Entrar" type="submit" />
          </div>

          <Link
            href={"/"}
            className="flex justify-center text-purple cursor-pointer"
          >
            Já tem cadastro? Clique aqui!
          </Link>
        </ContainerForm>
      </div>
    </main>
  );
}
