import { useState, useEffect } from "react";
import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { db } from "../firebase-config"; // Asegúrate de importar `database`
import * as firebase from 'firebase/app';
const useProducts = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
     //   const twoRef = rootRef.child('users').orderByChild('email').equalTo('alice@email.com')
     const usuariosRef = ref(db, "productos");
     const consulta = query(usuariosRef, orderByChild("ID"), equalTo(1));
        try {
            
        const snapshot = await get(consulta); // Obtiene datos de Firebase
        if (snapshot.exists()) {
          const productosArray = Object.entries(snapshot.val()).map(
            ([id, data] ) => ({
              id,
              ...data,
            })
          );


          const uniqueProducts = Array.from(
            new Map(productosArray.map((item) => [item.id, item])).values()
          );
        console.log(uniqueProducts.id);
          setProductos(uniqueProducts); // Evita insertar duplicados
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
  }, []);

  return { productos, loading };
};

export default useProducts;
