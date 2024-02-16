import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex-initial h-32">
      <Image src="/logotipo.png" alt="logo" width={169} height={45} />
    </div>
  );
}
