"use client"
import {usePathname} from "next/navigation"
import { useEffect } from "react";
export default function ScrollToTop() {
    const pathname = usePathname();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]); // Se ejecuta cuando cambia la ruta
  
    return null; // No renderiza nada
}