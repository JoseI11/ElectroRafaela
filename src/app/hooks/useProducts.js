import { useState, useEffect, useRef } from "react";
import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase-config";

/**
 * Hook para obtener productos de una categoría específica desde Firebase Realtime Database.
 *
 * @param {Object} props - Un objeto con las siguientes propiedades:
 *   - category: La categoría de productos a obtener.
 *
 * @returns {Object} Un objeto con dos propiedades:
 *   - productos: Un array de productos obtenidos de la categoría especificada.
 *   - loading: Un booleano que indica si los productos se están cargando.
 *
 * Este hook realiza una consulta a la base de datos de Firebase para obtener
 * los productos que pertenecen a la categoría proporcionada. Si la categoría
 * actual es la misma que la anterior, no se realiza una nueva consulta. 
 * Mientras se obtienen los datos, el estado de carga es verdadero.
 * Si no se encuentran productos o hay un error, se devuelve un array vacío.
 */

const useProducts = ({ category }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevCategoriaRef = useRef(null); // Usa useRef en lugar de useState
 
  useEffect(() => {
    // Si la categoria es igual a la anterior, no realizar nada
    if (!category || prevCategoriaRef.current === category) return;

    const fetchProducts = async () => {
      setLoading(true);
      setProductos([]); // Limpia los productos antes de la nueva carga

      const productosRef = ref(db, "productos");
      const consulta = query(productosRef, orderByChild("Categoría"), equalTo(category));

      try {
        const snapshot = await get(consulta);
        console.log("Datos obtenidos de Firebase:", snapshot.val()); // Para depuración

        if (snapshot.exists()) {
          const productosArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setProductos(productosArray);
        } else {
          console.warn("No se encontraron productos para la categoría:", category);
          setProductos([]); // Se mantiene como un array vacío
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    prevCategoriaRef.current = category; // Actualiza el valor de referencia después de la consulta
    fetchProducts();
  }, [category]); // La dependencia es solo la categoria

  return { productos, loading };
};

export default useProducts;
