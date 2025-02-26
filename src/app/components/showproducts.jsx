"use client";

import React from "react";
import Link from "next/link";

export const MuestraProductos = () => {
  const imagenesIconos = [
    { src: "/assets/contactor.png", url: "/productos/CONTACTORES", text: "CONTACTORES" },
    { src: "/assets/disyuntor.png", url: "/productos/DISYUNTORES", text: "DISYUNTORES" },
    { src: "/assets/termica.png", url: "/productos/TERMICAS", text: "TERMICAS" },
    { src: "/assets/guardamotor.png", url: "/productos/GUARDAMOTORES", text: "GUARDAMOTORES" },
  ];

  return (
    <section className="flex flex-row flex-wrap justify-center items-center">
      {imagenesIconos.map((imagen, index) => (
        <div key={index} className="bg-slate-300 rounded-full flex flex-col justify-center items-center w-48 h-48 m-4">
          <Link href={imagen.url} className="transition-transform transform hover:scale-105">
            <img src={imagen.src} alt={`Icono ${index}`} className="w-32 h-32 object-fill flex items-center justify-center" />
          </Link>
          <p>{imagen.text}</p>
        </div>
      ))}
    </section>
  );
};
