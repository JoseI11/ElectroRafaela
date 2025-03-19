import { useState } from "react";
import useProducts from "./useProducts"; // Importamos el hook

/**
 * Custom hook para paginar productos basados en una categoría y un límite. Recupera los productos usando el mismo hook y gestiona el estado de paginación.
 * 
 * @param {Object} params - Parameters for pagination.
 * @param {string} params.category - The category of products to fetch.
 * @param {number} [params.limit=16] - The maximum number of products to fetch per page.
 * 
 * @returns {Object} An object containing:
 * - productos: An array of product objects.
 * - loading: A boolean indicating if the products are still being loaded.
 * - handleLoadMore: A function to load more products and update the last product.
 * - lastProduct: The last product loaded, used for pagination purposes.
 */

const usePaginate = ({ category, limit = 16 }) => {
  const [lastProduct, setLastProduct] = useState(null); // Último producto cargado
  const { productos, loading } = useProducts({ category, limit: limit });

  const handleLoadMore = () => {
    if (productos.length > 0) {
      setLastProduct(productos[productos.length - 1]); // Guarda el último producto cargado
    }
  };

  return {
    productos,
    loading,
    handleLoadMore,
    lastProduct
  };
};

export default usePaginate;
