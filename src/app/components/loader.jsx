"use client"
import React from 'react'

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className="flex gap-x-2">
      <div className="w-5 h-5 bg-[rgb(235,126,118)] rounded-full animate-bounce"></div>
      <div className="w-5 h-5 bg-[#ec5e5e] rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-5 h-5 bg-[#f02b2b] rounded-full animate-bounce [animation-delay:0.4s]"></div>
    </div>
  </div>
  )
}

export default Loader