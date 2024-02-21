// import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import tabela from "../../assets/tabela.svg";
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout.svg";

export default function Dashboard() {
  return (
    <main className="max-h-screen bg-gradient-to-r from-cyan-550 to-blue-550">
      <nav className="flex justify-between h-32 py-10 px-20">
        <Image src="/logotipo.png" alt="logo" width={169} height={45} />
        <div className="flex items-center justify-evenly w-[13rem]">
          <Image
            src={profile}
            alt="profile icon"
            width={50}
            className="ml-5 cursor-pointer"
          />
          <span className="text-white font-bold mr-5 cursor-pointer">
            Jamile
          </span>
          <Image
            src={logout}
            alt="logout icon"
            width={21}
            className="cursor-pointer"
          />
        </div>
      </nav>

      <section className="flex items-center justify-center bg-white h-full min-h-80 py-10 px-20">
        <Image src={tabela} alt="tabela" width={1000} />
      </section>
    </main>
  );
}
