import React, { useEffect, useState } from "react";

const useFilterProducts = ({ productos = [], searchText, polos }) => {
  const [filteredProductos, setFilteredProductos] = useState([]);
  useEffect(() => {
    if (!Array.isArray(productos)) {
      console.error("useFilterProducts: productos no es un array", productos);
  
      return;
    }

    let productosFiltrados = [...productos];
    if (polos?.length > 0) {
      if (polos?.length > 0) {
        productosFiltrados = productosFiltrados.filter((producto) =>
          polos.includes(producto.Polo)
        );
      }
    }
    if (searchText) {
      productosFiltrados = productosFiltrados.filter(
        (producto) =>
          producto.Nombre.toLowerCase().includes(searchText.toLowerCase()) ||
          producto.Código.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (JSON.stringify(productosFiltrados) !== JSON.stringify(filteredProductos)) {
        setFilteredProductos(productosFiltrados); // Solo actualizar si ha habido cambios
    }
    // setFilteredProductos(productosFiltrados);
  }, [productos, searchText, polos, filteredProductos]);

  return filteredProductos;
};

export default useFilterProducts;
