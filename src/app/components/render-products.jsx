import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import WhatsappButton from "./whatsapp-button";
import NotFound from "../not-found";
/**
 * Realiza el renderizado de una lista de productos segun la categoria seleccionada previamente.
 
 *
 * @param {Array} productos - An array of product objects. Each object should
 * contain the properties 'id', 'Image', 'Categoría', 'Nombre', and 'Código'.
 *
 * @returns {JSX.Element} A JSX component rendering a responsive grid of products,
 * each with an image, product name, product code, and a Whatsapp button.
 */

const RenderProducts = ({ productos }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4">
      {productos===null? <NotFound /> : productos.map((producto) => (
        
        <Link
          href={producto.Detalle_adicional}
          rel="noopener noreferrer"
          className="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 sm:flex-col sm:w-40 md:flex-col md:w-44"
          key={producto.id}
        >
          <div className="flex justify-center">
            <Image
              className="w-full h-28 object-cover rounded-t-lg hover:scale-105 transition-transform duration-200"
              src={producto.Image}
              alt={producto.Nombre}
              width={200}
              height={200}
              layout="intrinsic"
              loading="lazy"
            />
          </div>
          <div className="px-5 pb-5">
            <div
              className="flex justify-center items-center w-full text-center"
            >
              <h5
                className="text-xs font-semibold tracking-tight p-0 text-gray-900 dark:text-gray-100 sm:text-sm line-clamp-2"
                title={producto.Nombre.toUpperCase()}
              >
                {producto.Nombre.toUpperCase()}
              </h5>
            </div>
            <div className="flex items-center justify-center mt-2.5 mb-5">
              <p className="text-xs text-gray-900 dark:text-gray-100 sm:text-sm">
                Código: {producto.Código}
              </p>
            </div>
            <WhatsappButton productName={producto.Nombre} productCode={producto.Código} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RenderProducts;
