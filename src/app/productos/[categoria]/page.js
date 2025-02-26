"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation"; // Para capturar parámetros dinámicos
import useProducts from "../../hooks/useProducts"; // Ajusta la ruta según tu estructura
import Image from "next/image";
import WhatsappButton from "../../components/whatsappbutton";
import FilterCheck from "@/app/components/filtercheck";
const CategoriaPage = () => {
  const [searchText, setSearchText] = useState("");
  const { categoria } = useParams();
  const searchParams = useSearchParams();
  const polos = searchParams.get("polos")?.split(",") || [];  
  const { productos, loading } = useProducts({ categoria, searchText, polos });
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-x-2">
          <div className="w-5 h-5 bg-[#d991c2] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-[#9869b8] rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-5 h-5 bg-[#6756cc] rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>
    );
  }
  return (
    <section className="grid grid-cols-[auto,1fr] gap-4 pl-1 pr-1">
      <div className="w-32 sm:w-44 md:w-48">
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="w-32 h-8 space-x-2 sm:w-44 md:w-48 placeholder:text-sm pl-2"
          placeholder="Buscar por nombre o codigo"
        ></input>
        {categoria === "TERMICAS"?
        
        <FilterCheck />: null}
        
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div
            className=" flex w-full items-center  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:flex-col sm:w-40 md:flex-col md:w-44"
            key={producto.id}
          >
            <a href="#" className="flex justify-center">
              <Image
                className="w-full h-28 object-cover rounded-t-lg"
                src={producto.Image}
                alt={producto.Categoría}
                width={200}
                height={200}
                layout="intrinsic"
              />
            </a>
            <div className="px-5 pb-5">
              <a
                href="#"
                className="flex justify-center items-center w-full text-center"
              >
                <h5
                  className="text-xs font-semibold tracking-tight p-0 text-gray-900 dark:text-white sm:text-sm line-clamp-2"
                  title={producto.Nombre}
                >
                  {producto.Nombre}
                </h5>
              </a>
              <div className="flex items-center justify-center mt-2.5 mb-5">
                <p className="text-xs text-gray-900 dark:text-white sm:text-sm">
                  Código:
                </p>
                <p className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                  {producto.Código}
                </p>
              </div>
              <WhatsappButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoriaPage;
