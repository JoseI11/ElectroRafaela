"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import BannerCarousel from "./components/banner";
import { MuestraProductos } from "./components/muestraproducts";


export default function Home() {

  // const [productos, setProductos] = useState([]);
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 gap-5 sm:p-20 bg-fondo overflow-hidden">
      <main className="flex flex-col row-start-2 items-center pt-32 sm:pt-8 w-full">
        {/* Logo */}
        <div className="fixed top-0 flex justify-center items-center h-28 w-full">
          <Image alt="logo" src={logo} height={100} priority />
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
