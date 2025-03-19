import React, { useEffect, useState } from "react";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";
import { db } from "../firebase-config";

/**
 * Hook para reaizar un filtrado de un producto por su ID.
 *
 * @param {{ id: string }} props - Un objeto con una propiedad "id" que contiene el ID del producto.
 * @returns {{ product: [], loading: boolean }} - Un objeto con dos propiedades: "product", que es un array con el producto solicitado, y "loading", que es un booleano que indica si se est  cargando el producto.
 */
const useProductById = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProductById = async () => {
      setLoading(true);
      setProduct([]);

   
      const productosRef = ref(db, "productos");

      // Realiza la consulta a Firebase con el ID
      const consulta = query(productosRef, orderByChild("ID"), equalTo(id));

      try {
        const snapshot = await get(consulta);
        if (snapshot.exists()) {
          const productosArray = Object.entries(snapshot.val()).map(([key, data]) => ({
            id: key,
            ...data,
          }));
          setProduct(productosArray); // Setear los productos en el estado
        } else {
          console.warn("No se encontró el producto solicitado");
          setProduct([]); // Si no hay datos
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductById();
  }, [id]);

  return { product, loading };
};

export default useProductById;
