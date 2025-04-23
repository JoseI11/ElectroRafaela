"use client";

import React, { useState } from "react";
import { updateProduct } from "../lib/firebaseClient";

export default function ProductoForm() {
  const [id, setId] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateProduct(`productos/${id}`, {
       
        stock: parseInt(stock),
      });
      alert("Producto actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Hubo un error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-xl">
      <input
        type="text"
        placeholder="ID del producto"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Actualizar
      </button>
    </form>
  );
}
