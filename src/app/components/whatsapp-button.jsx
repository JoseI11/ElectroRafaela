import React from 'react'

/**
 * Componente para mostrar un botón que al realizar clic sobre el, abre una ventana de WhatsApp para contactar a la empresa con un mensaje predeterminado.
 *
 * @returns Un JSXElement con un botón que abre una ventana de WhatsApp
 */
const WhatsappButton = ({ productName, productCode }) => {
   const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER; // Reemplaza con tu número real
    const baseMessage = "Hola, me interesa el producto";
    const productInfo = productName && productCode ? ` ${productName} (Código: ${productCode})` : "";
    const message = encodeURIComponent(`${baseMessage}${productInfo}. ¿Podrías darme más información?`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    return (
      <div className='flex justify-center items-center text-center'>
            <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs w-28 flex justify-center items-center bg-green-500  text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition sm:text-sm sm:w-32 md:w-36"
      >
        Contactar por WhatsApp
      </a>
      </div>
    
    )
}

export default WhatsappButton