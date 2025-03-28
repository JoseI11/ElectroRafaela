import React, { useEffect, useState } from "react";

/**
 * Hook para filtrar un array de productos segun los parametros de busqueda y polos.
 *
 * @param {Object} props - Un objeto con las siguientes propiedades:
 *   - productos: El array de productos a filtrar. Debe ser un array de objetos.
 *   - searchText: El texto a buscar en el nombre o c digo de los productos.
 *   - polos: Un array de polos a filtrar. Si se proporciona, se filtrar n s lo los productos
 *     que tengan alguno de los polos especificados.
 *
 * @returns {Array} Un nuevo array con los productos filtrados.
 */

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
