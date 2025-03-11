import { useState } from "react";
import useProducts from "./useProducts"; // Importamos el hook

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
