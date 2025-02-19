"use client";

import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactBtn = () => {
  const phoneNumber = "01896088860"; // Replace with your actual number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-20 left-0 sm:left-10 z-50">
      <div className="relative group flex flex-col items-center">
        {/* Hidden Number (Shown on Hover) */}
        <p className="absolute bottom-14 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
          {phoneNumber}
        </p>

        {/* WhatsApp Icon Button */}
        <button
          className="bg-white text-green-500 transition-transform duration-300 hover:scale-110 rounded-md"
          onClick={handleClick}
        >
          <FaWhatsappSquare size={50} />
        </button>
      </div>
    </div>
  );
};

export default ContactBtn;
