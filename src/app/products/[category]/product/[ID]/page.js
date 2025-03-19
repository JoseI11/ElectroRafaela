"use client";
import React from "react";
import { useParams } from "next/navigation";
import useProducts from "@/app/hooks/useProducts";
import Image from "next/image";
import WhatsappButton from "@/app/components/whatsappbutton";
import { Button } from "flowbite-react";
import ModalAccesories from "@/app/components/modal";
import Loader from "@/app/components/loader";

const ProductPage = () => {
  const { ID, category } = useParams();

  const { productos, loading } = useProducts({ category }); // Obtienes todos los productos

  if (loading) {
    return <Loader />;
  }

  // Filtrar productos por ID
  const product = productos.find((producto) => producto.ID === Number(ID));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <section>
      <div className="flex justify-center space-x-20 ">
        <Image
          src={product.Image}
          priority
          alt={product.Nombre}
          width={350}
          height={350}
        />
        <div className="pt-7">
          <h1 className="font-custom text-sm sm:text-base md:text-2xl">
            {product?.Descripción.toUpperCase()} {product?.Nombre}
          </h1>

          <p className="text-gray-900 font-custom text-sm">{product.Código}</p>
          <div className="pt-20 flex justify-start">
            <WhatsappButton />
          </div>
        </div>
      </div>
      <section className="grid grid-cols-2 pt-3 ">
        <section className="flex justify-center items-center flex-col border-2">
          <h2>Informacion adicional del producto</h2>
          <div className="flex items-center space-x-6">
            <Button href={product.Ficha} className="bg-red-400">
              Descargar ficha
            </Button>
            <Button href={product.Guia} className="bg-red-400">
              Descargar catalogo
            </Button>
          </div>
        </section>
        
        <section className="flex justify-center items-center flex-col border-2">
          <h2>Este producto es compatible con los siguientes accesorios:</h2>
          <div className="flex items-center justify-center"></div>
          <ModalAccesories
            quantity={product?.Accesorios_compatibles.length}
            product={product}
            
          />
        </section>
      </section>
    </section>
  );
};

export default ProductPage;
