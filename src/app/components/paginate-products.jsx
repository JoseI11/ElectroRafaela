"use client";
import React, { useEffect, memo } from 'react'

/**
 * PaginateProducts - Componente de paginación memoizado
 * Se memoiza para evitar re-renders cuando el padre cambia pero los props son iguales
 * 
 * @param {number} currentPage - Página actual
 * @param {function} setCurrentPage - Función para cambiar página
 * @param {number} totalPages - Total de páginas
 */
const PaginateProducts = memo(({ currentPage, setCurrentPage, totalPages }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-3 py-8">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === 1
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        title="Página anterior"
      >
        ← Anterior
      </button>

      <div className="px-6 py-2 bg-slate-100 rounded-lg text-sm font-semibold text-slate-700">
        <span>{currentPage}</span>
        <span className="text-slate-400 mx-1">/</span>
        <span>{totalPages}</span>
      </div>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          currentPage === totalPages
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        title="Página siguiente"
      >
        Siguiente →
      </button>
    </div>
  )
});

PaginateProducts.displayName = "PaginateProducts";

export default PaginateProducts