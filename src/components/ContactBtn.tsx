"use client";

import React, { useState, useEffect } from "react";
import { FaPhoneSquare, FaWhatsappSquare } from "react-icons/fa";

const ContactBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+8801896088860"; // WhatsApp number
  const callNumber = "+8801896088860"; // Call number

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className={`fixed bottom-20 left-2 sm:left-5 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center space-y-3">
        {/* Phone Call Button */}
        <div className="relative group">
          <p className="absolute bottom-14 left-32 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
            {callNumber}
          </p>
          <button
            className="bg-white text-sky-500 transition-transform duration-300 hover:scale-110 rounded-md"
            onClick={() => window.open(`tel:${callNumber}`)}
          >
            <FaPhoneSquare className="w-9 h-9 sm:w-12 sm:h-12" />
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group">
          <p className="absolute bottom-14 left-32 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md">
            {phoneNumber}
          </p>
          <button
            className="bg-white text-green-500 transition-transform duration-300 hover:scale-110 rounded-md"
            onClick={handleClick}
          >
            <FaWhatsappSquare className="w-9 h-9 sm:w-12 sm:h-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBtn;
