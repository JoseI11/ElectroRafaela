"use client";
import React from 'react'
import Link from 'next/link'; // Ensure Link is imported

import { usePathname } from "next/navigation";
import ArrowCircleLeft from './arrow-circle-left';

const BackToHome = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" ? (
        <Link
          href="/"
          className=" text-black px-4 py-2 rounded-lg border-blue-600  hover:bg-blue-400 flex items-center"
        >
        
          <ArrowCircleLeft/> Volver al inicio
        </Link>
      ) : null}
    </>
  );
}

export default BackToHome