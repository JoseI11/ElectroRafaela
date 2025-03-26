"use client";
import React, { useEffect   } from 'react'

/**
 * Componente para paginar productos. Se encarga de cambiar de pagina para no mostrar la totalidad de los productos de cada categoria. Ademas se le agrego un useEffect para que al cambiar de pagina siempre vuele al inicio de la pagina.
 * 
 * @param {number} currentPage Numero de pagina actual
 * @param {function} setCurrentPage Funcion para cambiar la pagina actual
 * @param {number} totalPages N mero total de paginas
 * @returns Un JSXElement con botones para cambiar deap gina
 */
const PaginateProducts = ({currentPage, setCurrentPage, totalPages}) => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  } , [currentPage]);

  return (
    <div className="flex justify-center mt-2 mb-5">
    <button
      className={`px-4 py-2 mx-2 rounded ${
        currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
      onClick={() => setCurrentPage(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Anterior
    </button>
    <span className="px-4 py-2 border rounded">{currentPage} / {totalPages}</span>
    <button 
      className={`px-4 py-2 mx-2 rounded ${
        currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Siguiente
    </button>
  </div>
  )
}

export default PaginateProducts