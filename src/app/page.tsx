import Form from "@/components/form/Form";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-[url('../assets/background.svg')] bg-clip-padding bg-no-repeat  bg-cover bg-center">
      <Navbar />
      <div className="p-0.5 flex">
        <div className="flex-1 ">
          <h1>Controle suas finanças, sem planilha chata.</h1>
          <p>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <button>Cadastre-se</button>
        </div>

        <Form />
      </div>
    </main>
  );
}
