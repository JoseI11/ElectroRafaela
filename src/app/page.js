"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import BannerCarousel from "./components/banner";
import { MuestraProductos } from "./components/showproducts";


export default function Home() {

  // const [productos, setProductos] = useState([]);
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 gap-5 sm:p-1 bg-fondo overflow-hidden">
      <main className="flex flex-col row-start-2 items-center pt-7 sm:pt-5 w-full">
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
