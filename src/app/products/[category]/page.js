"use client";
import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {useRouter,usePathname, useParams, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import useProducts from "../../hooks/useProducts"
import useFilterProducts from "../../hooks/useFilterProducts";
import Loader from "../../components/loader";
import PaginateProducts from "../../components/paginate-products";
import MyAccordion from "../../components/accordion";
import ProductsHero from "../../components/products-hero";
import FilterChips from "../../components/filter-chips";
import { FaSearch } from "react-icons/fa";

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

  // useCallback para evitar que handlePageChange se recree en cada render
  // Esto previene re-renders innecesarios de PaginateProducts
  // NOTA: Debe estar antes de cualquier return statement
  const handlePageChange = useCallback((page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    isPaginationChange.current = true;

    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set("page", page);

    router.push(`${pathname}?${newQuery.toString()}`, { shallow: true });
  }, [totalPages, searchParams, pathname, router]);

  // useCallback para handleSearchChange
  const handleSearchChange = useCallback((e) => {
    setSearchText(e.target.value);
    // Reset a página 1 cuando se busca
    setCurrentPage(1);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <ProductsHero category={category} />

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
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

        {/* Filtros Sección */}
        <div className="mb-10">
          {/* Barra de búsqueda */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-500 shadow-sm"
                placeholder="Buscar por nombre o código..."
                title="Buscar productos por nombre o código"
              />
            </div>
          </div>

          {/* Filtros por polos (solo para TERMICAS y DISYUNTORES) */}
          {(category === "TERMICAS" || category === "DISYUNTORES") && (
            <div className="mb-6">
              <details className="group">
                <summary className="cursor-pointer flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600 transition-colors py-2">
                  <span className="group-open:rotate-180 transition-transform">▶</span>
                  Filtrar por Polos
                </summary>
                <div className="mt-4 pl-4 border-l-2 border-slate-200">
                  <FilterCheck productos={currentProducts} />
                </div>
              </details>
            </div>
          )}
        </div>

        {/* Productos Grid */}
        <div className="mb-12">
          <RenderProducts productos={currentProducts} lazy={true} />
        </div>

        {/* Paginación */}
        <div className="flex justify-center">
          <PaginateProducts
            totalPages={totalPages}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoriaPage;

