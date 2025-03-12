"use client";

import React from "react";
import Link from "next/link";

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
    {
      src: "/assets/interruptor-compacto.png",
      url: "/products/INTERRUPTORES_COMPACTOS",
      text: "INT. COMPACTOS",
    },
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
        <div key={index}>
          <div
         
            className="bg-slate-300 rounded-full flex flex-col justify-center items-center w-48 h-48 m-4"
          >
         
            <Link
              href={imagen.url}
              className="transition-transform transform hover:scale-105"
           
            >
              <img
                src={imagen.src}
                alt={`Icono ${index}`}
                className="w-32 h-32 object-fill flex items-center justify-center"
                
              />
            </Link>
          </div>
          <div className="text-center min-w-32 mx-auto">
            <p >{imagen.text.replace(" ","\n")}</p>
          </div>
          
        </div>
      ))}
    </section>
  );
};

