"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import {useRouter,usePathname, useParams, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import useProducts from "../../hooks/useProducts"
// import useProducts from "@/app/hooks/useProducts";
import useFilterProducts from "../../hooks/useFilterProducts";
import Loader from "../../components/loader";
import PaginateProducts from "../../components/paginate-products";
import MyAccordion from "../../components/accordion";
import { FaFilter } from "react-icons/fa";

import Script from "next/script";

// Lazy load components
const RenderProducts = dynamic(() => import("../../components/render-products"), {
  loading: () => <Loader />,
  ssr: false,
});

const FilterCheck = dynamic(() => import("../../components/filter-check"), {
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
  const router = useRouter()
  const filteredProductos = useFilterProducts({ productos, searchText, polos });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const isPaginationChange = useRef(false);
  const pathname = usePathname();
  useEffect(() => {
    const pageFromUrl = searchParams.get("page");
    if (pageFromUrl) {
      setCurrentPage(parseInt(pageFromUrl, 10));
    }
  }, [searchParams]);
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);

  // useEffect(() => {
  //   if (!isPaginationChange.current) {
  //     setCurrentPage(1);
  //   }
  //   isPaginationChange.current = false;
  // }, [searchText, polos, category]);

  const startIndex = useMemo(() => (currentPage - 1) * itemsPerPage, [currentPage, itemsPerPage]);
  const endIndex = useMemo(() => startIndex + itemsPerPage, [startIndex, itemsPerPage]);
  const currentProducts = useMemo(() => filteredProductos.slice(startIndex, endIndex), [filteredProductos, startIndex, endIndex]);

  if (loading) {
    return <Loader />;
  }

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   isPaginationChange.current = true;
  // };
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    isPaginationChange.current = true;

    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set("page", page);

    // 🔹 Se usa shallow para evitar recarga completa
    router.push(`${pathname}?${newQuery.toString()}`, { shallow: true });
  };
  return (
    <div className="w-full pt-20 overflow-hidden">
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
      <section className="flex flex-col sm:grid sm:grid-cols-[auto,1fr] gap-4 pl-1 pr-1">
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

