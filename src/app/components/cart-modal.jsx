"use client";

import React, { useState } from 'react';
import { useCart } from '../context/cart-context';

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-semibold">Tu Carrito ({getTotalItems()})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">
            &times;
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center">
                  {/* Si tienes una imagen de producto, podrías mostrarla aquí */}
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">{item.Nombre} (Código: {item.Código})</p>
                    <p className="text-gray-600 text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 text-center border rounded-md mr-2"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t flex justify-between items-center font-semibold text-lg">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <button
              // onClick={() => handleCheckout()} // Aquí iría la lógica para el checkout
              className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Proceder al Pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
