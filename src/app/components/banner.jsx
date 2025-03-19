"use client";

import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import logoSchneider from "../../../public/assets/Schneider-Electric-Logo.webp";


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
