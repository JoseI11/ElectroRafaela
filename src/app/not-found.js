import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-5xl font-bold text-red-600">404</h1>
          <p className="text-lg mt-4">Página no encontrada</p>
          <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Volver al inicio
          </Link>
        </div>
      );
};

export default NotFound;
