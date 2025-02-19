"use client";

import React from "react";
import { FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";

const ContactBtn = () => {
  const phoneNumber = "+8801896088860"; // WhatsApp number
  const callNumber = "+8801896088860"; // Call number

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-20 left-0 sm:left-10 z-50">
      <div className="flex flex-col  items-center">
        {/* Phone Call Button with Hover Number */}
        <div className="relative group">
          <p className="absolute bottom-14 left-32 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
            {callNumber}
          </p>
          <button
            className="bg-white text-sky-500 transition-transform duration-300 hover:scale-110 rounded-md"
            onClick={() => window.open(`tel:${callNumber}`)}
          >
            <FaPhoneSquare className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>
        </div>

        {/* WhatsApp Button with Hover Number */}
        <div className="relative group">
          <p className="absolute bottom-14 left-32 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
            {phoneNumber}
          </p>
          <button
            className="bg-white text-green-500 transition-transform duration-300 hover:scale-110 rounded-md"
            onClick={handleClick}
          >
            <FaWhatsappSquare className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBtn;
