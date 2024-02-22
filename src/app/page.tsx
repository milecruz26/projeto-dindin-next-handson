"use client";
import Button from "@/components/button/button";
import ContainerForm from "@/components/containerForm";
import Input from "@/components/input/input";
import Navbar from "@/components/navbar/Navbar";
import { toastify } from "@/lib/Toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, SyntheticEvent, useState } from "react";



export default  function Home() {
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')
 
  const router = useRouter();

  function handleRedirectSignUp() {
    router.push("/signup");
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const result =  await signIn('credentials', {
      email,
      password,
      redirect: false
    })
    
    if (result?.error) {
      toastify.error(result.error);
      return
    }
    router.replace('/dashboard')
  }

  return (
    <main className="min-h-screen p-20 bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center flex gap-4 flex-col">
      <Navbar />
      <div className="grid grid-cols-2 items-center justify-center place-items-center flex-1">
        <div className="flex col-1 flex-col gap-7">
          <h1 className="font-bold text-5xl text-white">
            Controle suas <span className="text-purple">finanças</span>,<br />{" "}
            sem planilha chata.
          </h1>
          <p className="text-white text-2xl">
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <div className="max-w-60">
            <Button text="Cadastre-se" onClick={handleRedirectSignUp} />
          </div>
        </div>
        <div className="ml-auto">
          <ContainerForm title="Login" onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              label="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              label="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <Button text="Entrar" type="submit" />
            </div>
          </ContainerForm>
        </div>
      </div>
    </main>
  );
}
