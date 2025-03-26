"use client"; // Esto se ejecuta solo en el cliente

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

/**
 * Provider que inicializa Flowbite en el cliente 
 *
 * @function FlowbiteProvider
 * @param {React.ReactNode} children Elementos hijos a renderizar.
 * @returns {React.ReactNode} Los elementos hijos renderizados.
 */
export default function FlowbiteProvider({ children }) {
  useEffect(() => {

    initFlowbite();
  }, []);

  return <>{children}</>;
}
