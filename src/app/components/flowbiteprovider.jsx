"use client"; // Esto se ejecuta solo en el cliente

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function FlowbiteProvider({ children }) {
  useEffect(() => {
    console.log("Flowbite inicializado")
    initFlowbite(); // Inicializa Flowbite solo en el cliente
  }, []);

  return <>{children}</>;
}
