"use client";
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";


/**
 * MuestraProductos es un componente que renderiza una serie de iconos 
 * representando diferentes categorías de productos. Cada icono actúa como 
 * un enlace hacia una página específica de productos. 
 * 
 * @returns {JSX.Element} Un elemento JSX que contiene un conjunto de iconos 
 * en un contenedor flexible, cada uno enlazado a una categoría de productos.
 */

export const MuestraProductos = () => {
  const imagenesIconos = [
    {
      src: "/assets/contactor.png",
      url: "/products/CONTACTORES",
      text: "CONTACTORES",
    },
    {
      src: "/assets/guardamotor.png",
      url: "/products/GUARDAMOTORES",
      text: "GUARDAMOTORES",
    },
    // {
    //   src: "/assets/interruptor-compacto.png",
    //   url: "/products/INTERRUPTORES_COMPACTOS",
    //   text: "INT. COMPACTOS",
    // },
    {
      src: "/assets/disyuntor.png",
      url: "/products/DISYUNTORES",
      text: "DISYUNTORES",
    },
    {
      src: "/assets/termica.png",
      url: "/products/TERMICAS",
      text: "TERMICAS",
    },
  ];
  return (
    <section className="flex flex-row flex-wrap justify-center items-center">
      {imagenesIconos.map((imagen, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-slate-300 rounded-full flex justify-center items-center w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 m-4">

            <Link href={imagen.url} className="transition-transform transform hover:scale-105 w-full h-full" prefetch={false}>
              <div className="relative w-full h-full bg-none">
                <Image
                  src={imagen.src}
                  alt={`Icono ${index}`}
                  layout="responsive"
                  width={128}
                  height={128}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="text-center w-20 sm:w-28 md:w-36 lg:w-44">
            <p className="whitespace-pre-line">{imagen.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
