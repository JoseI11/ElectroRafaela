"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import useProducts from "@/app/hooks/useProducts";
import FilterCheck from "@/app/components/filtercheck";
import Loader from "@/app/components/loader";
import RenderProducts from "@/app/components/renderproducts";
import useFilterProducts from "@/app/hooks/useFilterProducts";
import PaginateProducts from "@/app/components/paginateproducts";
import MyAccordion from "@/app/components/accordion";

const CategoriaPage = () => {
  const [searchText, setSearchText] = useState("");
  let { category } = useParams();
  category = category.toUpperCase();
  const searchParams = useSearchParams();

  const polos = useMemo(
    () => searchParams.get("polos")?.split(",") || [],
    [searchParams]
  );
  const { productos, loading } = useProducts({ category });

  const filteredProductos = useFilterProducts({ productos, searchText, polos });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Usamos useRef para evitar el reset de la página cuando cambiamos la paginación
  const isPaginationChange = useRef(false);

  // Total de páginas basado en los productos filtrados
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);

  // Resetear a la primera página cuando searchText o polos cambien
  useEffect(() => {
    if (!isPaginationChange.current) {
      setCurrentPage(1);
    }
    isPaginationChange.current = false; // Resetear la referencia después de resetear la página
  }, [searchText, polos, category]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProductos.slice(startIndex, endIndex);

  if (loading) {
    return <Loader />;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page); // Primero cambiamos la página
    isPaginationChange.current = true; // Luego marcamos que fue un cambio manual
  };

  return (
    <div className="w-full">
      <section className="grid grid-cols-[auto,1fr] gap-4 pl-1 pr-1">
        <div className="w-32 space-y-3 sm:w-44 md:w-48">
          <input
            type="search"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-32 h-8 space-x-2 sm:w-44 md:w-48 placeholder:text-xs placeholder:sm:text-sm pl-2"
            placeholder="Buscar"
            title="Buscar por nombre o código"
          />

          {(category === "TERMICAS" || category === "DISYUNTORES") && (
            <MyAccordion title={"Tipos de polos"}>
              <FilterCheck productos={currentProducts} />
            </MyAccordion>
          )}
        </div>
        <RenderProducts productos={currentProducts} />
      </section>
      <div className="flex flex-col justify-center items-center">
        
        <PaginateProducts
          totalPages={totalPages}
          setCurrentPage={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CategoriaPage;
