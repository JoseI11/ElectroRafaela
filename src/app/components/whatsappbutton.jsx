import React from 'react'

const WhatsappButton = () => {
   const phoneNumber = "5493492581182"; // Reemplaza con tu número real
    const message = encodeURIComponent("Hola, quiero más información"); // Mensaje codificado
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