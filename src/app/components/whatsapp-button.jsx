import React, { memo, useMemo } from 'react'

/**
 * WhatsappButton - Botón para contactar por WhatsApp
 * Memoizado para evitar re-renders innecesarios cuando el padre cambia
 * 
 * @param {string} productName - Nombre del producto
 * @param {string} productCode - Código del producto
 */
const WhatsappButton = memo(({ productName, productCode }) => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  
  // Memoizar la URL para evitar recrearla en cada render
  const whatsappUrl = useMemo(() => {
    const baseMessage = "Hola, me interesa el producto";
    const productInfo = productName && productCode ? ` ${productName} (Código: ${productCode})` : "";
    const message = encodeURIComponent(`${baseMessage}${productInfo}. ¿Podrías darme más información?`);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  }, [productName, productCode, phoneNumber]);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-center inline-block"
      title="Contactar por WhatsApp"
    >
      WhatsApp
    </a>
  )
});

WhatsappButton.displayName = "WhatsappButton";

export default WhatsappButton