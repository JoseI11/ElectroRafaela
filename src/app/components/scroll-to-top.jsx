"use client"
import {usePathname} from "next/navigation"
import { useEffect } from "react";
/**
 * Componente que se encarga de desplazar el scroll hacia arriba
 * cuando cambia la ruta. No realiza ninguna renderización.
 *
 * @returns {null} No renderiza nada
 */
export default function ScrollToTop() {
    const pathname = usePathname();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]); // Se ejecuta cuando cambia la ruta
  
    return null; // No renderiza nada
}