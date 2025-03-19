"use client"; // Esto se ejecuta solo en el cliente

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function FlowbiteProvider({ children }) {
  useEffect(() => {

    initFlowbite();
  }, []);

  return <>{children}</>;
}
