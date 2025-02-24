"use client";

import React from "react";

export const MuestraProductos = () => {
  const imagenesIconos = [
    {src: "/assets/contactor.png", url: "/contactores", text:"CONTACTORES"},
    {src:"/assets/disyuntor.png", url: "/disyuntores", text:"DISYUNTORES"},
    {src:"/assets/termica.png", url: "/termicas", text:"TERMICAS"},
    {src:"/assets/guardamotor.png", url: "/guardamotores", text:"GUARDAMOTORES"},
  ];
  return (
    <section className="flex flex-row flex-wrap justify-center items-center ">
      {imagenesIconos.map((imagen, index) => (
        <div className="bg-slate-300 rounded-full flex flex-col justify-center items-center w-48 h-48 m-4" key={index}>
          <a href={imagen.url}  className="transition-transform transform hover:scale-105" >
            <img
              src={imagen.src}
              alt={`Icono ${index}`}
              className="w-32 h-32 object-fill flex items-center justify-center"
            />
          </a>
          <p>{imagen.text}</p>
        </div>
      ))}
    </section>
  );
};
