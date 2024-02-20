'use client'
import Button from "@/components/button/button";
import ContainerForm from "@/components/containerForm";
import Input from "@/components/input/input";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  function handleRedirectSignUp() {  
    router.push('/signup')
  }
  return (
    <main className="min-h-screen  py-10 px-20   bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center">
      <Navbar />
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex col-1 flex-col gap-7">
          <h1 className="font-bold text-5xl text-white">
            Controle suas <span className="text-purple">finanças</span>,<br /> sem
            planilha chata.
          </h1>
          <p className="text-white text-2xl">
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <div className="max-w-60">
          <Button text="Cadastre-se"  onClick={handleRedirectSignUp}/>
          </div>
          
        </div>
        <div className="ml-auto">
        <ContainerForm title="Login">
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
          <div>
            <Button text="Entrar" type="submit"/>
          </div>
        </ContainerForm>
        </div>
        
      </div>
    </main>
  );
}
