/**
 * ProductsHero Component - Memoizado
 * 
 * Sección hero para páginas de categoría de productos
 * Muestra el nombre de la categoría con descripción breve
 * Se memoiza porque no necesita re-renderizar si el prop category es igual
 * 
 * @param {string} category - Nombre de la categoría
 * @returns {JSX.Element}
 */

import { memo } from 'react';

const categoryDescriptions = {
  CONTACTORES: {
    title: "Contactores",
    description: "Soluciones de control industrial de alta calidad. Contactores robustos diseñados para aplicaciones exigentes.",
  },
  GUARDAMOTORES: {
    title: "Guardamotores",
    description: "Protección confiable para motores eléctricos. Tecnología de vanguardia para máxima seguridad operacional.",
  },
  DISYUNTORES: {
    title: "Disyuntores",
    description: "Protección integral de circuitos. Componentes de precisión para instalaciones industriales y comerciales.",
  },
  TERMICAS: {
    title: "Térmicas",
    description: "Relés térmicos de precisión. Control de temperatura para sistemas críticos de protección de carga.",
  },
  TERMINALES: {
    title: "Terminales",
    description: "Conectores de alta confiabilidad. Soluciones integrales para conexiones seguras y duraderas.",
  },
};

const ProductsHero = memo(({ category }) => {
  const categoryKey = category?.toUpperCase() || "PRODUCTOS";
  const info = categoryDescriptions[categoryKey] || {
    title: categoryKey,
    description: "Explora nuestro catálogo completo de productos eléctricos de calidad superior.",
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {info.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            {info.description}
          </p>
        </div>
      </div>
    </section>
  );
});

ProductsHero.displayName = "ProductsHero";

export default ProductsHero
