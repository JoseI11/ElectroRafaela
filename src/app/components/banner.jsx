"use client";

import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import logoSchneider from "../../../public/assets/Schneider-Electric-Logo.webp";


/**
 * Componente para mostrar un banner de la empresa Schneider Electric. Si bien ahora solo muestra el logo solamente de Schneider, en el futuro se puede agregar mas logos de otros proveedores para mostrar que trabajan con nosotros.
 *
 * Se encarga de mostrar el logo de la empresa en un contenedor flexible que
 * se ajusta al ancho de la pantalla. Ademas, se le agrego un efecto de
 * transicion para que el banner cambie de lugar cada cierto tiempo.
 *
 * @returns {JSX.Element} Un JSXElement con el banner de la empresa
 */
export default function BannerCarousel() {
  return (
    <div className="relative w-screen h-auto overflow-hidden">
      
      <div
        className="flex transition-transform duration-700 ease-in-out w-screen items-center justify-center"
      >
          <Image src={logoSchneider} width={600} height={200}></Image>
      </div>

    
    </div>
  );
}
