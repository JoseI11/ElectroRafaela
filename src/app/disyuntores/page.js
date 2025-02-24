"use client";

import React, { useState } from "react";
import "firebase/firestore";
import Image from "next/image";
import useProducts from "../hooks/useProducts";
import WhatsappButton from "../components/whatsappbutton";

const Disyuntores = () => {
  const { productos, loading } = useProducts({categoria:"TERMICAS"});

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex gap-x-2">
          <div className="w-5 h-5 bg-[#d991c2] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-[#9869b8] rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-5 h-5 bg-[#6756cc] rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
      </div>
    );
  return (
    <section className="grid grid-cols-[auto,1fr] gap-4">
      <div className="w-32 sm:w-44 md:w-48">
        <h3>Productos</h3>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 md:grid md:grid-cols-4">
      {productos.map((producto) => (
        <div
          className="w-24 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 sm:w-44  md:w-48"  
          key={producto.id}
        >
          <a href="#" className="flex justify-center">
            <Image
              className="p-8 rounded-t-lg "
              src={producto.Image}
              alt="product image"
              width={230}
              height={230}
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#" className="flex justify-center">
              <h5 className="text-xs font-semibold tracking-tight text-gray-900 dark:text-white sm:text-sm md:text-base">
                {producto.Nombre}
              </h5>
            </a>
            <div className="flex items-center justify-center mt-2.5 mb-5">
              <p>Código: </p>

              <p className="text-sm font-semibold text-gray-900 dark:text-white">{producto.Código}</p>
            </div>
     
            <div className="flex items-center justify-center">            
              <WhatsappButton />
              {/* <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Consultar por Whatsapp
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
    
  );
};

export default Disyuntores;
