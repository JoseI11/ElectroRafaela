import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import BackToHome from "./back-to-home";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <BackToHome />
      </div>
      <div className="flex justify-center items-center">
        <Image alt="logo" src={logo} height={60} priority />
      </div>
      <div className="w-32">{/* Espacio para futuros elementos de navegación o búsqueda */}</div>
    </header>
  );
};

export default Header;
