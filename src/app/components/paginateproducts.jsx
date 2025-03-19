"use client";
import React, { useEffect   } from 'react'

const PaginateProducts = ({currentPage, setCurrentPage, totalPages}) => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  } , [currentPage]);

  return (
    <div className="flex justify-center mt-6">
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