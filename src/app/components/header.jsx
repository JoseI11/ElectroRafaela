"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Electro Rafaela Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="sr-only">Electro Rafaela</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            Acerca de
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;