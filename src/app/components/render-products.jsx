import React, { memo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "./whatsapp-button";
import NotFound from "../not-found";
import { useCart } from "../context/cart-context";

/**
 * ProductCard - Card individual de producto memoizado
 * Se memoiza para evitar re-renders cuando props del padre cambian
 */
const ProductCard = memo(({ producto, onAddToCart }) => {
  return (
    <div className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
      {/* Imagen con altura fija y overlay */}
      <Link
        href={producto.Detalle_adicional}
        rel="noopener noreferrer"
        className="relative overflow-hidden bg-slate-100 flex-shrink-0 h-48 sm:h-52"
      >
        <Image
          src={producto.Image}
          alt={producto.Nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Badge de categoría */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {producto.Código}
        </div>
      </Link>

      {/* Contenido de la card */}
      <div className="flex flex-col flex-grow p-4">
        {/* Título */}
        <Link
          href={producto.Detalle_adicional}
          rel="noopener noreferrer"
          className="group/title"
        >
          <h3 className="font-bold text-sm leading-tight text-slate-900 mb-2 line-clamp-2 group-hover/title:text-blue-600 transition-colors">
            {producto.Nombre.toUpperCase()}
          </h3>
        </Link>

        {/* Info secundaria */}
        <p className="text-xs text-slate-600 mb-4 font-medium">
          Código: <span className="text-slate-900 font-semibold">{producto.Código}</span>
        </p>

        {/* Spacer flexible */}
        <div className="flex-grow" />

        {/* CTAs */}
        <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
          <button
            onClick={() =>
              onAddToCart({ ...producto, price: producto.price || 100 })
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            title="Agregar al carrito"
          >
            Agregar al Carrito
          </button>

          <WhatsappButton
            productName={producto.Nombre}
            productCode={producto.Código}
          />
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

/**
 * RenderProducts - Grid de productos tipo e-commerce moderno
 * Optimizado con memo y useCallback para evitar re-renders innecesarios
 */
const RenderProducts = memo(({ productos }) => {
  const { addToCart } = useCart();

  // useCallback para memoizar la función - se crea solo una vez
  const handleAddToCart = useCallback(
    (product) => {
      addToCart(product);
    },
    [addToCart]
  );

  if (productos === null || productos.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="w-full">
      {/* Grid responsivo: 1 col mobile, 2 tablet, 3 desktop md, 4 xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
});

RenderProducts.displayName = "RenderProducts";

export default RenderProducts;
