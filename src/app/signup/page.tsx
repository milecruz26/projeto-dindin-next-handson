import Button from "@/components/button/button";
import ContainerForm from "@/components/containerForm";
import Input from "@/components/input/input";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="min-h-screen  py-10 px-20   bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col items-center">
        <ContainerForm title="Login">
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
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
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            label="Confirmação de Senha"
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
