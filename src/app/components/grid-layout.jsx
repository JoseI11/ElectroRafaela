"use client";
import React from "react";
import { usePathname } from "next/navigation";
const GridLayout = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <div
      className={`relative top-0 grid ${
        isHomePage ? "grid-cols-1" : "grid-cols-[auto,1fr]"
      } h-28 w-full`}
    >
      {children}
    </div>
  );
};

export default GridLayout;
