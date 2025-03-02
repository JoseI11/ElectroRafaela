import React from "react";
import Image from "next/legacy/image";
import WhatsappButton from "../components/whatsappbutton";
const RenderProducts = ({ productos }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <div
          className=" flex w-full items-center  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:flex-col sm:w-40 md:flex-col md:w-44"
          key={producto.id}
        >
          <a href="#" className="flex justify-center">
            <Image
              className="w-full h-28 object-cover rounded-t-lg"
              src={producto.Image}
              alt={producto.Categoría}
              width={200}
              height={200}
              layout="intrinsic"
              priority
            />
          </a>
          <div className="px-5 pb-5">
            <a
              href="#"
              className="flex justify-center items-center w-full text-center"
            >
              <h5
                className="text-xs font-semibold tracking-tight p-0 text-gray-900 dark:text-white sm:text-sm line-clamp-2"
                title={producto.Nombre}
              >
                {producto.Nombre}
              </h5>
            </a>
            <div className="flex items-center justify-center mt-2.5 mb-5">
              <p className="text-xs text-gray-900 dark:text-white sm:text-sm">
                Código:
              </p>
              <p className="text-xs font-semibold text-gray-900 dark:text-white sm:text-sm">
                {producto.Código}
              </p>
            </div>
            <WhatsappButton />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderProducts;
