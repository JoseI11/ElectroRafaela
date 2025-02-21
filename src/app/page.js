"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import BannerCarousel from "./components/banner";
import { MuestraProductos } from "./components/muestraproductos";
import  useProducts  from "./hooks/useProducts";

export default function Home() {
  const { productos, loading } = useProducts();
  // const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   const productsRef = ref(database, "productos");

  //   get(productsRef)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const productosArray = Object.entries(snapshot.val()).map(
  //           ([id, data]) => ({
  //             id,
  //             ...data,
  //           })
  //         );

  //         setProductos(productosArray);
  //       } else {
  //         console.log("No se encontraron productos");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error al obtener los productos:", error);
  //     });
  // }, []);

  // const users = querySnapshot.docs.map(doc => ({
  //   id: doc.id,
  //   ...doc.data()
  // }));
  if (loading) return <p>Cargando productos...</p>;
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 gap-5 sm:p-20 bg-fondo overflow-hidden">
      <main className="flex flex-col row-start-2 items-center pt-32 sm:pt-8 w-full">
        {/* Logo */}
        <div className="fixed top-0 flex justify-center items-center h-28 w-full">
          <Image alt="logo" src={logo} height={100} priority />
        </div>          
        {console.log(productos)}
        <div className="grid grid-cols-3 gap-2">
       
          {productos.map((producto) => (
            <div key={producto.id}>
            <Image alt={producto.ID} src={producto.Image} width={100} height={100}></Image>
              {/* <img alt={producto.ID} src={producto.Image} className="w-20 h-20" /> */}
            </div>
          ))}
        </div>
        {/* Banner Carousel */}
        <div className="relative w-screen overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out w-full">
            <BannerCarousel />
          </div>
        </div>

        {/* Sección de productos */}
        <div className="w-full flex justify-center items-center ">
          <MuestraProductos />
        </div>
      </main>
    </div>
  );
}
