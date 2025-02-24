import { useState, useEffect } from "react";
import { equalTo, get, limitToFirst, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase-config"; // Asegúrate de importar `database`
const useProducts = ({ categoria , limite = 12}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoria) {
        console.error("Error: 'categoria' es undefined");
        setLoading(false);
        return;
      }
      const productosRef = ref(db, "productos");
      const consulta = query(
        productosRef,
        orderByChild("Categoría"),
        equalTo(categoria),
        limitToFirst(limite)
      );
      try {
        const snapshot = await get(consulta);
        if (snapshot.exists()) {
          const productosArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setProductos(productosArray); // Evita insertar duplicados
        } else {
          console.log("No se encontraron productos");
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
   
  }, [categoria,limite]);

  return { productos, loading };
};

export default useProducts;
