"use client";

import { useState, useEffect } from "react";

const images = ["/assets/mesa-de-trabajo.png", "/assets/desktop.png"];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-auto overflow-hidden">
      {/* Imágenes */}
      <div
        className="flex transition-transform duration-700 ease-in-out w-screen flex-nowrap"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-screen object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
