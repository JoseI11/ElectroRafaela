import React from 'react'

/**
 * Pagina para mostrar un mensaje de "en desarrollo" para una funcionalidad no disponible actualmente.
 *
 * @returns {JSX.Element} Un JSXElement con el mensaje de "en desarrollo"
 */
export default function ComingSoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">🚧 En desarrollo 🚧</h1>
        <p className="text-lg text-gray-600 mt-2">
          Estamos trabajando en esta nueva funcionalidad. ¡Pronto estará disponible!
        </p>
      </div>
    </div>
  );
}
