"use client";
import React from "react";
import { useParams } from "next/navigation";
import useProducts from "@/app/hooks/useProducts"; // Asegúrate de que este hook obtenga todos los productos
import Image from "next/image";
import WhatsappButton from "@/app/components/whatsappbutton";
import { Button } from "flowbite-react";

const ProductPage = () => {
  const { ID, category } = useParams();
  console.log(ID); // Obtener el ID desde la URL
  const { productos, loading } = useProducts({ category }); // Obtienes todos los productos

  if (loading) {
    return <p>Cargando...</p>;
  }
  console.log(productos);
  // Filtrar productos por ID
  const product = productos.find((producto) => producto.ID === Number(ID));

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="flex justify-center space-x-20 ">
      <Image
        src={product.Image}
        priority
        alt={product.Nombre}
        width={400}
        height={400}
      />
      <div className="pt-7">
        <h1 className="font-custom text-sm sm:text-base md:text-2xl">
          {product.Descripción.toUpperCase()}{" "}{product.Nombre}
        </h1>

        <p className="text-gray-900 font-custom text-sm">{product.Código}</p>
        <div className="pt-20 flex justify-start">
          <WhatsappButton />
          <Button href="https://www.se.com/ar/es/product/download-pdf/GV2ME07?filename=Schneider+Electric_TeSys-Deca-frame-2_GV2ME07.pdf" className="bg-green-500">Descargar ficha tecnica proveniente de Schneider Electric</Button>
        </div>
        
        
      </div>

      {/* Muestra más detalles del producto aquí */}
    </div>
  );
};

export default ProductPage;
