import React from 'react'

const WhatsappButton = () => {
   const phoneNumber = "5493492581182"; // Reemplaza con tu número real
    const message = encodeURIComponent("Hola, quiero más información"); // Mensaje codificado
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    return (
        <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition sm:text-sm md:text-[1rem]"
      >
        Contactar por WhatsApp
      </a>
    )
}

export default WhatsappButton