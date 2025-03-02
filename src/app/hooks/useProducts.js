import { useState, useEffect } from "react";
import {
  equalTo,
  get,
  limitToFirst,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import { db } from "../firebase-config"; // Asegúrate de importar `database`
const useProducts = ({ categoria, limite = 12, searchText,polos }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(categoria)
      
   
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
        //limitToFirst(limite)
      );
      try {
        const snapshot = await get(consulta);
        if (snapshot.exists()) {
          let productosArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          if (polos?.length > 0) {
            productosArray = productosArray.filter((producto) =>
              polos.includes(producto.Polo)
            );
          }
          if (searchText) {
            productosArray = productosArray.filter((producto) =>
              producto.Nombre.toLowerCase().includes(searchText.toLowerCase())||
              producto.Código.toLowerCase().includes(searchText.toLowerCase())
            );
          }
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
  }, [categoria, limite, searchText,polos]);

  return { productos, loading };
};

export default useProducts;
