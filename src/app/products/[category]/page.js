"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import useProducts from "@/app/hooks/useProducts";
import useFilterProducts from "@/app/hooks/useFilterProducts";
import Loader from "@/app/components/loader";
import PaginateProducts from "@/app/components/paginateproducts";
import MyAccordion from "@/app/components/accordion";
import { FaFilter } from "react-icons/fa";
import Image from "next/image";
import Script from "next/script";

// Lazy load components
const RenderProducts = dynamic(() => import("@/app/components/renderproducts"), {
  loading: () => <Loader />,
  ssr: false,
});

const FilterCheck = dynamic(() => import("@/app/components/filtercheck"), {
  ssr: false,
});

/**
 * Componente que renderiza los productos de una categoria determinada en una pagina.
 * 
 * @returns {JSX.Element} Un JSXElement que contiene:
 *   - Un formulario de busqueda,
 *   - Un componente de filtrado de polos (si se trata de termicas o disyuntores),
 *   - Un componente de renderizado de productos,
 *   - Un componente de paginacion.
 */
const CategoriaPage = () => {
  const [searchText, setSearchText] = useState("");
  let { category } = useParams();
  category = category.toUpperCase();
  const searchParams = useSearchParams();

  const polos = useMemo(() => searchParams.get("polos")?.split(",") || [], [searchParams]);
  const { productos, loading } = useProducts({ category });

  const filteredProductos = useFilterProducts({ productos, searchText, polos });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const isPaginationChange = useRef(false);

  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);

  useEffect(() => {
    if (!isPaginationChange.current) {
      setCurrentPage(1);
    }
    isPaginationChange.current = false;
  }, [searchText, polos, category]);

  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const endIndex = useMemo(() => startIndex + itemsPerPage, [startIndex, itemsPerPage]);
  const currentProducts = useMemo(() => filteredProductos.slice(startIndex, endIndex), [filteredProductos, startIndex, endIndex]);

  if (loading) {
    return <Loader />;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    isPaginationChange.current = true;
  };

  return (
    <div className="w-full">
      <Script
        rel="preconnect"
        href="https://fonts.googleapis.com"
        strategy="lazyOnload"
      />
      <Script
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
        strategy="lazyOnload"
      />
      <section className="grid grid-cols-[auto,1fr] gap-4 pl-1 pr-1">
        <div className="w-32 space-y-3 sm:w-44 md:w-48">
          <div className="relative">
            <FaFilter className="absolute left-2 top-2.5 text-gray-500" />
            <input
              type="search"
              onChange={(e) => setSearchText(e.target.value)}
              className="w-32 h-8 pl-8 text-sm sm:w-44 sm:text-base md:w-48 placeholder:text-xs placeholder:sm:text-sm"
              placeholder="Buscar"
              title="Buscar por nombre o código"
            />
          </div>

          {(category === "TERMICAS" || category === "DISYUNTORES") && (
            <MyAccordion title="Tipos de polos">
              <FilterCheck productos={currentProducts} />
            </MyAccordion>
          )}
        </div>
        <RenderProducts productos={currentProducts} lazy={true} />
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
