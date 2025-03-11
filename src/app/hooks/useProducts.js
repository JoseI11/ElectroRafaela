import { useState, useEffect, useRef } from "react";
import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase-config";

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
