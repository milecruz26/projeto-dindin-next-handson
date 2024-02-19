import Form from "@/components/form/Form";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center">
      <Navbar />
      <div className="p-0.5 flex items-center">
        <div className="flex-1 flex flex-col gap-7">
          <h1 className="font-bold text-5xl text-white">Controle suas <span className="text-purple">finanças</span>, sem planilha chata.</h1>
          <p className="text-white text-2xl">
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <button className="max-w-72">Cadastre-se</button>
        </div>
        <Form />
      </div>
    </main>
  );
}
