"use client";
import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation"; // Para capturar parámetros dinámicos
import useProducts from "../../hooks/useProducts"; // Ajusta la ruta según tu estructura
import FilterCheck from "@/app/components/filtercheck";
import Loader from "@/app/components/loader";
import RenderProducts from "@/app/components/renderproducts";
import PaginateProducts from "@/app/components/paginateproducts";
const CategoriaPage = () => {
  const [searchText, setSearchText] = useState("");
  let { categoria } = useParams();
  categoria=categoria.toUpperCase();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 12; // Número de productos por página
  const polos = searchParams.get("polos")?.split(",") || [];  
  const { productos, loading } = useProducts({ categoria, searchText, polos });
  
  if (loading) {
    <Loader />;
  }
  const totalPages = Math.ceil(productos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProductos = productos.slice(startIndex, endIndex);
  return (
    
    <section className="grid grid-cols-[auto,1fr] gap-4 pl-1 pr-1">
      <div className="w-32 sm:w-44 md:w-48">
        <input
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="w-32 h-8 space-x-2 sm:w-44 md:w-48 placeholder:text-xs placeholder:sm:text-sm pl-2"
          placeholder="Buscar"
          title="Buscar por nombre o codigo"
        ></input>
        {categoria === "TERMICAS"?
        
        <FilterCheck />: null}
        
      </div>
     <RenderProducts productos={currentProductos} />
      <PaginateProducts totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
};
export default CategoriaPage;
